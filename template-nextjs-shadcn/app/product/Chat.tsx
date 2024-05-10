"use client";

import { UserMenu } from "@/app/product/UserMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "convex/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";

export function Chat({ author }: { author: string }) {
  const [newMessageText, setNewMessageText] = useState("");
  const messageListRef = useRef<HTMLOListElement>(null);
  const messages = useQuery(api.messages.list);
  const sendMessage = useMutation(api.messages.send);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!author) return;

    sendMessage({ body: newMessageText, author })
      .then(() => {
        setNewMessageText("");
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
      });
  };

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <main className="flex h-[40rem] max-h-screen grow flex-col overflow-hidden">
      <header className="flex items-start justify-between border-b p-4">
        <div className="flex flex-col gap-2">
          <h1 className=" text-lg font-semibold md:text-2xl">Chat</h1>
          <p className="text-sm text-muted-foreground">
            Open this app in multiple browser windows to see the real-time
            database in action
          </p>
        </div>
        <UserMenu>{author}</UserMenu>
      </header>
      <ol
        ref={messageListRef}
        className="flex h-[40rem] flex-col gap-4 overflow-y-auto scroll-smooth px-8 py-4"
      >
        {messages?.map((message) => (
          <li
            key={message._id}
            className={cn("flex flex-col text-sm", {
              "items-end self-end": message.author === author,
              "items-start self-start": message.author !== author,
            })}
          >
            <div className="mb-1 text-sm font-medium">{message.author}</div>
            <p
              className={cn("rounded-xl bg-muted px-3 py-2", {
                "rounded-tr-none": message.author === author,
                "rounded-tl-none": message.author !== author,
              })}
            >
              {message.body}
            </p>
          </li>
        ))}
      </ol>
      <form onSubmit={handleSubmit} className="flex gap-2 border-t p-4">
        <Input
          value={newMessageText}
          onChange={(event) => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <Button type="submit" disabled={newMessageText === ""}>
          Send
        </Button>
      </form>
    </main>
  );
}
