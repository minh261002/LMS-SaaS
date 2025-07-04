"use client"

import { type Icon } from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon } from "lucide-react"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <Link href="/admin" className="w-full">
              <SidebarMenuButton
                tooltip="Dashboard"
                isActive={pathname === "/admin"}
                className={cn(
                  "cursor-pointer min-w-8 duration-200 ease-linear",
                  pathname === "/admin" && "!bg-blue-500 !text-white hover:!bg-blue-500/90 hover:!text-white"
                )}
              >
                <LayoutDashboardIcon />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={pathname === item.url}
                className={cn(
                  "cursor-pointer",
                  pathname === item.url && "!bg-blue-500 !text-white hover:!bg-blue-500/90 hover:!text-white"
                )}
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
