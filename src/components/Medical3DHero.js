import React, { useEffect, useRef } from 'react';
import createDnaScene from '../utils/createDnaScene';

const Medical3DHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;
    const cleanup = createDnaScene(canvasRef.current, {
      variant: 'hero',
      accentColor: 0x4cc9f0,
      baseColor: 0x8ee0ff,
      particleColor: 0xbceaff,
    });
    return () => cleanup && cleanup();
  }, []);

  return (
    <section className="medical-3d-hero" data-scroll-animate="true">
      <div className="medical-3d-overlay">
        <div className="medical-3d-text">
          <span className="badge">ADN Lumineux</span>
          <h2>Visualisation biomédicale</h2>
          <p>
            Un ruban d&apos;ADN lumineux, des particules dermiques et un halo bleu évoquent le
            diagnostic de précision du cabinet.
          </p>
        </div>
      </div>
      <canvas
        id="medical3d-canvas"
        ref={canvasRef}
        className="medical-3d-canvas-element"
        aria-hidden="true"
      />
    </section>
  );
};

export default Medical3DHero;

