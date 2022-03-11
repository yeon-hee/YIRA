import { useRootState } from '@src/hooks/useRootState';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

const ProjectDetail = () => {
  //   const { project } = useRootState((state) => state.project);
  //   const router = useRouter();
  //   const { id } = router.query;
  //   const projectState = project.filter((p) => p.id.toString() == id);
  return (
    // <>
    //       플젝 상세 페이지
    //       {projectState.map((p) => (
    //         <div key={p.id}>
    //           <div>{p.pname}</div>
    //           <div>{p.desc}</div>
    //           <div>
    //             {p.startDate} ~ {p.endDate}
    //           </div>
    //           <div>{p.leader}</div>
    //           <div>{p.teammates}</div>
    //           <div>{p.status}</div>
    //         </div>
    //       ))}
    // </>
    null
  );
};

export default ProjectDetail;
