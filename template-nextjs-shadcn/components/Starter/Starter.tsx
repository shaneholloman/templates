import Link from "next/link";
import { Code } from "../typography/code";
import { ConvexLogo } from "./ConvexLogo";
import { Resource } from "./Resource";

interface StarterProps {
  title: string;
  children?: React.ReactNode;
}

export const Starter = ({ title, children }: StarterProps) => {
  return (
    <div className="flex flex-col p-12 max-w-6xl mx-auto">
      <header className="flex justify-between items-baseline my-6">
        <h1 className="text-5xl font-medium">{title}</h1>
        <Link
          href="https://www.convex.dev/"
          className="flex gap-1.5 no-underline"
        >
          <span>By</span>
          <ConvexLogo />
        </Link>
      </header>

      {/* Demo app window. */}
      <div className="h-full overflow-hidden rounded-lg bg-white text-neutral-n12 shadow-md min-h-[30vh] mb-6">
        <div className="flex gap-1 bg-neutral-200 p-2 pl-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
        <div className="px-3 py-4 text-black">{children}</div>
      </div>

      <div className="flex gap-6">
        <div className="basis-0 grow-[2]">
          <h2 className="text-2xl font-bold my-2">Getting started</h2>
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
            removing this <Code>&lt;Starter /&gt;</Code> component when
            you&rsquo;re ready to focus on your app.
          </p>
        </div>
        <div className="basis-0 grow-[1]">
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
      </div>

      <h2 className="text-2xl font-bold my-4">Resources</h2>
      <div className="flex gap-6">
        <Resource
          title="Convex Docs"
          description="Dive deeper into the Convex platform with our comprehensive developer documentation"
          href="https://docs.convex.dev/home"
        />
        <Resource
          title="Stack"
          description="Learn about best practices, use cases, and more from a growing collection of articles, videos, and walkthroughs"
          href="https://stack.convex.dev/"
        />
        <Resource
          title="Discord"
          description="Join our developer community to ask questions, trade tips & tricks, and show off your projects"
          href="https://www.convex.dev/community"
        />
        <Resource
          title="Developer Search"
          description="Get unblocked quickly by searching across the Documentation, Stack resources, and Discord chats"
          href="https://search.convex.dev/"
        />
      </div>
    </div>
  );
};
