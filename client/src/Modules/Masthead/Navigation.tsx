"use client"

import * as React from "react"
// import Link from "next/link"

import { cn } from "@/lib/utils"
import { Crown, BotMessageSquare, UserCircle } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { loginModal } from "@/modals"
import { navItems } from "./navItems"


export function NavigationItems() {

    const [userData,setUserData] = React.useState<any>({name: ""})

    React.useEffect(() => {
        let user :loginModal = JSON.parse(localStorage.getItem('userData') || '')
        setUserData(user)
    },[])
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  {/* <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  > */}
                  <>
                  <UserCircle className="size-[2rem]" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Hi {userData?.name}!
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground flex gap-5">
                      <Crown /> <h1>Rank 9069</h1>
                    </p>
                    <p className="text-sm leading-tight text-muted-foreground flex gap-5">
                    <BotMessageSquare /> <h1>Attempted 130</h1>
                    </p>
                  {/* </a> */}
                  </>
                </NavigationMenuLink>
              </li>
              {navItems.map((nav) => {
                return <ListItem href="/account" title={`${nav.title}`}>
                {nav.description}
                </ListItem>
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
