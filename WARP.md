# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Linting
pnpm lint
```

### Package Management
- This project uses **pnpm** as the package manager
- Lock file: `pnpm-lock.yaml`
- Supports Node.js >=18

## Architecture Overview

### Application Type
- **Next.js 15.4.6** application with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4.0** for styling with shadcn/ui components
- **React 19.1.0** with modern hooks

### Core Functionality
This is a **markdown-based note-taking and journaling application** with AI-powered template generation:

1. **Dual-pane markdown editor** with live preview
2. **Template-driven note creation** for books and journal entries  
3. **AI-powered template generation** using Groq SDK
4. **Resizable split-view** interface for editing and preview

### Key Directories Structure

```
├── app/                    # Next.js App Router pages
│   ├── book/[bookSlug]/   # Dynamic book note pages
│   ├── journal/[journalSlug]/ # Dynamic journal pages
│   └── layout.tsx         # Root layout with sidebar
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui component library
│   ├── sidenav/          # Navigation components
│   ├── code-editor.tsx   # CodeMirror integration
│   └── markdown-preview.tsx # Markdown rendering
├── views/                # Page-level components
│   ├── note-editor.tsx   # Main editor with split view
│   └── new-note/         # Multi-step note creation flow
├── contexts/             # React contexts
│   ├── NodeEditorContext.tsx # Editor state management
│   └── ThemeProvider.tsx # Theme switching
├── actions/              # Server actions
│   └── ai/createTemplate.ts # AI template generation
├── data/                 # Data layer
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── lib/                 # Utilities (cn function, etc.)
```

### UI Component System
- **shadcn/ui** with Radix UI primitives and class-variance-authority
- **Tailwind CSS** with custom design tokens
- **Lucide React** for icons
- **Sonner** for toast notifications
- **New York** style variant from shadcn

### State Management Patterns
- **React Context** for global state (editor, theme)
- **useState/useEffect** for local component state
- **Server Actions** for AI operations and data mutations
- **Custom hooks** for data fetching and reusable logic

### AI Integration
- **Groq SDK** with `openai/gpt-oss-120b` model
- Streaming responses for real-time template generation
- Server-side AI actions for security
- Template system supporting journal and book note types

### Key Features Architecture
1. **Split Editor**: Resizable panels with CodeMirror editor + markdown preview
2. **Template System**: Predefined templates with AI generation capability  
3. **Multi-step Flows**: Carousel-based forms for note creation
4. **Dynamic Routing**: Book and journal pages with slug-based routing
5. **Theme System**: Dark/light mode with next-themes integration

## Development Guidelines

### Component Patterns
- Functional components with TypeScript
- Custom hooks for logic separation
- Context providers for shared state
- Server components where possible, client components when needed

### File Organization
- Group related components in directories with index.ts exports
- Separate UI components from business logic components  
- Use TypeScript interfaces in dedicated `types/` files
- Server actions in `actions/` directory

### Styling Approach
- Tailwind utility classes with `cn()` utility for conditional styles
- Component variants using class-variance-authority
- Responsive design with mobile-first approach
- Dark/light theme support throughout

### AI Integration Best Practices
- Server actions for AI operations to protect API keys
- Streaming responses for better UX during generation
- Error handling for AI service failures
- User-customizable prompts and templates

### Data Flow
1. User interactions → Client components
2. Form submissions → Server actions  
3. AI requests → Groq API (server-side)
4. State updates → React contexts
5. UI updates → Re-renders with new state

## Project-Specific Notes

- Uses **Turbopack** for faster development builds
- **Progressive summarization** and **Zettelkasten** methodologies for note organization
- Template content supports markdown with linking syntax `[[note-id]]`
- CodeMirror editor with markdown language support and dark theme
- **IBM Plex Mono** and **Geist** fonts for optimal code/text display

## Environment Setup
- Requires `GROQ_API_KEY` environment variable for AI features
- Next.js handles environment variable loading automatically
- Development server runs on `http://localhost:3000`
