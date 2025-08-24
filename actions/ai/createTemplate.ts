"use server";

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SAMPLE_TEMPLATE = `
# 📅 {{DATE}} — {{TITLE}}

**Tags:** #journal #daily | [[{{LINKED_NOTE}}]]

## 🙏 Gratitude (3 items)
- 
- 
- 

## 🎯 Goals
### Today
- 
- 
### This Week
- 
- 

## 🗒️ Daily Log
*(free‑form notes, observations, events)*  

  

## 🌟 Highlights
- **Bold** the moment that mattered most  
- *Italic* a surprising insight  

## 🤔 Reflections
- What worked well?
- What could be improved?
- Any lingering thoughts or emotions?

## 🔗 Connections
- Link to related Zettel: [[Zettel‑ID]]
- Reference past entry: [[YYYY‑MM‑DD]]

## 📝 Summary (Progressive Summarization)
- **Key takeaway:**  
- *Supporting detail:*  

---  

*Fill in each section after your day ends. Use markdown links to interconnect entries and build a searchable knowledge base.*`;

const SYSTEM_PROMPT = `You are an expert template creator for markdown. You are tasked to create a template for a markdown file based on the user's prompt. The user will be using this template to write down their everyday journal. You need to create an optimized template that is easy to follow and stick to. 

You should use well researched frameworks for journal writing, and use them to create templates. You should take reference from Zettelkasten, or Progressive Summarization, where the user can link their journal entries to each other.

The template should ONLY contain the template, and nothing else. It should be a markdown template, that the user will always import and the start filling in to create a journal entry. Do not include any other text or comments.

Keep a clean and simple template, do NOT include unnecessary text or comments. The template should look minimalistic and easy to follow. Should return just a markdown text, without the leading \`\`\`markdown and \`\`\` at the end.

The template should be roughly 200 words, and should be designed to write about 1000 words of journal entries. Provide only minimal instructions and structure and allow the user to fill in the rest. Do not use \`---\` to separate sections, headers should be enough.

FOLLOW ALL INSTRUCTIONS AND DO NOT ADD ANYTHING ELSE.`;

export async function createTemplate(userPrompt: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "openai/gpt-oss-120b",
    stream: true,
  });
}
