"use client";
import { Email } from "@/types/email.type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const EmailItem = ({
  email,
  currentSelected,
  setCurrentSelected,
}: {
  email: Email;
  currentSelected: Email[];
  setCurrentSelected: Dispatch<SetStateAction<Email[]>>;
}) => {
  const [checked, setChecked] = useState(
    !!currentSelected.find((c) => c.id === email.id) || false
  );

  useEffect(() => {
    setChecked(!!currentSelected.find((c) => c.id === email.id));
  }, [setCurrentSelected, checked, currentSelected, email]);
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
        name="Email Item"
        id={`email-${email.id}`}
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          e.stopPropagation();
          setChecked((prev) => !prev);
        }}
      />
      <p>{email.title}</p>
    </div>
  );
};
