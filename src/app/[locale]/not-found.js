import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-500">404</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="text-base text-slate-600">
            The link might be broken, or the page has moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-16px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
