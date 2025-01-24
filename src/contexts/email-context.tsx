"use client";
import { db } from "@/data/db";
import { Email } from "@/types/email.type";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface EmailContext {
  emailData?: Email[];
  setEmailData?: Dispatch<SetStateAction<Email[]>>;
}

export const EmailContext = createContext<EmailContext>({});

export const EmailContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [emailData, setEmailData] = useState(db);
  return (
    <EmailContext.Provider value={{ emailData, setEmailData }}>
      {children}
    </EmailContext.Provider>
  );
};
