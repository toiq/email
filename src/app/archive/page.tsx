import { EmailList } from "@/features/email-list/email-list";

const ArchivePage = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
      }}
    >
      <EmailList folder="archive" />
    </div>
  );
};

export default ArchivePage;
