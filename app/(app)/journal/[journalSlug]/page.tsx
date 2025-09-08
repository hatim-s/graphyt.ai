import { getJournalTemplateById } from "@/actions/templates";

type Props = {
  params: Promise<{
    journalSlug: string;
  }>;
  searchParams: Promise<{
    templateId?: string;
  }>;
};

export default async function JournalPage(props: Props) {
  const { journalSlug } = await props.params;
  const { templateId } = await props.searchParams;

  let templateData = "";
  if (templateId) {
    const template = await getJournalTemplateById(templateId);
    if (template) {
      templateData = template.content;
    }
  }

  return <pre>JournalPage: {JSON.stringify(templateData, null, 2)}</pre>;
}
