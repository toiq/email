"use client";
import { EmailContext } from "@/contexts/email-context";
import { Email } from "@/types/email.type";
import { useContext } from "react";

export const EmailItem = ({ email }: { email: Email }) => {
  const { setSelectedEmail } = useContext(EmailContext);
  return (
    <div
      onClick={() => setSelectedEmail!(JSON.parse(JSON.stringify(email)))}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <input type="checkbox" name="" id="" />
      <p>{email.title}</p>
    </div>
  );
};
