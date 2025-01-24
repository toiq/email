import Image from "next/image";

export const Logo = () => {
  return (
    <Image src="/logo.svg" alt="Email Client Logo" width={40} height={20} />
  );
};
