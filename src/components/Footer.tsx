export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-zinc-500">
      <div className="border-t pt-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <div>© {new Date().getFullYear()} Runable — clone</div>
          <div className="flex gap-4">
            <a href="#">Docs</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
