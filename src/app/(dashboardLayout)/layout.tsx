import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

// import data from "./data.json"

export default function DashboardLayout(
  {
    // children,
    admin,
    user

  }: 
  {
    // children: React.ReactNode,
    admin: React.ReactNode,
    user: React.ReactNode
    
  }
) {

  const userInfo = {
    role : "admin"
  }
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar user={userInfo} />
      <SidebarInset>
        <SiteHeader />
        
        {/* {children} */}
        {userInfo.role === "admin" ? admin : user}
      </SidebarInset>
    </SidebarProvider>
  )
}
