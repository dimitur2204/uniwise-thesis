import { IconButton } from '@mui/material';
import Eraser from '../../../../assets/images/eraser.png';
import UndoIcon from '../../../../assets/images/undo.png';
import Write from '../../../../assets/images/write.png';
import React, { useState, useRef, useEffect } from 'react';
import questionsData from '../../data/Quiz.json';


export type Point = {
  x: number;
  y: number;
};

export type Drawing = {
  color: string;
  points: Point[];
};

interface CanvasProps {
  showWrite: boolean;
  showDrawings: boolean;
  currentQuestionIndex: number;
}

const DrawingApp: React.FC<CanvasProps> = ({ showWrite, currentQuestionIndex, showDrawings }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<string>('black');
  const [drawing, setDrawing] = useState<Drawing[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isErasing, setIsErasing] = useState<boolean>(false);
  const [isCanvasVisible, setIsCanvasVisible] = useState<boolean>(false); // New state variable

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && showWrite) {
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawing.forEach((draw) => {
          context.strokeStyle = draw.color;
          context.beginPath();
          draw.points.forEach((point, index) => {
            if (index === 0) {
              context.moveTo(point.x, point.y);
            } else {
              context.lineTo(point.x, point.y);
            }
          });
          context.stroke();
        });
      }
    }
  }, [drawing, showWrite]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!showWrite) return;
    const point = getPointFromEvent(event);
    const proximity = 5;

    const indexToRemove = drawing.findIndex((draw) => {
      return draw.points.some((p) => {
        const dx = p.x - point.x;
        const dy = p.y - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= proximity;
      });
    });

    if (indexToRemove !== -1) {
      setDrawing((prevDrawing) => prevDrawing.filter((_, index) => index !== indexToRemove));
    } else {
      setDrawing((prevDrawing) => [
        ...prevDrawing,
        { color: isErasing ? 'white' : color, points: [point] },
      ]);
    }

    setIsDrawing(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!showWrite || !isDrawing) return;
    if (!isDrawing) return;
    const point = getPointFromEvent(event);
    setDrawing((prevDrawing) => {
      const lastDrawing = prevDrawing[prevDrawing.length - 1];
      const newPoints = [...lastDrawing.points, point];
      return prevDrawing.map((draw, index) =>
        index === prevDrawing.length - 1 ? { ...draw, points: newPoints } : draw,
      );
    });
  };

  const handleMouseUp = () => {
    if (!showWrite) return;
    setIsDrawing(false);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    setIsErasing(false);
  };

  const handleEraser = () => {
    setIsErasing(!isErasing);
  };

  const handleUndo = () => {
    setDrawing((prevDrawing) => prevDrawing.slice(0, -1));
  };

  const getPointFromEvent = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const x = (event.clientX - rect.left) * scaleX;
      const y = (event.clientY - rect.top) * scaleY;
      return { x, y };
    }
    return { x: 0, y: 0 };
  };

  return (
    <>
      <div>
        {showDrawings ? (
        <canvas
          style={{
            pointerEvents: showWrite ? 'auto' : 'none', // Make the canvas interactable or non-interactable based on showWrite
            border: showWrite ? '6px solid #1877B1' : 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
          }}
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          width={800}
          height={600}
          onClick={() =>{setIsCanvasVisible(true)}}
        />) : null}
        {showWrite ? (
          <div className="canvasButtons">
            <div className="canvasButton">
              <input type="color" id="color" value={color} onChange={handleColorChange} />
            </div>
            <div className="canvasButton">
              <IconButton onClick={handleEraser}>
                {isErasing ? (
                  <img src={Write} alt="write" className="writeIcon" />
                ) : (
                  <img src={Eraser} alt="eraser" />
                )}
              </IconButton>
            </div>
            <div className="canvasButton">
              <IconButton onClick={handleUndo}>
                <img src={UndoIcon} alt="undo" />
              </IconButton>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DrawingApp;
