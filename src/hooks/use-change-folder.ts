"use client";

import { EmailContext } from "@/contexts/email-context";
import { Email, EmailFolder } from "@/types/email.type";
import { useContext } from "react";

export const useChangeFolder = () => {
  const { setEmailData } = useContext(EmailContext);
  const changeDestination = ({
    emails,
    destination,
  }: {
    emails: Email[];
    destination: EmailFolder;
  }) => {
    setEmailData!((prev) =>
      prev.map((p) => {
        let dest = p.folder;
        if (emails.findIndex((e) => e.id === p.id) !== -1) {
          dest = destination;
        }

        return {
          ...p,
          folder: dest,
        };
      })
    );
  };
  return changeDestination;
};
