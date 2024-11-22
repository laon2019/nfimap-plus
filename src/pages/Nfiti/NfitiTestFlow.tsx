import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Nfiti from ".";
import Result from "./Result";
import NameInput from "./components/NameInput";
import Process from "../../components/Process";
import { QUESTIONS, RESULT_DESCRIPTIONS, TestResult } from "./constants";
import { useSetRecoilState } from "recoil";
import { bgColorState } from "../../Atom/bgColorState";

const NfititTestFlow = () => {
  const [testStage, setTestStage] = useState<"intro" | "nameInput" | "process" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [name, setName] = useState("");
  const setBgColor = useSetRecoilState(bgColorState);

  useEffect(() => {
    setBgColor("blue.100");
  }, []);

  const handleStartTest = () => {
    setTestStage("nameInput");
  };

  const handleAnswer = (answer: boolean) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const group1 = [1, 2, 3];
    const group2 = [4, 5, 6];
    const group3 = [7, 8, 9]; 

    const countTrueInGroup = (group: number[]) =>
      group.reduce((acc, id) => acc + (answers[id] ? 1 : 0), 0);

    const eOrI = countTrueInGroup(group1) > group1.length / 2 ? "E" : "I";
    const sOrN = countTrueInGroup(group2) > group2.length / 2 ? "S" : "N";
    const fOrT = countTrueInGroup(group3) > group3.length / 2 ? "F" : "T";

    const resultCode = `${eOrI}${sOrN}${fOrT}` as keyof typeof RESULT_DESCRIPTIONS;

    setTestResult(RESULT_DESCRIPTIONS[resultCode]);
    setTestStage("result");
  };

  const handleRestartTest = () => {
    setTestStage("intro");
    setTestResult(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setName("");
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setTestStage("process");
    } else {
      alert("이름을 입력해주세요!");
    }
  };

  const renderContent = () => {
    switch (testStage) {
      case "intro":
        return <Nfiti onStartTest={handleStartTest} />;
      case "nameInput":
        return <NameInput name={name} setName={setName} onSubmit={handleNameSubmit} />;
      case "process":
        return (
          <Process
            currentQuestionIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
            questions={QUESTIONS}
          />
        );
      case "result":
        return <Result name={name} answer={answers} handleRestartTest={handleRestartTest} />;
    }
  };

  return <Box>{renderContent()}</Box>;
};

export default NfititTestFlow;
