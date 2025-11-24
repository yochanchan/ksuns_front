import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-900">
      <div className="flex w-full max-w-md flex-col gap-4 px-4 py-16">
        <Link
          href="/simple_simulation/questions/1"
          className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          簡易シミュレーションを始める
        </Link>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="inline-flex items-center justify-center rounded-full bg-slate-300 px-6 py-4 text-base font-semibold text-white"
        >
          ログインする
        </button>
      </div>
    </main>
  );
}
