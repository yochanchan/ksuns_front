'use client';

import { AnswerProvider } from "./state/answer-context";

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnswerProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </AnswerProvider>
  );
}
