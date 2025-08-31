"use client";

// todo: actually fetch the templates from the database

import { useMemo } from "react";
import { TEMPLATES_DUMMY_DATA } from "./dummy";

export function useGetBookTemplates() {
  return useMemo(
    () => TEMPLATES_DUMMY_DATA.filter((template) => template.type === "book"),
    []
  );
}

export function useGetJournalTemplates() {
  return useMemo(
    () =>
      TEMPLATES_DUMMY_DATA.filter((template) => template.type === "journal"),
    []
  );
}

export function useGetBookTemplateById(id: string) {
  return useMemo(
    () =>
      TEMPLATES_DUMMY_DATA.find(
        (template) => template.id === id && template.type === "book"
      ),
    [id]
  );
}

export function useGetJournalTemplateById(id: string) {
  return useMemo(
    () =>
      TEMPLATES_DUMMY_DATA.find(
        (template) => template.id === id && template.type === "journal"
      ),
    [id]
  );
}
