import clsx from "clsx";

type props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({children, className}: props) {
  return (
    <div className={clsx(`relative inline-block overflow-visible
  max-w-xl w-full mx-auto rounded-2xl
  bg-[var(--header)]
  border border-[var(--border_color)] ring-1 ring-white/5
  hover:shadow-[0_0_40px_rgba(77,168,190,0.35)]
  p-8`,
        className)
    }>
      {children}
    </div>
  );
}

