export default function ProjectsCard({
  tool1,
  tool2,
  tool3,
  name,
  descrp1,
  descrp2,
  img,
  seeprojectlink,
}: {
  tool1: string;
  tool2: string;
  tool3?: string;
  name: string;
  descrp1: string;
  descrp2: string;
  img?: string;
  seeprojectlink?: string;
}) {
  return (
    <div className="flex flex-col w-fit h-full gap-8 justify-between ">
      <span
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[300px] h-[300px]  bg-slate-400 flex flex-col justify-end"
      >
        <div className="flex p-3 gap-1 items-end justify-end w-full ">
          <span className="w-fit h-fit flex items-center justify-center bg-white rounded-3xl px-4 py-1">
            {tool1}
          </span>
          <span className="w-fit h-fit flex items-center justify-center bg-white rounded-3xl px-4 py-1">
            {tool2}
          </span>
          <span className="w-fit h-fit flex items-center justify-center bg-white rounded-3xl px-4 py-1">
            {tool3}
          </span>
        </div>
      </span>

      <div className="w-[293px] h-full flex flex-col gap-4 ">
        <div className="flex items-baseline gap-3 ">
          <h1 className="text-2xl font-extrabold">{name}</h1>
        </div>

        <div className="flex flex-col md:gap-4">
          <p className="text-[14px] text-[#808080] font-thin ">{descrp1}</p>
          <p className="text-[14px] text-[#808080] font-thin ">{descrp2}</p>
        </div>

        <div className="w-full flex justify-between items-center ">
          <a href={`${seeprojectlink}`} target="_blank">
            <div className="flex flex-col items-start cursor-pointer">
              <p className="text-base font-semibold">see project</p>
              <span className="w-[28px] h-0  bg-black border-[1.5px] border-solid border-black "></span>
            </div>
          </a>

          <a href="" target="_blank">
            <button className="btn w-fit  rounded-none text-black border border-black  bg-white hover:border-none ease-in hover:bg-slate-500 hover:text-white ">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
