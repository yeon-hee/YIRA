import React from 'react';
import BoardHeader from '@src/components/TaskBoard/BoardHeader';
import DragList from '@src/components/TaskBoard/DragList';

const taskBoard = () => {
  return (
    <>
      <BoardHeader />
      <DragList />
    </>
  );
};

export default taskBoard;
