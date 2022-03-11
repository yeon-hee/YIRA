import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DroppableStyles, ColumnHeader } from './styled';
import { ITaskProps } from '@src/types/task';
import ListItem from './ListItem';

interface DraggableElementProps {
  col: {
    id: string;
    list: ITaskProps[];
  };
}

const DraggableElement = ({ col: { list, id } }: DraggableElementProps) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <DroppableStyles {...provided.droppableProps} ref={provided.innerRef}>
          <ColumnHeader>
            {id} {list.length}
          </ColumnHeader>
          {list.map((text, index) => (
            <ListItem key={index} text={text} index={index} />
          ))}
          {provided.placeholder}
        </DroppableStyles>
      )}
    </Droppable>
  );
};

export default DraggableElement;
