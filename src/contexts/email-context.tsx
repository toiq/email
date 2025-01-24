"use client";
import { db } from "@/data/db";
import { Email } from "@/types/email.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface EmailContext {
  emailData?: Email[];
  setEmailData?: Dispatch<SetStateAction<Email[]>>;
  selectedEmail?: Email | null;
  setSelectedEmail?: Dispatch<SetStateAction<Email | null | undefined>>;
}

export const EmailContext = createContext<EmailContext>({});

export const EmailContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [emailData, setEmailData] = useState(db);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>();
  return (
    <EmailContext.Provider
      value={{ emailData, setEmailData, selectedEmail, setSelectedEmail }}
    >
      {children}
    </EmailContext.Provider>
  );
};
