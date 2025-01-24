import { EmailList } from "@/features/email-list/email-list";

const IndexPage = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
      }}
    >
      <EmailList />
    </div>
  );
};

export default IndexPage;
