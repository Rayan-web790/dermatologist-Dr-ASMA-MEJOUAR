import React, { useEffect, useRef } from 'react';
import createDnaScene from '../utils/createDnaScene';

const SideColumns = () => {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  useEffect(() => {
    const cleanups = [];
    if (leftCanvasRef.current) {
      cleanups.push(
        createDnaScene(leftCanvasRef.current, {
          variant: 'side',
          side: 'left',
        })
      );
    }
    if (rightCanvasRef.current) {
      cleanups.push(
        createDnaScene(rightCanvasRef.current, {
          variant: 'side',
          side: 'right',
        })
      );
    }
    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);

  return (
    <>
      <div className="medical-3d-side-column left" aria-hidden="true">
        <canvas ref={leftCanvasRef} className="medical-3d-column-canvas" aria-hidden="true" />
        <div className="medical-3d-video-overlay" />
      </div>
      <div className="medical-3d-side-column right" aria-hidden="true">
        <canvas ref={rightCanvasRef} className="medical-3d-column-canvas" aria-hidden="true" />
        <div className="medical-3d-video-overlay" />
      </div>
    </>
  );
};

export default SideColumns;

