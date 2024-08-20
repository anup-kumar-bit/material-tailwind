export function ButtonWithIcon() {
  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2.5 rounded bg-slate-800 py-2.5 px-3.5 text-center text-sm text-white transition-all focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          ></path>
        </svg>
        Add to Bookmark
      </button>
      <button
        className="flex items-center gap-2.5 rounded bg-gradient-to-r from-slate-800 to-slate-900 py-2.5 px-3.5 text-center text-sm text-white transition-all focus:from-slate-700 focus:to-slate-800 hover:from-slate-700 hover:to-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          ></path>
        </svg>
        Upload Files
      </button>
      <button
        className="flex items-center gap-2 rounded border box-content border-slate-800 py-2.5 px-3.5 text-center text-sm transition-all text-slate-800 leading-5 hover:text-white hover:bg-slate-700 hover:border-slate-700 focus:text-white focus:bg-slate-700 focus:border-slate-700 active:border-slate-700 active:text-white active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          ></path>
        </svg>
        Refresh
      </button>
      <button
        className="flex items-center gap-2.5 rounded py-2.5 px-3.5 text-center text-sm text-slate-800 hover:text-slate-700 focus:text-slate-700 active:text-slate-700 leading-4 transition-all hover:bg-slate-50 focus:bg-slate-50 active:bg-slate-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
}
