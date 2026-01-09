import { useEffect, useRef, useState } from 'react';

export const YesodSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    function setCanvasSize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = canvas!.getBoundingClientRect();
      canvas!.width = Math.round(rect.width * dpr);
      canvas!.height = Math.round(rect.height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      return {
        w: rect.width,
        h: rect.height
      };
    }
    
    function draw() {
      const { w: W, h: H } = setCanvasSize();
      const pad = { l: 70, r: 30, t: 22, b: 56 };
      const plot = {
        x: pad.l,
        y: pad.t,
        w: W - pad.l - pad.r,
        h: H - pad.t - pad.b
      };
      
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = "rgba(0,0,0,0)";
      ctx!.fillRect(0, 0, W, H);

      // grid
      ctx!.strokeStyle = "rgba(255,255,255,0.08)";
      ctx!.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = plot.y + plot.h * (i / 4);
        ctx!.beginPath();
        ctx!.moveTo(plot.x, y);
        ctx!.lineTo(plot.x + plot.w, y);
        ctx!.stroke();
      }

      // axes
      ctx!.strokeStyle = "rgba(255,255,255,0.22)";
      ctx!.lineWidth = 5;
      ctx!.lineCap = "round";
      ctx!.beginPath();
      ctx!.moveTo(plot.x, plot.y);
      ctx!.lineTo(plot.x, plot.y + plot.h);
      ctx!.lineTo(plot.x + plot.w, plot.y + plot.h);
      ctx!.stroke();

      // y labels
      const yLabels = ["0%", "40%", "80%", "120%"];
      ctx!.fillStyle = "rgba(185,185,201,0.78)";
      ctx!.font = "700 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
      yLabels.forEach((lbl, idx) => {
        const t = idx / (yLabels.length - 1);
        const y = plot.y + plot.h - plot.h * t;
        ctx!.fillText(lbl, plot.x - 45, y + 4);
      });

      // x labels
      const xLabels = ["2", "4", "6", "8", "10"];
      xLabels.forEach((lbl, idx) => {
        const t = (idx + 1) / (xLabels.length + 1);
        const x = plot.x + plot.w * t;
        ctx!.strokeStyle = "rgba(255,255,255,0.18)";
        ctx!.lineWidth = 3;
        ctx!.beginPath();
        ctx!.moveTo(x, plot.y + plot.h);
        ctx!.lineTo(x, plot.y + plot.h + 10);
        ctx!.stroke();
        ctx!.fillStyle = "rgba(185,185,201,0.78)";
        ctx!.font = "800 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
        ctx!.fillText(lbl, x - 4, plot.y + plot.h + 28);
      });

      // axis label
      ctx!.fillStyle = "rgba(255,255,255,0.35)";
      ctx!.font = "800 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial";
      ctx!.fillText("TEMPO (MIN)", plot.x + 8, plot.y + plot.h + 48);

      // conscious baseline
      const conY = plot.y + plot.h * 0.90;
      ctx!.strokeStyle = "rgba(123,77,255,0.70)";
      ctx!.lineWidth = 10;
      ctx!.beginPath();
      ctx!.moveTo(plot.x, conY);
      ctx!.lineTo(plot.x + plot.w * 0.88, conY);
      ctx!.stroke();

      // curve points (sigmoid)
      const pts: { x: number; y: number; t: number }[] = [];
      const N = 30;
      for (let i = 0; i <= N; i++) {
        const t = i / N;
        const k = 10;
        const s = 1 / (1 + Math.exp(-k * (t - 0.45)));
        const x = plot.x + plot.w * (0.02 + 0.92 * t);
        const y = plot.y + plot.h - plot.h * (0.06 + 0.78 * s);
        pts.push({ x, y, t });
      }

      // gradient
      const grad = ctx!.createLinearGradient(plot.x, plot.y, plot.x + plot.w, plot.y);
      grad.addColorStop(0, "rgba(156,124,255,0.95)");
      grad.addColorStop(0.55, "rgba(255,77,125,0.95)");
      grad.addColorStop(1, "rgba(255,107,45,0.95)");

      // glow
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.strokeStyle = "rgba(255,77,125,0.16)";
      ctx!.lineWidth = 34;
      ctx!.beginPath();
      pts.forEach((p, i) => i ? ctx!.lineTo(p.x, p.y) : ctx!.moveTo(p.x, p.y));
      ctx!.stroke();
      ctx!.strokeStyle = "rgba(156,124,255,0.12)";
      ctx!.lineWidth = 22;
      ctx!.beginPath();
      pts.forEach((p, i) => i ? ctx!.lineTo(p.x, p.y) : ctx!.moveTo(p.x, p.y));
      ctx!.stroke();

      // main curve
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = 14;
      ctx!.beginPath();
      pts.forEach((p, i) => i ? ctx!.lineTo(p.x, p.y) : ctx!.moveTo(p.x, p.y));
      ctx!.stroke();

      // segmented dividers
      ctx!.strokeStyle = "rgba(11,11,18,0.55)";
      ctx!.lineWidth = 3;
      for (let i = 2; i < pts.length; i += 2) {
        const p = pts[i], p2 = pts[i - 1];
        const dx = p.x - p2.x, dy = p.y - p2.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        ctx!.beginPath();
        ctx!.moveTo(p.x - nx * 10, p.y - ny * 10);
        ctx!.lineTo(p.x + nx * 10, p.y + ny * 10);
        ctx!.stroke();
      }

      // bubble rings (right)
      const bx = plot.x + plot.w * 0.83;
      const by = plot.y + plot.h * 0.24;
      const rings = [140, 105, 75, 50];
      rings.forEach((r, idx) => {
        const g = ctx!.createRadialGradient(bx, by, 6, bx, by, r);
        g.addColorStop(0, idx % 2 ? "rgba(255,77,125,0.22)" : "rgba(156,124,255,0.18)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(bx, by, r, 0, Math.PI * 2);
        ctx!.fill();
      });

      // labels - responsive positioning
      const isMobile = W < 500;
      const labelX = isMobile ? plot.x + plot.w * 0.28 : plot.x + plot.w * 0.52;
      const conLabelX = isMobile ? plot.x + plot.w * 0.35 : plot.x + plot.w * 0.58;
      
      ctx!.fillStyle = "rgba(255,255,255,0.92)";
      ctx!.font = `900 ${isMobile ? 12 : 16}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx!.fillText("Força do Subconsciente", labelX, plot.y + plot.h * 0.16);
      ctx!.fillStyle = "rgba(185,185,201,0.75)";
      ctx!.font = `800 ${isMobile ? 11 : 13}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx!.fillText("Milhões bits/s", labelX, plot.y + plot.h * 0.22);
      ctx!.fillStyle = "rgba(255,255,255,0.90)";
      ctx!.font = `900 ${isMobile ? 12 : 14}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx!.fillText("Consciente", conLabelX, conY - 12);
      ctx!.fillStyle = "rgba(185,185,201,0.72)";
      ctx!.font = `800 ${isMobile ? 10 : 12}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial`;
      ctx!.fillText("50 bits/s", conLabelX, conY + 8);
    }
    
    draw();
    let raf: number | null = null;
    const handleResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 px-4 gradient-mystic">
      <div 
        className={`max-w-4xl mx-auto space-y-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">
            O que é <span className="text-accent text-glow-gold">Yesod</span>?
          </h2>
          
          <div className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-4">
            <p>
              Na Cabala, Yesod é a <span className="text-foreground font-medium">fundação</span>.<br />
              É a camada invisível que conecta o que você sente com o que você faz.
            </p>
            <p>
              É onde seus hábitos nascem antes mesmo da sua consciência perceber.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl p-4 bg-background/55 border border-white/[0.08] backdrop-blur-md">
            <p className="font-black text-[clamp(34px,4vw,56px)] leading-none mb-2 text-primary" style={{ textShadow: '0 0 28px rgba(123,77,255,.25)' }}>
              50
            </p>
            <p className="text-sm text-muted-foreground leading-snug">
              bits por segundo processados pela <span className="text-foreground font-medium">mente consciente</span>
            </p>
          </div>
          
          <div className="rounded-2xl p-4 bg-background/55 border border-white/[0.08] backdrop-blur-md">
            <p className="font-black text-[clamp(34px,4vw,56px)] leading-none mb-2 text-accent" style={{ textShadow: '0 0 28px rgba(230,198,107,.18)' }}>
              Milhões
            </p>
            <p className="text-sm text-muted-foreground leading-snug">
              bits por segundo processados pelo <span className="text-foreground font-medium">subconsciente</span>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-lg text-muted-foreground">
          Por isso você tenta mudar usando <span className="text-foreground font-medium">menos de 1% da sua capacidade real</span>.
        </p>

        {/* Canvas Chart */}
        <div>
          <canvas ref={canvasRef} className="w-full h-[360px] block rounded-2xl bg-black/[0.08]" />
        </div>
      </div>
    </section>
  );
};
