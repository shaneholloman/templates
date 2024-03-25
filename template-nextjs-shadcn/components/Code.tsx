export const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <code className="relative rounded bg-slate-300 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold dark:bg-slate-700">
      {children}
    </code>
  );
};
