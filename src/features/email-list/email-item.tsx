"use client";
import { Email } from "@/types/email.type";

export const EmailItem = ({ email }: { email: Email }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <input
        type="checkbox"
        name=""
        id=""
        onClick={(e) => e.stopPropagation()}
      />
      <p>{email.title}</p>
    </div>
  );
};
