"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { FormEvent, useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import classNames from "classnames";
import clsx from "clsx";

export default function ChatPage() {
  const [author, setAuthor] = useState<string>();
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
    setAuthor(faker.person.firstName());
  }, []);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex h-full max-h-[40rem] flex-col overflow-hidden rounded-sm border-2 border-slate-500 bg-slate-200 dark:border-slate-800 dark:bg-slate-900">
      <header className="flex flex-col items-center bg-slate-500 p-4 dark:bg-slate-800">
        <div className="text-4xl font-semibold text-white">Chat App</div>
      </header>
      <main className="flex flex-col overflow-hidden p-4">
        <ol
          ref={messageListRef}
          className="flex grow flex-col gap-2 overflow-y-auto scroll-smooth border-b border-slate-500 pb-2"
        >
          {messages?.map((message) => (
            <li
              key={message._id}
              className={clsx("flex flex-col", {
                "items-end self-end": message.author === author,
                "items-start self-start": message.author !== author,
              })}
            >
              <div className="mb-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                {message.author}
              </div>
              <p
                className={clsx("rounded-xl bg-white p-2 dark:bg-slate-950", {
                  "rounded-tr-none": message.author === author,
                  "rounded-tl-none": message.author !== author,
                })}
              >
                {message.body}
              </p>
            </li>
          ))}
        </ol>
        <form onSubmit={handleSubmit} className="mt-4 flex">
          <input
            value={newMessageText}
            onChange={(event) => setNewMessageText(event.target.value)}
            placeholder="Write a message…"
            className="grow rounded-l border-2 border-r-0 border-slate-300 p-2 outline-none transition-colors dark:border-slate-800 dark:bg-slate-950"
          />
          <button
            type="submit"
            disabled={newMessageText === ""}
            className={clsx(
              "rounded-r px-6 py-2 font-semibold outline-none transition-colors",
              {
                "bg-slate-300 text-slate-400 dark:bg-slate-800 dark:text-slate-600":
                  newMessageText === "",
                "bg-slate-400 text-slate-700 hover:bg-slate-500 hover:text-black dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 dark:hover:text-white":
                  newMessageText !== "",
              },
            )}
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
