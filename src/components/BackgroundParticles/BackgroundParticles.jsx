import React, { useEffect, useRef } from 'react';
import './BackgroundParticles.css';

const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    const particleColors = [
      'rgba(168, 85, 247, 0.15)', // Purple glow
      'rgba(236, 72, 153, 0.12)', // Pink glow
      'rgba(34, 211, 238, 0.15)',  // Cyan glow
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseDir = Math.random() > 0.5 ? 1 : -1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.opacity += this.pulseSpeed * this.pulseDir;
        if (this.opacity > 0.8) {
          this.opacity = 0.8;
          this.pulseDir = -1;
        } else if (this.opacity < 0.1) {
          this.opacity = 0.1;
          this.pulseDir = 1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;
        
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/, `${this.opacity})`);
        ctx.fill();
        ctx.closePath();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 35000), 50);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cyber-particles-canvas" />;
};

export default BackgroundParticles;
