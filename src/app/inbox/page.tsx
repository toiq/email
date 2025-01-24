"use client";
import { EmailContext } from "@/contexts/email-context";
import { useContext } from "react";

const IndexPage = () => {
  const { emailData } = useContext(EmailContext);

  console.log({ emailData });

  return <div>IndexPage</div>;
};

export default IndexPage;
