"use client";

import { Starter } from "@/components/Starter/Starter";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const numbers = useQuery(api.myFunctions.listNumbers, { count: 10 });
  const addNumber = useMutation(api.myFunctions.addNumber);

  return (
    // Done with the instructions? Remove this wrapper component to focus on
    // building your app.
    <Starter title="Next.js Template">
      <>
        <p>
          Click the button and open this page in another window - this data is
          persisted in the Convex cloud database!
        </p>
        <p>
          <Button
            variant="secondary"
            onClick={() => {
              void addNumber({ value: Math.floor(Math.random() * 10) });
            }}
          >
            Add a random number
          </Button>
        </p>
        <p>
          Numbers:{" "}
          {numbers?.length === 0
            ? "Click the button!"
            : numbers?.join(", ") ?? "..."}
        </p>
      </>
    </Starter>
  );
}
