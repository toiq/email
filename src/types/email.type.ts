export type EmailFolder = "inbox" | "archive";

export interface Email {
  id: string;
  title: string;
  content: string;
  isRead: boolean;
  folder: EmailFolder;
}
