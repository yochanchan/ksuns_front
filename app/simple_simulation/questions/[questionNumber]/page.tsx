'use client';

import { useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChoiceCard } from "../../components/ChoiceCard";
import { ProgressBar } from "../../components/ProgressBar";
import {
  QUESTIONS,
  QUESTION_TOTAL,
  getQuestionByNumber,
  OPTION_ICONS,
  type QuestionOption,
} from "../../data/questions";
import { useAnswerContext } from "../../state/answer-context";

export default function QuestionPage() {
  const router = useRouter();
  const { questionNumber } = useParams<{ questionNumber: string }>();
  const parsedQuestionNumber = Number(questionNumber);
  const question = useMemo(
    () => getQuestionByNumber(parsedQuestionNumber),
    [parsedQuestionNumber],
  );
  const { answers, setAnswer } = useAnswerContext();

  useEffect(() => {
    if (!question) {
      router.replace("/simple_simulation/questions/1");
    }
  }, [question, router]);

  if (!question) {
    return null;
  }

  const selectedValues = answers[question.id] ?? [];
  const unknownValue = question.options.find((option) => option.isUnknown)?.value;

  const completedCount = QUESTIONS.filter(
    (item) => item.number < question.number && (answers[item.id]?.length ?? 0) > 0,
  ).length;

  const toggleSelection = (option: QuestionOption) => {
    const isLastQuestion = question.number === QUESTION_TOTAL;
    const isAutoAdvanceAllowed =
      question.type === "single" && question.id !== "q12" && !isLastQuestion;

    if (question.type === "single") {
      const currentValue = selectedValues[0];
      if (currentValue === option.value) {
        return;
      }

      setAnswer(question.id, [option.value]);

      if (isAutoAdvanceAllowed) {
        const nextQuestionNumber = question.number + 1;
        router.push(`/simple_simulation/questions/${nextQuestionNumber}`);
      }
      return;
    }

    if (option.isUnknown) {
      const nextValues = selectedValues.includes(option.value) ? [] : [option.value];
      setAnswer(question.id, nextValues);
      return;
    }

    const withoutUnknown = unknownValue
      ? selectedValues.filter((value) => value !== unknownValue)
      : selectedValues;
    const isSelected = withoutUnknown.includes(option.value);
    const nextValues = isSelected
      ? withoutUnknown.filter((value) => value !== option.value)
      : [...withoutUnknown, option.value];

    setAnswer(question.id, nextValues);
  };

  const isNextDisabled = selectedValues.length === 0;
  const isFirstQuestion = question.number === 1;
  const isLastQuestion = question.number === QUESTION_TOTAL;

  const handleBack = () => {
    if (isFirstQuestion) return;
    router.push(`/simple_simulation/questions/${question.number - 1}`);
  };

  const handleNext = () => {
    if (isNextDisabled) return;

    if (isLastQuestion) {
      router.push("/simple_simulation/result");
      return;
    }

    router.push(`/simple_simulation/questions/${question.number + 1}`);
  };

  return (
    <div className="flex flex-1 flex-col gap-6">
      <ProgressBar completed={completedCount} total={QUESTION_TOTAL} />

      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-slate-500">{question.title}</p>
        <h1 className="text-2xl font-semibold leading-8 text-slate-900">
          {`Q${question.number}. ${question.prompt}`}
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {question.options.map((option) => (
          <ChoiceCard
            key={option.value}
            label={option.label}
            selected={selectedValues.includes(option.value)}
            isUnknown={option.isUnknown}
            icon={OPTION_ICONS[option.value]}
            onClick={() => toggleSelection(option)}
            className={option.isUnknown ? "col-span-full sm:col-span-2" : ""}
          />
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        {isFirstQuestion ? (
          <div />
        ) : (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            戻る
          </button>
        )}

        <button
          type="button"
          onClick={handleNext}
          disabled={isNextDisabled}
          className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isLastQuestion ? "診断する" : "進む"}
        </button>
      </div>
    </div>
  );
}
