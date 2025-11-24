'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { QUESTIONS, type QuestionId } from "../data/questions";

type AnswerState = Record<QuestionId, string[]>;

type AnswerContextValue = {
  answers: AnswerState;
  setAnswer: (questionId: QuestionId, values: string[]) => void;
  resetAnswers: () => void;
};

const AnswerContext = createContext<AnswerContextValue | null>(null);

function createInitialState(): AnswerState {
  const initialState = {} as AnswerState;

  QUESTIONS.forEach((question) => {
    initialState[question.id] = [];
  });

  return initialState;
}

export function AnswerProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<AnswerState>(createInitialState);

  const setAnswer = useCallback(
    (questionId: QuestionId, values: string[]) => {
      setAnswers((previous) => ({
        ...previous,
        [questionId]: values,
      }));
    },
    [],
  );

  const resetAnswers = useCallback(() => {
    setAnswers(createInitialState());
  }, []);

  const value = useMemo(
    () => ({
      answers,
      setAnswer,
      resetAnswers,
    }),
    [answers, setAnswer, resetAnswers],
  );

  return <AnswerContext.Provider value={value}>{children}</AnswerContext.Provider>;
}

export function useAnswerContext() {
  const context = useContext(AnswerContext);

  if (!context) {
    throw new Error("useAnswerContext must be used within AnswerProvider");
  }

  return context;
}
