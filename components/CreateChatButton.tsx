"use client";

import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const router = useRouter();

  const createNewChat = async () => {
    // const res = await fetch('/api/chat', {
    //     method: 'POST'
    // })
    // const { id } = await res.json()
    router.push(`/chat/${"id"}`);
  };
  return (
    <Button variant={"ghost"}>
      <MessageSquarePlusIcon className="" />
    </Button>
  );
}

export default CreateChatButton;
