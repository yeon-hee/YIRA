import React, { useCallback, useEffect, useState } from 'react';
import { DragDropContextContainer, ListGrid } from './styled';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DraggableElement from './DraggableElement';
import { dummyTask } from '@src/dummyData/task';
import { ITaskProps } from '@src/types/task';

interface ColumnProps {
  할일: {
    id: string;
    list: ITaskProps[] | null;
  };
  진행중: {
    id: string;
    list: ITaskProps[] | null;
  };
  완료: {
    id: string;
    list: ITaskProps[] | null;
  };
}

const initialColumns: ColumnProps = {
  할일: {
    id: '할일',
    list: dummyTask,
  },
  진행중: {
    id: '진행중',
    list: [],
  },
  완료: {
    id: '완료',
    list: [],
  },
};

const DragList = () => {
  const [columns, setColumns] = useState<ColumnProps>(initialColumns);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;

    // If the source and destination columns are the same
    // AND if the index is the same, the item isn't moving
    if (source.droppableId === destination.droppableId && destination.index === source.index) return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_: any, idx: number) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList,
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_: any, idx: number) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  return (
    <DragDropContextContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {Object.values(columns).map((col) => (
            <DraggableElement col={col} key={col.id} />
          ))}
        </ListGrid>
      </DragDropContext>
    </DragDropContextContainer>
  );
};

export default DragList;
