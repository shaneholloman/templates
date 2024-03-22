"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { FormEvent, useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import classNames from "classnames";

export default function Chat() {
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
    <div className="flex h-full max-h-[40rem] flex-col overflow-hidden">
      <header className="relative top-5 flex flex-col items-center rounded-t-3xl bg-slate-500 p-4 pb-8 dark:bg-slate-700">
        <div className="mb-2 text-4xl text-white">Chat App</div>
        <div className="text-center text-lg font-light text-slate-200">
          Connected as <strong className="font-bold">{author}</strong>
        </div>
      </header>
      <main className="z-10 flex flex-col overflow-hidden rounded-3xl border-4 border-slate-500 bg-slate-200 p-4 dark:border-slate-700 dark:bg-slate-800">
        <ol
          ref={messageListRef}
          className="flex grow flex-col gap-2 overflow-y-auto scroll-smooth border-b border-slate-500 pb-2"
        >
          {messages?.map((message) => (
            <li
              key={message._id}
              className={classNames("flex flex-col", {
                "items-end self-end": message.author === author,
                "items-start self-start": message.author !== author,
              })}
            >
              <div className="mb-1 text-sm font-bold">{message.author}</div>
              <p
                className={classNames(
                  "rounded-xl bg-white p-2 dark:bg-slate-900",
                  {
                    "rounded-tr-none": message.author === author,
                    "rounded-tl-none": message.author !== author,
                  },
                )}
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
            className="grow rounded-l-lg border border-slate-300 bg-white p-2 outline-none focus:border-slate-600 dark:border-slate-700 dark:bg-slate-950"
          />
          <button
            type="submit"
            disabled={newMessageText === ""}
            className={classNames(
              "rounded-r-lg px-6 py-2 text-white outline-none",
              {
                "bg-slate-400 dark:bg-slate-700": newMessageText === "",
                "bg-slate-800 hover:bg-slate-950 focus:bg-slate-950 dark:bg-slate-700":
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
