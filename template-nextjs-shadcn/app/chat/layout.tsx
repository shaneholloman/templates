import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container my-8 flex">
      <aside className="w-48">
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="py-2 text-sm text-slate-500 no-underline hover:text-slate-900 dark:hover:text-slate-400"
          >
            Link 1
          </Link>
          <Link
            href="/"
            className="py-2 text-sm text-slate-500 no-underline hover:text-slate-900 dark:hover:text-slate-400"
          >
            Link 2
          </Link>
          <Link
            href="/"
            className="py-2 text-sm text-slate-500 no-underline hover:text-slate-900 dark:hover:text-slate-400"
          >
            Link 3
          </Link>
        </nav>
      </aside>
      <div className="grow">{children}</div>
    </div>
  );
}
