import React from "react";
import { Box, VStack, Text, HStack, Button } from "@chakra-ui/react";

interface Question {
  id: number;
  text: string;
  image: string;
}

interface ProcessProps {
  currentQuestionIndex: number;
  handleAnswer: (answer: boolean) => void;
  questions: Question[];
}

const Process: React.FC<ProcessProps> = ({ currentQuestionIndex, handleAnswer, questions }) => {
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <Box height="calc(100vh - 68px)" p={4}>
      <VStack spacing={6} align="stretch" height="100%">
        <Box position="relative" h="20px" bg="gray.100" borderRadius="full">
          <Box
            position="absolute"
            left="0"
            top="0"
            h="100%"
            w={`${progress}%`}
            bg="blue.500"
            borderRadius="full"
            transition="width 0.3s ease-in-out"
          >
            <Box
              as="img"
              src="/image/nfiti/loading/loading-gif.gif"
              alt="로딩 이미지"
              position="absolute"
              top="30%"
              right="-30px"
              transform="translateY(-50%)"
              width="50px"
              height="50px"
            />
          </Box>
        </Box>
        <Box 
          p={4} 
          borderWidth={1} 
          borderRadius="lg"
          flex="1"
          backgroundImage={`url(${currentQuestion.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          position="relative"
        >
          <VStack 
            spacing={4}
            position="absolute"
            bottom="40px"
            left="0"
            right="0"
            padding="20px"
            background="rgba(255, 255, 255, 0.9)"
          >
            <Text fontSize="lg">{currentQuestion.text}</Text>
            <HStack spacing={4} justifyContent="center">
              <Button colorScheme="green" onClick={() => handleAnswer(true)}>
                예
              </Button>
              <Button colorScheme="red" onClick={() => handleAnswer(false)}>
                아니오
              </Button>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Process;
