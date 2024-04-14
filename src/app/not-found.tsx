import Link from "next/link"

export default function NotFound() {
  return (
    <div className="justify-center items-center">
      <h1 className="text-5xl">Not found 404!</h1>
      <p className="text-2xl ">Этой страницы не существует</p>
      <div>
        <Link href="/" className="my-4">
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
