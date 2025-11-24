'use client';

import { useRouter } from "next/navigation";
import { QUESTIONS } from "../data/questions";
import { useAnswerContext } from "../state/answer-context";

export default function ResultPage() {
  const router = useRouter();
  const { answers, resetAnswers } = useAnswerContext();

  const handleRestart = () => {
    resetAnswers();
    router.push("/simple_simulation/questions/1");
  };

  return (
    <div className="flex flex-1 flex-col gap-6">
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold leading-8 text-slate-900">
          診断結果はこの通りです
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          ご回答内容の一覧を表示しています。
        </p>
      </section>

      <section className="space-y-4">
        {QUESTIONS.map((question) => {
          const selectedValues = answers[question.id] ?? [];
          const selectedLabels = question.options
            .filter((option) => selectedValues.includes(option.value))
            .map((option) => option.label);
          const displayText =
            selectedLabels.length > 0 ? selectedLabels.join("、") : "未回答";

          return (
            <article
              key={question.id}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">
                {`Q${question.number}. ${question.title}`}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {question.prompt}
              </p>
              <p className="mt-3 text-base text-slate-800">{displayText}</p>
            </article>
          );
        })}
      </section>

      <div className="mt-auto flex flex-wrap gap-3 pt-4">
        <button
          type="button"
          disabled
          className="inline-flex items-center justify-center rounded-full bg-slate-300 px-6 py-3 text-base font-semibold text-white"
        >
          新規アカウントページ作成（無料）
        </button>
        <button
          type="button"
          onClick={handleRestart}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
}
