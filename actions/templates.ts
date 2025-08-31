import { TEMPLATES_DUMMY_DATA } from "@/data/dummy";

export function getJournalTemplates() {
  return TEMPLATES_DUMMY_DATA.filter((template) => template.type === "journal");
}

export function getBookTemplates() {
  return TEMPLATES_DUMMY_DATA.filter((template) => template.type === "book");
}

export function getTemplateById(id: string) {
  return TEMPLATES_DUMMY_DATA.find((template) => template.id === id);
}

export function getJournalTemplateById(id: string) {
  return TEMPLATES_DUMMY_DATA.find(
    (template) => template.id === id && template.type === "journal"
  );
}

export function getBookTemplateById(id: string) {
  return TEMPLATES_DUMMY_DATA.find(
    (template) => template.id === id && template.type === "book"
  );
}
