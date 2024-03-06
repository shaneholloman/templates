import Link from "next/link";
import { Code } from "../typography/code";
import { ConvexLogo } from "./ConvexLogo";
import { Resource } from "./Resource";

export const GetStarted = () => {
  return (
    <div className="flex flex-col my-12">
      <header className="flex items-baseline justify-between my-8">
        <span className="text-5xl font-light">Next.js Template</span>
        <Link
          href="https://www.convex.dev/"
          className="flex no-underline gap-1"
        >
          <span>by</span>
          <ConvexLogo />
        </Link>
      </header>
      <div className="grid grid-cols-4 gap-8 auto-rows-auto">
        <div className="col-span-3">
          <p>Congrats, you already have an app running on Convex!</p>
          <p>
            Interact with the app above to try it out. You can open multiple
            browser windows to see the real-time database in action, and the{" "}
            <Link href="https://dashboard.convex.dev/">Dashboard</Link> window
            should already be open for inspecting functions, data, logs, and
            more.
          </p>
          <p>
            Edit <Code>convex/myFunctions.ts</Code> to change the backend
            functionality.
          </p>
          <p>
            Edit <Code>app/page.tsx</Code> to change your frontend, including
            removing this <Code>&lt;GetStarted /&gt;</Code> component when
            you&rsquo;re ready to focus on your app.
          </p>
        </div>
        <div className="col-start-4 border border-neutral-800 rounded-lg p-4 pb-6 bg-neutral-900 self-start">
          <h2 className="text-2xl font-bold my-2">About this template</h2>
          <p>
            This template was created with <Code>npm create convex@latest</Code>
            . It consists of a <Link href="https://nextjs.org/">Next.js</Link>{" "}
            app built with <Link href="https://react.dev/">React</Link> and{" "}
            <Link href="https://www.typescriptlang.org/">TypeScript</Link>,
            styled with TailwindCSS, and using{" "}
            <Link href="https://ui.shadcn.com/">shadcn</Link> components. This
            provides you with a starting point for building your web
            application.
          </p>
          <p>
            Looking for more? Visit the{" "}
            <Link href="https://www.convex.dev/templates">
              Template Gallery
            </Link>{" "}
            to find repos with complete applications you can build off of.
          </p>
        </div>
        <div className="row-start-2 flex flex-col">
          <Resource
            title="Convex Docs"
            description="Dive deeper into the Convex platform with our comprehensive developer documentation"
            href="https://docs.convex.dev/home"
          />
        </div>
        <div className="row-start-2 flex flex-col">
          <Resource
            title="Stack"
            description="Learn about best practices, use cases, and more from a growing collection of articles, videos, and walkthroughs"
            href="https://stack.convex.dev/"
          />
        </div>
        <div className="row-start-2 flex flex-col">
          <Resource
            title="Discord"
            description="Join our developer community to ask questions, trade tips & tricks, and show off your projects"
            href="https://www.convex.dev/community"
          />
        </div>
        <div className="row-start-2 flex flex-col">
          <Resource
            title="Developer Search"
            description="Get unblocked quickly by searching across the Documentation, Stack resources, and Discord chats"
            href="https://search.convex.dev/"
          />
        </div>
      </div>
    </div>
  );
};
