import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row max-w-7xl mx-auto px-6 pt-6">
      <aside className="w-48">
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="text-sm no-underline hover:text-slade-950 text-slate-800 py-2"
          >
            Link 1
          </Link>
          <Link
            href="/"
            className="text-sm no-underline hover:text-slade-950 text-slate-800 py-2"
          >
            Link 2
          </Link>
          <Link
            href="/"
            className="text-sm no-underline hover:text-slade-950 text-slate-800 py-2"
          >
            Link 3
          </Link>
        </nav>
      </aside>
      <div className="grow">
        <h2 className="text-4xl font-bold mb-2">Dashboard</h2>
        {children}
      </div>
    </div>
  );
}
