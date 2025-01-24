export interface Email {
  id: string;
  title: string;
  content: string;
  isRead: boolean;
  folder: "inbox" | "archive";
}
