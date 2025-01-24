"use client";

import { EmailContext } from "@/contexts/email-context";
import { Email } from "@/types/email.type";
import { useContext } from "react";

export const useChangeRead = () => {
  const { setEmailData } = useContext(EmailContext);
  const changeStatus = ({
    emails,
    status,
  }: {
    emails: Email[];
    status: boolean;
  }) => {
    console.log({
      emails,
      status,
    });
    setEmailData!((prev) =>
      prev.map((p) => {
        let temp_status = p.isRead;
        if (emails.findIndex((e) => e.id === p.id) !== -1) {
          temp_status = status;
        }

        return {
          ...p,
          isRead: temp_status,
        };
      })
    );
  };
  return changeStatus;
};
