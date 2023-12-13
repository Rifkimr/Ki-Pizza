import Image from "next/image";
import MenuItem from "./MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 justify-start bg-blue-500">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={"/sallad1.png"} alt="salad" width={109} height={189} />
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt="salad" />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
