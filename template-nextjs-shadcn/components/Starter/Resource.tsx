import Link from "next/link";

interface ResourceProps {
  title: string;
  description: string;
  href: string;
}

export const Resource = ({ title, description, href }: ResourceProps) => (
  <Link
    href={href}
    className="no-underline border border-neutral-800 rounded-lg p-4 pb-6 bg-neutral-900 hover:border-neutral-500 h-full transition-colors"
  >
    <div className="text-2xl font-medium mb-2">{title}</div>
    <div className="text-neutral-300">{description}</div>
  </Link>
);
