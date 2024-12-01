import React from "react";
import { Box, VStack, Image, Text, HStack, Button } from "@chakra-ui/react";

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
    <Box p={4}>
      <VStack spacing={6} align="stretch">
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
            <Image
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
        <Box p={4} borderWidth={1} borderRadius="lg">
          <VStack spacing={4}>
            <Image
              src={currentQuestion.image}
              alt={`질문 ${currentQuestion.id} 이미지`}
              width="100%"
              height="600px"
              objectFit="cover"
              borderRadius="md"
            />
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
