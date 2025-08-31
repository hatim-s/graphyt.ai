import { getJournalTemplateById } from "@/actions/templates";
import { NoteEditor } from "@/views/note-editor";

type Props = {
  searchParams: Promise<{
    templateId?: string;
  }>;
};

export default async function NewJournalPage(props: Props) {
  const { templateId } = await props.searchParams;

  let templateData = "";
  if (templateId) {
    const template = await getJournalTemplateById(templateId);
    if (template) {
      templateData = template.content;
    }
  }

  return (
    <main className="font-sans flex-1 min-h-0 p-4">
      <NoteEditor initialMarkdown={templateData} />
    </main>
  );
}
