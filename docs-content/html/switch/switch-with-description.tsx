export function SwitchWithDescription() {
  return (
    <div className="inline-flex items-center">
      <div className="relative -mt-5 inline-block h-4 w-8 cursor-pointer rounded-full">
        <input
          type="checkbox"
          id="desc"
          className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
        />
        <label
          htmlFor="desc"
          className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
        >
          <div className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"></div>
        </label>
      </div>
      <label
        htmlFor="desc"
        className="mt-px mb-0 ml-3 cursor-pointer select-none font-light text-gray-700"
      >
        <div>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Remember Me
          </p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
            You&apos;ll be able to login without password for 24 hours.
          </p>
        </div>
      </label>
    </div>
  );
}
