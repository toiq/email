"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  iconSrc: string;
  title: string;
  amount?: string;
  url: string;
  width: number;
  height: number;
}

export const SidebarLink = ({
  iconSrc,
  title,
  amount,
  url,
  width,
  height,
}: SidebarLinkProps) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 24px 12px 24px",
        background: path === url ? "#D6E2FB" : "",
        borderRadius: "54px",
      }}
    >
      <Image src={iconSrc} width={width} height={height} alt="Logout Icon" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{title}</p>
        {amount && <p>{amount}</p>}
      </div>
    </Link>
  );
};
