export type Template = {
  id: string;
  title: string;
  description: string;
  content: string;
  type: "journal" | "book";
};

export type TemplateBE = Template & {
  ownerUserId: string;
};
