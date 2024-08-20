export function ButtonRounded() {
  return (
    <div className="flex items-center gap-4">
      <button
        className="rounded-full bg-slate-800 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all focus:bg-slate-700 active:bg-slate-700 hover:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Filled
      </button>

      <button
        className="rounded-full bg-gradient-to-r from-slate-800 to-slate-900 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all focus:from-slate-700 focus:to-slate-800 hover:from-slate-700 hover:to-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Gradient
      </button>

      <button
        className="rounded-full border border-slate-800 py-2 px-3.5 text-center text-sm leading-4 transition-all text-slate-800 hover:text-white hover:bg-slate-700 hover:border-slate-700 focus:text-white focus:bg-slate-700 focus:border-slate-700 active:border-slate-700 active:text-white active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Outlined
      </button>
    </div>
  );
}
