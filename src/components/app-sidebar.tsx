"use client"

import * as React from "react"
import {
  
  IconDatabase,
  IconFileWord,
  IconInnerShadowTop,

  IconReport,
} from "@tabler/icons-react"

// import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import Link from "next/link"
import { adminRoutes } from "@/routes/adminRoutes"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      name: "dashboard",
      url: "/dashboard",
      icon: IconDatabase,
    },
    {
      name: "admin",
      url: "/adminDashboard",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({user, ...props }: {user:{role:string} & React.ComponentProps<typeof Sidebar>}) {

  let routes = []
  switch (user.role) {
    case "admin":
      routes = adminRoutes
      break;
    case "user":
      routes = adminRoutes
      break;
  
    default:
      routes = []
      break;
  }
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
            >
              <Link href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain routes={routes} />
        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
