import Image from "next/image";
export default function SkillsCard({
  img,
  name,
  descrip,
}: {
  name: string;
  img: string;
  descrip: string;
}) {
  return (
    <div className="w-fit border p-4 rounded-xl flex gap-4 ">
      <Image src={img} alt="" width={30} height={30} className="" />
      <span className="w-[2px] h-[65px] bg-[#D9D9D9] "></span>
      <div className="">
        <h1 className="font-extrabold ">{name}</h1>
        <p className="md:text-[10px] text-[14px] font-extralight ">{descrip}</p>
      </div>
    </div>
  );
}
