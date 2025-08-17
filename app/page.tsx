import { ThemeSwitcher } from "@/components/theme-switcher";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { NodeEditor } from "@/views/note-editor";

export default function Home() {
  return (
    <SidebarInset>
      <header className="flex h-10 shrink-0 items-center gap-2 justify-between pe-2">
        <div className="flex items-center gap-2 px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ThemeSwitcher />
      </header>
      <main className="font-sans flex-1 min-h-0">
        <NodeEditor />
      </main>
    </SidebarInset>
    // <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //   <a
    //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <Image
    //       aria-hidden
    //       src="/file.svg"
    //       alt="File icon"
    //       width={16}
    //       height={16}
    //     />
    //     Learn
    //   </a>
    //   <a
    //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <Image
    //       aria-hidden
    //       src="/window.svg"
    //       alt="Window icon"
    //       width={16}
    //       height={16}
    //     />
    //     Examples
    //   </a>
    //   <a
    //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //     href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <Image
    //       aria-hidden
    //       src="/globe.svg"
    //       alt="Globe icon"
    //       width={16}
    //       height={16}
    //     />
    //     Go to nextjs.org →
    //   </a>
    // </footer>
  );
}
