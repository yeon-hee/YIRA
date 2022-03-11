import styled from '@emotion/styled';

export const Header = styled.p`
  margin: 20px 0 50px 0;
  font-size: 1.6em;
  font-weight: bold;
`;

export const HeaderSection = styled.p`
  margin: 65px 0 10px 0;
  font-size: 16px;
  color: #636e72;
`;

export const DragDropContextContainer = styled.div`
  .ant-card-head {
    border-bottom: none;
    color: var(--ds-text-lowEmphasis, #5e6c84);
    font-size: 15px;
  }

  .ant-card {
    background: var(--ds-background-subtleNeutral-resting, #f4f5f7);
    border-radius: 6px;
    border: none;

    .ant-card-bordered {
      background: white;
      margin-bottom: 6px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
`;

export const DroppableStyles = styled.div`
  padding: 10px;
  border-radius: 6px;
  background: var(--ds-background-subtleNeutral-resting, #f4f5f7);
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const ColumnHeader = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--ds-text-lowEmphasis, #5e6c84);
  padding: 5px 7px;
`;

export const DragItem = styled.div`
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin: 0 0 8px 0;
  display: grid;
  grid-gap: 14px;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  font-size: 15px;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const CardContent = styled.span`
  margin: 4px 0px 0px;
  display: flex;
`;

export const ContentDetail = styled.span`
  background-color: rgb(234, 230, 255);
  color: rgb(64, 50, 148);
  border-radius: 3px;
  font-size: 13px;
  font-weight: 500;
  padding: 5px;
`;
