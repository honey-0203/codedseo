import type { ReactNode } from "react";

export function Important({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 rounded-r-[15px] border-l-2 border-[#72e957] bg-[rgba(104,230,81,.045)] px-[25px] py-[23px]">
      <strong className="mb-1.5 block text-[13px] text-[#9bee80]">{title}</strong>
      <div className="[&_p]:!mb-0 [&_p]:!text-xs">{children}</div>
    </div>
  );
}

export function Panel({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="lgl-panel relative my-[25px] overflow-hidden rounded-[20px] border border-white/[.075] bg-[#09100b] p-[27px]">
      <p className="!mb-2 !text-[10px] font-bold uppercase tracking-[1.5px] !text-[#6ee158]">{label}</p>
      <h3 className="mb-[9px] text-xl font-semibold text-[#f4faf5]">{title}</h3>
      <div className="relative z-[2] [&_p]:!mb-0">{children}</div>
    </div>
  );
}

export function Cards({ items }: { items: { icon: string; title: string; text: ReactNode }[] }) {
  return (
    <div className="my-[25px] grid gap-3 sm:grid-cols-2">
      {items.map((c) => (
        <div key={c.title} className="rounded-[18px] border border-white/[.075] bg-white/[.025] p-[23px] transition hover:-translate-y-[5px] hover:border-[rgba(104,231,83,.25)] hover:bg-[rgba(104,231,83,.035)]">
          <span className="mb-[14px] flex h-[35px] w-[35px] items-center justify-center rounded-[10px] bg-[rgba(106,232,83,.075)] text-[13px] text-[#72e957]">{c.icon}</span>
          <h3 className="mb-1.5 text-sm font-semibold text-[#e8f1e9]">{c.title}</h3>
          <div className="[&_p]:!m-0 [&_p]:!text-xs [&_p]:!text-[#86928a]">{c.text}</div>
        </div>
      ))}
    </div>
  );
}