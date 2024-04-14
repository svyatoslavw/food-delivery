import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-2 justify-center items-center">
      <h1 className="text-8xl font-semibold">404!</h1>
      <div className={"text-center"}>
        <p className="text-xl">This page does not exist</p>
        <Link href="/" className="my-4 text-xs underline underline-offset-2">
          Go back to the home page
        </Link>
      </div>
    </div>
  )
}
