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


export function Flow({ steps }: { steps: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="relative my-[25px] grid gap-3">
      {steps.map((s, i) => (
        <li key={s.title} className="!m-0 flex list-none items-start gap-4 rounded-[18px] border border-white/[.075] bg-white/[.025] p-5 !pl-5">
          <span className="lgl-grad-bg flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-[#061006]">{String(i + 1).padStart(2, "0")}</span>
          <div className="[&_p]:!m-0 [&_p]:!text-xs md:[&_p]:!text-[13px]">
            <h3 className="mb-1 text-sm font-semibold text-[#e8f1e9]">{s.title}</h3>
            {s.text}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Matrix({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="my-[25px] overflow-hidden rounded-[18px] border border-white/[.075] text-[13px]">
      <div className="grid grid-cols-[1.6fr_1fr] bg-[rgba(104,231,83,.06)] text-[10px] font-semibold uppercase tracking-[1.4px] text-[#dce9de]">
        <div className="px-5 py-3">{head[0]}</div>
        <div className="border-l border-white/[.065] px-5 py-3">{head[1]}</div>
      </div>
      {rows.map((r) => (
        <div key={r[0]} className="grid grid-cols-[1.6fr_1fr] border-t border-white/[.065] text-[#98a49c]">
          <div className="px-5 py-4 text-[#dce9de]">{r[0]}</div>
          <div className="border-l border-white/[.065] px-5 py-4 text-xs">{r[1]}</div>
        </div>
      ))}
    </div>
  );
}

export function Alert({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex items-start gap-4 rounded-[18px] border border-[rgba(105,231,82,.2)] bg-[linear-gradient(135deg,rgba(101,229,80,.06),rgba(255,255,255,.015))] p-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(105,231,82,.1)] text-sm font-bold text-[#72e957]">!</span>
      <div className="[&_p]:!m-0 [&_p]:!text-[13px] [&_p]:!text-[#b9c4bc]">{children}</div>
    </div>
  );
}