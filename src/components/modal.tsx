"use client";
import { EmailContext } from "@/contexts/email-context";
import { useChangeFolder } from "@/hooks/use-change-folder";
import { useChangeRead } from "@/hooks/use-change-read";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export const Modal = () => {
  const { selectedEmail, setSelectedEmail } = useContext(EmailContext);
  const [isOpen, setIsOpen] = useState(!!selectedEmail);
  const changeDestination = useChangeFolder();
  const changeStatus = useChangeRead();

  const closeModal = () => {
    setIsOpen(false);
    setSelectedEmail!(null);
  };

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
        onClick={closeModal}
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
            color: "#4B5563",
            fontWeight: 500,
          }}
        >
          <div
            onClick={closeModal}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Image src="/close.svg" width={11} height={11} alt="Cancel Icon" />
            <p>Close (Esc)</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <div
              onClick={() =>
                changeStatus({
                  emails: [selectedEmail!],
                  status: !selectedEmail!.isRead,
                })
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Image
                src="/message.svg"
                width={19}
                height={18}
                alt="Message Icon"
              />
              <p>Mark as read(r)</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
              onClick={() =>
                changeDestination({
                  emails: [selectedEmail!],
                  destination:
                    selectedEmail!.folder === "archive" ? "inbox" : "archive",
                })
              }
            >
              <Image src="/trash.svg" width={17} height={19} alt="Trash Icon" />
              <p>
                {selectedEmail!.folder === "archive"
                  ? "Unarchive (u)"
                  : "Archive (a)"}
              </p>
            </div>
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
