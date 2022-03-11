import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Avatar } from 'antd';
import { DragItem, CardHeader, CardContent, ContentDetail, CardFooter, Author } from './styled';
import { CheckSquareTwoTone } from '@ant-design/icons';
import { ITaskProps } from '@src/types/task';

interface ListItemProps {
  text: ITaskProps;
  index: number;
}

const ListItem = ({ text, index }: ListItemProps) => {
  return (
    <Draggable draggableId={text.dragId} index={index}>
      {(provided) => (
        <DragItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <CardHeader>{text.summary}</CardHeader>
          <CardContent>
            <ContentDetail>연결된 이슈</ContentDetail>
          </CardContent>
          <CardFooter>
            <span>
              <CheckSquareTwoTone /> 프로젝트 이름
            </span>
            <Author>
              <Avatar src="https://secure.gravatar.com/avatar/8fd636768841b632277fc4afe3cbfd1a?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-6.png" />
            </Author>
          </CardFooter>
        </DragItem>
      )}
    </Draggable>
  );
};

export default ListItem;
