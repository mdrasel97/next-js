"use client"

import type { Route } from "@/types"
import Link from "next/link"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface NavMainProps {
  routes: Route[]
}

export function NavMain({ routes }: NavMainProps) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      {routes.map((route) => (
        <div key={route.title}>
          <SidebarMenu>
            {route.data.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    {item.icon && <item.icon className="size-4" />}
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      ))}
    </SidebarGroup>
  )
}
