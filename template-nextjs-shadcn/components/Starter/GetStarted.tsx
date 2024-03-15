import Link from "next/link";
import { Code } from "../typography/code";
import { Resource } from "./Resource";

export const GetStarted = () => {
  return (
    <div className="flex grow flex-col">
      <div className="container mb-20 flex grow flex-col justify-center">
        <h1 className="my-28 text-center text-7xl font-medium leading-none tracking-tight">
          Congrats, you now have an app running on{" "}
          <span className="font-bold text-[#8d2676]">Convex</span>!
        </h1>
        <h2 className="mb-4 text-3xl font-bold text-slate-800 dark:text-slate-300">
          Next steps
        </h2>
        <p>
          Go to this app&rsquo;s <Link href="/dashboard">dashboard</Link> to
          view a working demo app. You can open multiple browser windows to see
          the real-time database in action, and the{" "}
          <Link href="https://dashboard.convex.dev/">Convex dashboard</Link>{" "}
          window should already be open for inspecting functions, data, logs,
          and more.
        </p>
        <p>
          Edit <Code>convex/myFunctions.ts</Code> to change the backend
          functionality.
        </p>
        <p>
          Edit <Code>app/page.tsx</Code> to change your frontend.
        </p>
        <p>
          You can also remove this <Code>&lt;GetStarted /&gt;</Code> component
          when you&rsquo;re ready to focus on building your app.
        </p>
        <h2 className="mb-4 mt-8 text-3xl font-bold text-slate-800 dark:text-slate-300">
          About this template
        </h2>
        <p>
          This template was created with <Code>npm create convex@latest</Code>.
          It consists of a <Link href="https://nextjs.org/">Next.js</Link> app
          built with <Link href="https://react.dev/">React</Link> and{" "}
          <Link href="https://www.typescriptlang.org/">TypeScript</Link>, styled
          with TailwindCSS, and using{" "}
          <Link href="https://ui.shadcn.com/">shadcn</Link> components. This
          provides you with a starting point for building your web application.
        </p>
      </div>
      <div className="border-t border-slate-400 bg-slate-300 py-20 dark:border-slate-700 dark:bg-slate-800">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold">Helpful resources</h2>
          <div className="grid grid-cols-4 gap-6">
            <Resource
              title="Convex Docs"
              description="Dive deeper into the Convex platform with our comprehensive developer documentation"
              href="https://docs.convex.dev/home"
            />
            <Resource
              title="Stack articles"
              description="Learn about best practices, use cases, and more from a growing collection of articles, videos, and walkthroughs"
              href="https://stack.convex.dev/"
            />
            <Resource
              title="Discord"
              description="Join our developer community to ask questions, trade tips & tricks, and show off your projects"
              href="https://www.convex.dev/community"
            />
            <Resource
              title="Search them all"
              description="Get unblocked quickly by searching across the Documentation, Stack resources, and Discord chats"
              href="https://search.convex.dev/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
