"use client";

import { EmailContext } from "@/contexts/email-context";
import { useContext } from "react";
import { EmailItem } from "./email-item";
import { EmailFolder } from "@/types/email.type";

export const EmailList = ({ folder }: { folder: EmailFolder }) => {
  const { emailData, setSelectedEmail } = useContext(EmailContext);
  return (
    <div
      style={{
        width: "100%",
        flexGrow: 1,
      }}
    >
      <ul
        style={{
          borderTop: "1px solid #E5E7EB",
          width: "100%",
        }}
      >
        {emailData
          ?.filter((email) => email.folder === folder)
          .map((email) => (
            <li
              onClick={() =>
                setSelectedEmail!(JSON.parse(JSON.stringify(email)))
              }
              style={{
                listStyleType: "none",
                padding: "20px 24px 20px 24px",
                borderBottom: "1px solid #E5E7EB",
                width: "100%",
                background: "white",
                opacity: email.isRead ? 0.5 : 1,
              }}
              key={email.id}
            >
              <EmailItem email={email} />
            </li>
          ))}
      </ul>
    </div>
  );
};
