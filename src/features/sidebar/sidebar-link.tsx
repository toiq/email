"use client";
import { EmailContext } from "@/contexts/email-context";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useContext } from "react";

interface SidebarLinkProps {
  iconSrc: string;
  title: string;
  url: string;
  width: number;
  height: number;
}

export const SidebarLink = ({
  iconSrc,
  title,
  url,
  width,
  height,
}: SidebarLinkProps) => {
  const { emailData } = useContext(EmailContext);
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
          width: "100%",
        }}
      >
        <p>{title}</p>
        {emailData && url !== "/#logout" && (
          <p>
            {
              emailData.filter(
                (email) =>
                  email.folder.toLowerCase() === url.slice(1).toLowerCase()
              ).length
            }
          </p>
        )}
      </div>
    </Link>
  );
};
