import { Separator } from "../ui/separator";

function CustomSeperator() {
  return (
    <>
      <Separator />
      <div className=" h-12 w-full text-primary/5 bg-[size:10px_10px] bg-background [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <Separator />
    </>
  );
}

export default CustomSeperator;
