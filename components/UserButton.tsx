"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";

function UserButton({ session }: { session: Session | null }) {
  // Subsription listener 
  if (!session)
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign in
      </Button>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          name={session.user?.name as string}
          image={session.user?.image as string}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name as string}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
