import React, { useEffect, useRef } from "react";

// Convert hex string (#RRGGBB or #RRGGBBAA) to [r,g,b,a] floats
function hexToRGBA(hex: string): [number, number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 6) h += "ff";
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const a = parseInt(h.slice(6, 8), 16) / 255;
  return [r, g, b, a];
}

// 🌿 Blob color
const COLORS = [hexToRGBA("#336150")];

// 🌑 Background color
const BG_COLOR = hexToRGBA("#233931");

interface BlobCanvasProps {
  numBlobs?: number;
  blobRadius?: number;
  gaussianFactor?: number;
  colors?: number[][];
  initialSpeed?: number;
  velocityNoise?: number;
}

const BlobCanvas: React.FC<BlobCanvasProps> = ({
  numBlobs = 2,
  blobRadius = 0.15,
  gaussianFactor = 1.2,
  colors = COLORS,
  initialSpeed = 0.05,
  velocityNoise = 0.001,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    // ---------- SHADERS ----------
    const vertexShader = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;

      varying vec2 v_uv;
      uniform vec2 u_centers[${numBlobs}];
      uniform vec4 u_colors[${numBlobs}];
      uniform float u_radius;
      uniform float u_gaussian;
      uniform vec3 u_bgColor;

      void main() {
        vec3 color = u_bgColor;

        for (int i = 0; i < ${numBlobs}; i++) {
          float d = distance(v_uv, u_centers[i]);
          float w = exp(-u_gaussian * d * d / (u_radius * u_radius));
          color += w * u_colors[i].rgb;
        }

        // Soft tone mapping
        color = 1.0 - exp(-color);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // ---------- COMPILE ----------
    const compile = (src: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(vertexShader, gl.VERTEX_SHADER)!);
    gl.attachShader(program, compile(fragmentShader, gl.FRAGMENT_SHADER)!);
    gl.linkProgram(program);
    gl.useProgram(program);

    // ---------- FULLSCREEN QUAD ----------
    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // ---------- UNIFORMS ----------
    const centers = Array.from({ length: numBlobs }, () => [
      Math.random(),
      Math.random(),
    ]);

    const velocities = Array.from({ length: numBlobs }, () => [
      (Math.random() - 0.5) * initialSpeed,
      (Math.random() - 0.5) * initialSpeed,
    ]);

    const uCenters = centers.map((_, i) =>
      gl.getUniformLocation(program, `u_centers[${i}]`)
    );
    const uColors = centers.map((_, i) =>
      gl.getUniformLocation(program, `u_colors[${i}]`)
    );

    gl.uniform1f(gl.getUniformLocation(program, "u_radius"), blobRadius);
    gl.uniform1f(gl.getUniformLocation(program, "u_gaussian"), gaussianFactor);

    // 🌑 SET BACKGROUND COLOR (IMPORTANT)
    const uBg = gl.getUniformLocation(program, "u_bgColor");
    gl.uniform3f(uBg, BG_COLOR[0], BG_COLOR[1], BG_COLOR[2]);

    let last = 0;
    let raf: number;

    const render = (t: number) => {
      t *= 0.001;
      const dt = t - last;
      last = t;

      for (let i = 0; i < numBlobs; i++) {
        velocities[i][0] += (Math.random() - 0.5) * velocityNoise;
        velocities[i][1] += (Math.random() - 0.5) * velocityNoise;

        centers[i][0] += velocities[i][0] * dt;
        centers[i][1] += velocities[i][1] * dt;

        for (let c = 0; c < 2; c++) {
          if (centers[i][c] < 0 || centers[i][c] > 1) {
            velocities[i][c] *= -1;
            centers[i][c] = Math.max(0.0, Math.min(1.0, centers[i][c]));
          }
        }

        gl.uniform2fv(uCenters[i], centers[i]);
        gl.uniform4fv(uColors[i], colors[i % colors.length]);
      }

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [numBlobs, blobRadius, gaussianFactor, colors, initialSpeed, velocityNoise]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        filter: "blur(60px)",   
        width: "100vw",
        height: "100vh",
      }}

    />
  );
};

export default BlobCanvas;
