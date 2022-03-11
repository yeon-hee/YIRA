type ModuleProps = {
  pname: string;
  leader: string;
};
const ProjectModule = ({ pname, leader }: ModuleProps) => {
  return (
    <>
      <div className="module">
        <div className="pname">{pname}</div>
        <div className="leader">{leader}</div>
      </div>

      <style jsx>
        {`
          .module {
            padding: 15px;
            border-radius: 5px;
            background-color: white;
            box-shadow: 1px 1px 5px #bfbfbf;
          }
          .pname {
            margin-bottom: 15px;
            font-size: 15px;
          }
        `}
      </style>
    </>
  );
};

export default ProjectModule;
