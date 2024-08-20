export function ButtonSizes() {
  return (
    <div className="flex w-max items-end gap-4">
      <button
        className="rounded bg-slate-800 py-1.5 px-2.5 text-center text-sm text-white leading-4 transition-all focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Small
      </button>
      <button
        className="rounded bg-slate-800 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Medium
      </button>
      <button
        className="rounded bg-slate-800 py-3.5 px-5 text-center text-base text-white leading-4 transition-all focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Large
      </button>
    </div>
  );
}
