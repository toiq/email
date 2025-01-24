import { Logo } from "@/components/logo";
import { SidebarLink } from "./sidebar-link";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div
      style={{
        minWidth: "260px",
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px 10px 20px 10px",
      }}
    >
      <div>
        <Link
          href="/inbox"
          style={{
            paddingLeft: "14px",
          }}
        >
          <Logo />
        </Link>

        <div
          style={{
            paddingTop: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <SidebarLink
            iconSrc="/inbox.svg"
            width={22}
            height={18}
            title="Inbox"
            url="/inbox"
          />

          <SidebarLink
            iconSrc="/archive.svg"
            width={22}
            height={20}
            title="Archive"
            url="/archive"
          />
        </div>
      </div>
      <div
        style={{
          marginLeft: "-10px",
        }}
      >
        <SidebarLink
          iconSrc="/logout.svg"
          width={24}
          height={24}
          title="Logout"
          url="/#logout"
        />
      </div>
    </div>
  );
};
