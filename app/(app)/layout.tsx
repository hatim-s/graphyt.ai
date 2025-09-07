import { createSupabaseClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import "../globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidenav";
import { Stack } from "@/components/ui/stack";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Box } from "@/components/ui/box";
import { NewNote } from "@/views/new-note";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Layout({ children }: PropsWithChildren) {
  const supabase = await createSupabaseClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 justify-between pe-2">
          <Stack className="items-center gap-2 px-6" direction="row">
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
          </Stack>
          <Box>
            <NewNote />
            <ThemeSwitcher />
          </Box>
        </header>

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
