import React, { useRef, useEffect } from "react";
import fabric from "fabric";

function BlockSet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = new fabric.fabric.Canvas(canvasRef.current, {
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const rect = new fabric.fabric.Rect({
        left: 10,
        top: 10,
        fill: "blue",
        width: 20,
        height: 20,
      });
      rect.selectable = true;

      const handleResizing = function () {
        rect.set({
          height: rect.height,
          width: rect.width,
        });
        canvas.renderAll();
      };

      const handleModified = function (options: any) {
		if (options.target.scaleX * options.target.width > 100 && options.target.scaleX * options.target.width < 200) {
		  options.target.set({
			fill: "red",
		  });
		} else if (options.target.scaleX * options.target.width >= 200 && options.target.scaleX * options.target.width < 300) {
		  options.target.set({
			fill: "green",
		  });
		} else if (options.target.scaleX * options.target.width >= 300 && options.target.scaleX * options.target.width <= 400) {
      options.target.set({
        fill: "yellow",
        });
    } else if (options.target.scaleX * options.target.width >= 400) {
    options.target.set({
      fill: "white",
      });
  }
		canvas.renderAll();
	  };

      rect.on("resizing", handleResizing);
      rect.on("modified", handleModified);

      canvas.add(rect);
    }
  }, []);

  return <canvas ref={canvasRef} />;
}

export default BlockSet;
