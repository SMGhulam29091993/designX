import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex-1 flex items-center text-2xl cursor-pointer">
        <span className="inline-block font-extrabold text-primary">Design</span>
        <span className="font-semibold text-foreground">X.ai</span>
      </Link>
    </>
  );
};

export default Logo;
