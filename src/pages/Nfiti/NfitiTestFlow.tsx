import React, { useState } from "react";
import { Box, Text, VStack, Container, Button, Image, HStack, Input } from "@chakra-ui/react";
import Nfiti from ".";
import Result from "./Result";
import { QUESTIONS, RESULT_DESCRIPTIONS, TestResult } from "./constants";

const NfititTestFlow = () => {
  const [testStage, setTestStage] = useState<"intro" | "nameInput" | "process" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: boolean}>({});
const [testResult, setTestResult] = useState<TestResult | null>(null);
const [name, setName] = useState("");

  const handleStartTest = () => {
    setTestStage("nameInput");
  };

  const handleAnswer = (answer: boolean) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const positiveAnswers = Object.values(answers).filter((answer) => answer).length;

    let result: TestResult;
    if (positiveAnswers <= 1) {
      result = RESULT_DESCRIPTIONS.introvert;
    } else if (positiveAnswers <= 3) {
      result = RESULT_DESCRIPTIONS.balanced;
    } else {
      result = RESULT_DESCRIPTIONS.extrovert;
    }

    setTestResult(result);
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
            return (
            <VStack spacing={4}>
                <Text fontSize="lg">이름을 입력해주세요:</Text>
                <Input
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <Button colorScheme="blue" onClick={handleNameSubmit}>
                다음
                </Button>
            </VStack>
            );
      case "process":
        const currentQuestion = QUESTIONS[currentQuestionIndex];
        return (
          <Box p={4}>
            <VStack spacing={6} align="stretch">
              <Box p={4} borderWidth={1} borderRadius="lg">
                <VStack spacing={4}>
                  <Image 
                    src={currentQuestion.image}
                    alt={`질문 ${currentQuestion.id} 이미지`}
                    width="100%"
                    height="200px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  <Text fontSize="lg">{currentQuestion.text}</Text>
                  <HStack spacing={4} justifyContent="center">
                    <Button 
                      colorScheme="green"
                      onClick={() => handleAnswer(true)}
                    >
                      예
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => handleAnswer(false)}
                    >
                      아니오
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
        );
      case "result":
        return (
            <Result
                name={name}
            answer={answers} 
            handleRestartTest={handleRestartTest} 
          />
        );
    }
  };

  return <Box>{renderContent()}</Box>;
};

export default NfititTestFlow;