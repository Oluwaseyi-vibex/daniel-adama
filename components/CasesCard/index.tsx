import Image from "next/image";

export default function CaseCard({ img, name }: { img: string; name: string }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-[381px] h-[260px] bg-[#F6F6F6] ">
        <Image src={img} alt="" className="h-full" width={381} height={200} />
      </div>
      <p className="text-lg font-extrabold">{name}</p>
    </div>
  );
}
