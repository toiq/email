"use client";

import { EmailContext } from "@/contexts/email-context";
import { useContext } from "react";
import { EmailItem } from "./email-item";

export const EmailList = () => {
  const { emailData } = useContext(EmailContext);
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
        {emailData?.map((email) => (
          <li
            style={{
              listStyleType: "none",
              padding: "20px 24px 20px 24px",
              borderBottom: "1px solid #E5E7EB",
              width: "100%",
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
