import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Tooltip } from "@uniwise/flow-ui-react";
import { ToolbarIcon } from "../Toolbar/Toolbar";
import StickyAdd from "../../../../assets/images/addNote.png";
import StickyRemove from "../../../../assets/images/hideNote.png";
import Trash from "../../../../assets/images/trash.png";
import Minimize from "../../../../assets/images/minimize.png";
import SmallNote from "../../../../assets/images/smallNote.png";
import "./StickyNote.css";


interface StickyNoteProps {
  onAddNote?: () => void;
  onHideNotes?: () => void;
  className: string;
}

interface Note {
  id: number;
  x: number;
  y: number;
  text: string;
  isIcon: boolean;
}

const StickyNote: React.FC<StickyNoteProps> = ({ onAddNote, onHideNotes, className }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const handleAddNote = () => {
    const newNote: Note = {
      id: notes.length,
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 2 - 100,
      text: "",
      isIcon: false,
    };
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleToggleIcon = (id: number) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isIcon: !note.isIcon } : note
      )
    );
  };

  const handleNoteDrag = (id: number, deltaX: number, deltaY: number) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, x: note.x + deltaX, y: note.y + deltaY } : note
      )
    );
  };

  const handleHideNotes = () => {
    setIsHidden(!isHidden);
  };

  const handleShowAllNotes = () => {
    setIsHidden(false);
  };

  return (
    <>
    <Tooltip text={'Add sticky notes'}>
        <ToolbarIcon className={className} onClick={()=>{ handleAddNote(), handleShowAllNotes() }}><img src={StickyAdd} alt='StickyAdd' /></ToolbarIcon>
    </Tooltip>
    <Tooltip text={'Hide sticky Notes'}>
        <ToolbarIcon className={className} onClick={isHidden ? handleShowAllNotes : handleHideNotes}><img src={StickyRemove} alt='StickyRemove' /></ToolbarIcon>
    </Tooltip>
      {!isHidden &&
        notes.map((note) => (
          <div
            key={note.id}
            className={`Note ${note.isIcon ? "Note-icon" : ""}`}
            style={{ left: note.x, top: note.y }}
            onMouseDown={(e) => {
              const startX = e.clientX;
              const startY = e.clientY;
              const handleMouseMove = (e: MouseEvent) => {
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                handleNoteDrag(note.id, deltaX, deltaY);
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", handleMouseMove);
              });
            }}
          >{!note.isIcon && (
            <>
            <div className="Note-icon-bar">
            <div className="Note-delete">
              <IconButton onClick={() => handleDeleteNote(note.id)}><img src={Trash} alt="Close"></img></IconButton>
            </div>
            <div className="Note-toggle-icon">
              <IconButton onClick={() => handleToggleIcon(note.id)}><img src={Minimize} alt="Close"></img></IconButton>
            </div>
            </div>
            
              <textarea
                className="Note-text"
                value={note.text}
                onChange={(e) =>
                  setNotes(
                    notes.map((n) =>
                      n.id === note.id ? { ...n, text: e.target.value } : n
                    )
                  )
                }
              /></>
            )}
            {note.isIcon && (
              <>
              <IconButton onClick={() => handleToggleIcon(note.id)} size="large"><img src={SmallNote} alt="SmallNote"/></IconButton>
              </>
            )}
          </div>
        ))}
    </>
  );
};

export default StickyNote;
