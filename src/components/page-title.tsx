"use client";

import { usePathname } from "next/navigation";

type pathnames = "/inbox" | "/archive";

export const mapLinkToTitle = {
  "/inbox": "Inbox",
  "/archive": "Archive",
};

export const PageTitle = () => {
  const pathname = usePathname();
  return (
    <p
      style={{
        paddingTop: "24px",
        paddingBottom: "24px",
        paddingLeft: "24px",
        fontWeight: 500,
        fontSize: "32px",
      }}
    >
      {mapLinkToTitle[pathname as pathnames]}
    </p>
  );
};
