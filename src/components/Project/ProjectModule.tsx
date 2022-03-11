type ModuleProps = {
  pname: string;
  desc: string;
};
const ProjectModule = ({ pname, desc }: ModuleProps) => {
  return (
    <>
      <div className="module">
        <div className="pname">{pname}</div>
        <div className="desc">{desc}</div>
      </div>

      <style jsx>
        {`
          .module {
            padding: 15px;
            border-radius: 5px;
            background-color: white;
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
