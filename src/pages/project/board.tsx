import { useRootState } from '@src/hooks/useRootState';
import { updateStatusProject } from '@src/reducers/project/getProject';
import { IProjectProps, PROJECT_STATUS } from '@src/types/project';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const ProjectDetail = () => {
  const dispatch = useDispatch();
  const { project } = useRootState((state) => state.project);

  const [todoList, setTodoList] = useState<IProjectProps[]>(project.filter((pro) => pro.status == PROJECT_STATUS.TODO));
  const [doingList, setDoingList] = useState<IProjectProps[]>(
    project.filter((pro) => pro.status == PROJECT_STATUS.DOING),
  );
  const [doneList, setDoneList] = useState<IProjectProps[]>(project.filter((pro) => pro.status == PROJECT_STATUS.DONE));

  const [pick, setPick] = useState<IProjectProps>();

  const onDragStart = useCallback((pro) => {
    console.log(pro);
    setPick(pro);
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    (status) => {
      dispatch(updateStatusProject(pick!)); // 이거 안됨... <- 이거 pick, status 같이 보낼 수 있게 해야함..!
      setTimeout(() => {
        setTodoList(project.filter((p) => p.status == PROJECT_STATUS.TODO));
        setDoingList(project.filter((p) => p.status == PROJECT_STATUS.DOING));
        setDoneList(project.filter((p) => p.status == PROJECT_STATUS.DONE));
      }, 1000);
    },
    [dispatch, pick, project],
  );

  return (
    <>
      <div className="example-parent">
        <div
          className="TODO"
          onDragOver={onDragOver}
          onDrop={() => {
            onDrop(PROJECT_STATUS.TODO);
          }}
        >
          <div>
            {todoList.length
              ? todoList.map((p) => {
                  return (
                    <div
                      draggable="true"
                      onDragStart={() => {
                        onDragStart(p);
                      }}
                      key={p.id}
                    >
                      {p.pname}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div
          className="DOING"
          onDragOver={onDragOver}
          onDrop={() => {
            onDrop(PROJECT_STATUS.DOING);
          }}
        >
          <div>
            {doingList.length
              ? doingList.map((p) => {
                  return (
                    <div
                      draggable="true"
                      onDragStart={() => {
                        onDragStart(p);
                      }}
                      key={p.id}
                    >
                      {p.pname}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div
          className="DONE"
          onDragOver={onDragOver}
          onDrop={() => {
            onDrop(PROJECT_STATUS.DONE);
          }}
        >
          <div>
            {doneList.length
              ? doneList.map((p) => {
                  return (
                    <div
                      draggable="true"
                      onDragStart={() => {
                        onDragStart(p);
                      }}
                      key={p.id}
                    >
                      {p.pname}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <style jsx>{`
        .example-parent {
          border: 2px solid #dfa612;
          color: black;
          display: flex;
          font-family: sans-serif;
          font-weight: bold;
        }

        .TODO {
          flex-basis: 100%;
          flex-grow: 1;
          padding: 10px;
        }

        .example-draggable {
          background-color: #4aae9b;
          font-weight: normal;
          margin-bottom: 10px;
          margin-top: 10px;
          padding: 10px;
        }

        .DOING {
          background-color: #6db65b;
          flex-basis: 100%;
          flex-grow: 1;
          padding: 10px;
        }
        .DONE {
          background-color: #a26f5b;
          flex-basis: 100%;
          flex-grow: 1;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default ProjectDetail;
