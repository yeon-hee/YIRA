import ProjectModule from '@src/components/Project/ProjectModule';
import { useRootState } from '@src/hooks/useRootState';
import { updateProjectRequest } from '@src/reducers/project/updateProject';
import { IProjectProps, PROJECT_STATUS } from '@src/types/project';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ProjectDetail = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadProjectRequest());
  // }, [dispatch]);

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

  useEffect(() => {
    setTodoList(project.filter((p) => p.status == PROJECT_STATUS.TODO));
    setDoingList(project.filter((p) => p.status == PROJECT_STATUS.DOING));
    setDoneList(project.filter((p) => p.status == PROJECT_STATUS.DONE));
  }, [project]);

  const onDrop = useCallback(
    (status) => {
      console.log(status);
      dispatch(updateProjectRequest({ project: pick!, status, modified: '' }));
    },
    [dispatch, pick],
  );

  return (
    <>
      <div className="parent">
        <div
          className="TODO board"
          onDragOver={onDragOver}
          onDrop={() => {
            onDrop(PROJECT_STATUS.TODO);
          }}
        >
          <div>
            <div className="title">TODO</div>
            {todoList.length
              ? todoList.map((p) => {
                  return (
                    <div
                      draggable="true"
                      onDragStart={() => {
                        onDragStart(p);
                      }}
                      key={p.id}
                      className="project"
                    >
                      <ProjectModule key={p.id} pname={p.pname} desc={p.desc} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>

        <div
          className="DOING board"
          onDragOver={onDragOver}
          onDrop={() => {
            onDrop(PROJECT_STATUS.DOING);
          }}
        >
          <div>
            <div className="title">DOING</div>
            {doingList.length
              ? doingList.map((p) => {
                  return (
                    <div
                      draggable="true"
                      onDragStart={() => {
                        onDragStart(p);
                      }}
                      key={p.id}
                      className="project DOING"
                    >
                      <ProjectModule key={p.id} pname={p.pname} desc={p.desc} />

                      {/* {p.pname}
                      {p.desc} */}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div
          className="DONE board"
          onDragOver={onDragOver}
          onDrop={() => {
            onDrop(PROJECT_STATUS.DONE);
          }}
        >
          <div>
            <div className="title">DONE</div>

            {doneList.length
              ? doneList.map((p) => {
                  return (
                    <div
                      draggable="true"
                      onDragStart={() => {
                        onDragStart(p);
                      }}
                      key={p.id}
                      className="project"
                    >
                      <ProjectModule key={p.id} pname={p.pname} desc={p.desc} />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <style jsx>{`
        .title {
          padding: 10px 0 10px 0;
          font-size: 15px;
        }
        .parent {
          padding-top: 5%;
          /* border: 2px solid gray; */
          color: #0050b3;
          display: flex;
          font-family: sans-serif;
          font-weight: bold;
          height: 80%;
          width: 80%;
        }

        .board {
          background-color: #e6f7ff;
          border-radius: 8px;
          flex-basis: 100%;
          flex-grow: 1;
          padding: 10px;
          margin: 5px;
        }
        /* .DOING {
          border-radius: 10px;
          border: 2px solid gray;
          flex-basis: 100%;
          flex-grow: 1;
          padding: 10px;
        }
        .DONE {
          border-radius: 10px;
          border: 2px solid gray;
          flex-basis: 100%;
          flex-grow: 1;
          padding: 10px;
        } */
        .project {
          margin: 8px 0 0 0;
          font-size: 12px;
          color: #434343;
        }
      `}</style>
    </>
  );
};

export default ProjectDetail;
