export function NestedAccordion() {
  return (
    <>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="collapse-1"
          >
            <span>What is Material Tailwind?</span>
            <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
            <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            <div className="relative mb-3">
              <h6 className="mb-0">
                <button
                  className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                  data-collapse-target="collapse-4"
                >
                  <span>What is Material Tailwind?</span>
                  <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
                  <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
                </button>
              </h6>
              <div
                data-collapse="collapse-4"
                className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="collapse-2"
          >
            <span>How to use Material Tailwind?</span>
            <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
            <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-2"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
            <div className="relative mb-3">
              <h6 className="mb-0">
                <button
                  className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
                  data-collapse-target="collapse-5"
                >
                  <span>What is Material Tailwind?</span>
                  <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
                  <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
                </button>
              </h6>
              <div
                data-collapse="collapse-5"
                className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target="collapse-3"
          >
            <span>What can I do with Material Tailwind?</span>
            <i className="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
            <i className="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-3"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </div>
        </div>
      </div>
    </>
  );
}
