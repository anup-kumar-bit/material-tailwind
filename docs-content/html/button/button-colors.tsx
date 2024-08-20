export function ButtonColors() {
  return (
    <div className="flex w-max gap-4">
      <button
        className="rounded bg-blue-500 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Color Blue
      </button>

      <button
        className="rounded bg-red-500 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all hover:bg-red-600 focus:bg-red-600 active:bg-red-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Color Red
      </button>

      <button
        className="rounded bg-green-500 py-2.5 px-3.5 text-center text-sm text-white leading-4 transition-all hover:bg-green-600 focus:bg-green-600 active:bg-green-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Color Green
      </button>

      <button
        className="rounded bg-amber-500 py-2.5 px-3.5 text-center text-sm text-black font-bold leading-4 transition-all hover:bg-amber-600 focus:bg-amber-600 active:bg-amber-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Color Amber
      </button>
    </div>
  );
}
