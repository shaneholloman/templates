import Link from "next/link";

interface ResourceProps {
  title: string;
  description: string;
  href: string;
}

export const Resource = ({ title, description, href }: ResourceProps) => (
  <Link
    href={href}
    className="flex h-full grow basis-0 flex-col rounded-lg border border-slate-500 bg-slate-100 p-4 pb-6 no-underline shadow-md transition-all hover:bg-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-950"
  >
    <div className="mb-2 text-xl font-bold text-slate-700 dark:text-slate-100">
      {title}
    </div>
    <div className="text-slate-600 dark:text-slate-300">{description}</div>
  </Link>
);
