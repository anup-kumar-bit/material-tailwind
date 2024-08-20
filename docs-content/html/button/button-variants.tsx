export function ButtonVariants() {
  return (
    <div className="flex w-max gap-4">
      <button
        className="rounded bg-slate-800 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all focus:bg-slate-700 active:bg-slate-700 hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Filled
      </button>

      <button
        className="rounded bg-gradient-to-r from-slate-800 to-slate-900 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all focus:from-slate-700 focus:to-slate-800 hover:from-slate-700 hover:to-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Gradient
      </button>

      <button
        className="rounded border box-border border-slate-800 py-2.5 px-3.5 text-center text-sm leading-4 transition-all text-slate-800 hover:text-white hover:bg-slate-700 hover:border-slate-700 focus:text-white focus:bg-slate-700 focus:border-slate-700 active:border-slate-700 active:text-white active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Outlined
      </button>

      <button
        className="py-2.5 px-3.5 text-center text-sm text-slate-800 hover:text-slate-700 focus:text-slate-700 active:text-slate-700 leading-4 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Text
      </button>
    </div>
  );
}
