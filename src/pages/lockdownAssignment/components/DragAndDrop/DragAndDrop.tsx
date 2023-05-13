import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type Word = {
  id: string;
  content: string;
};

type Sentence = {
  id: string;
  words: Array<Word | null>;
};

type Props = {
  sentence: Sentence;
  options: Array<Word>;
};

const DragAndDrop: React.FC<Props> = ({ sentence, options }) => {
  const [words, setWords] = useState(sentence.words);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === 'sentence') {
      const newWords = Array.from(words);

      const [removed] = newWords.splice(source.index, 1);
      newWords.splice(destination.index, 0, removed);

      setWords(newWords);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="sentence" direction="horizontal">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {words.map((word, index) => (
                <Draggable key={word?.id ?? index} draggableId={word?.id ?? 'empty'} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {word?.content ?? '______'}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="options">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {options.map((word, index) => (
                <Draggable key={word.id} draggableId={word.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {word.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DragAndDrop;
