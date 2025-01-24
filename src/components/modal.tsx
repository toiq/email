"use client";
import { EmailContext } from "@/contexts/email-context";
import { useContext, useEffect, useState } from "react";

export const Modal = () => {
  const { selectedEmail } = useContext(EmailContext);
  const [isOpen, setIsOpen] = useState(!!selectedEmail);

  useEffect(() => {
    setIsOpen(!!selectedEmail);
  }, [selectedEmail]);
  console.log({ selectedEmail, isOpen });
  return isOpen ? (
    <div
      style={{
        position: "absolute",
        top: "0px",
        right: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        onClick={() => {
          setIsOpen(false);
        }}
        style={{
          width: "30vw",
          height: "100vh",
          opacity: 0.5,
          background: "#4C5764",
        }}
      ></div>
      <div
        style={{
          width: "70vw",
          height: "100vh",
          background: "white",
          border: "1px solid #E5E7EB",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>Cancel</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <div>Mark as Read</div>
            <div>Archive</div>
          </div>
        </div>
        <div
          style={{
            marginTop: "32px",
          }}
        >
          <p
            style={{
              fontWeight: 500,
              fontSize: "20px",
            }}
          >
            {selectedEmail?.title}
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#4B5563",
            }}
          >
            {selectedEmail?.content}
          </p>
        </div>
      </div>
    </div>
  ) : undefined;
};
