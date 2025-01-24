"use client";

import { EmailContext } from "@/contexts/email-context";
import { useContext, useEffect, useState } from "react";
import { EmailItem } from "./email-item";
import { Email, EmailFolder } from "@/types/email.type";
import { useChangeFolder } from "@/hooks/use-change-folder";
import { useChangeRead } from "@/hooks/use-change-read";
import Image from "next/image";

export const EmailList = ({ folder }: { folder: EmailFolder }) => {
  const { emailData, setSelectedEmail } = useContext(EmailContext);
  const [checked, setChecked] = useState(false);
  const [currentSelected, setCurrentSelected] = useState<Email[]>([]);
  const changeDestination = useChangeFolder();
  const changeStatus = useChangeRead();

  useEffect(() => {
    if (checked) {
      setCurrentSelected(emailData!.filter((email) => email.folder === folder));
    } else {
      setCurrentSelected([]);
    }
  }, [setCurrentSelected, emailData, folder, checked]);

  return (
    <div
      style={{
        width: "calc(100vw - 260px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px 24px 20px 24px",
        }}
      >
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
            checked={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
          />
          <p
            style={{
              fontWeight: 500,
            }}
          >
            Email Selected ({currentSelected?.length})
          </p>
        </div>

        {currentSelected?.length !== 0 && (
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
                  emails: currentSelected,
                  status: !currentSelected[0]!.isRead,
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
              <p>
                Mark as {currentSelected[0]?.isRead ? "unread(m)" : "read(r)"}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
              onClick={() =>
                changeDestination({
                  emails: currentSelected,
                  destination:
                    currentSelected[0]!.folder === "archive"
                      ? "inbox"
                      : "archive",
                })
              }
            >
              <Image src="/trash.svg" width={17} height={19} alt="Trash Icon" />
              <p>
                {currentSelected[0]!.folder === "archive"
                  ? "Unarchive (u)"
                  : "Archive (a)"}
              </p>
            </div>
          </div>
        )}
      </div>
      <ul
        style={{
          borderTop: "1px solid #E5E7EB",
          width: "100%",
        }}
      >
        {emailData
          ?.filter((email) => email.folder === folder)
          .map((email) => (
            <li
              onClick={() =>
                setSelectedEmail!(JSON.parse(JSON.stringify(email)))
              }
              style={{
                listStyleType: "none",
                padding: "20px 24px 20px 24px",
                borderBottom: "1px solid #E5E7EB",
                width: "100%",
                background: "white",
                opacity: email.isRead ? 0.5 : 1,
              }}
              key={email.id}
            >
              <EmailItem
                email={email}
                currentSelected={currentSelected}
                setCurrentSelected={setCurrentSelected}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
