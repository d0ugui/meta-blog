export default async function NotFound() {
  return (
    <div className="flex flex-col items-center my-40">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl">Page not found</h2>

      <p className="max-w-[55%] text-center mt-8">
        $
        {`The page you were looking for might have been removed, had it's name
        changed or is temporarily unavailable.`}
      </p>

      <button className="bg-primary text-white font-work_sans font-medium py-3 px-[120px] rounded-md mt-10 hover:opacity-70 transition-opacity uppercase">
        Go to homepage
      </button>
    </div>
  )
}
