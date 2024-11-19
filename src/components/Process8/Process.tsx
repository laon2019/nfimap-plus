import React, { useState } from 'react'
import { Box, Button, Text, VStack, HStack, Image } from '@chakra-ui/react'

interface Question {
  id: number;
  text: string;
  image: string;
  answer: boolean | null;
}

interface ProcessProps {
  questions: Question[];
  onComplete?: (answers: {[key: number]: boolean}) => void;
}

const Process = ({ questions, onComplete }: ProcessProps) => {
  const [currentAnswers, setCurrentAnswers] = useState<{[key: number]: boolean}>({})

  const handleAnswer = (questionId: number, answer: boolean) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const isAllQuestionsAnswered = () => {
    return questions.every(q => currentAnswers[q.id] !== undefined)
  }

  const handleComplete = () => {
    if (onComplete) {
      onComplete(currentAnswers)
    }
  }

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        {questions.map((question) => (
          <Box key={question.id} p={4} borderWidth={1} borderRadius="lg">
            <VStack spacing={4}>
              <Image 
                src={question.image}
                alt={`질문 ${question.id} 이미지`}
                width="100%"
                height="200px"
                objectFit="cover"
                borderRadius="md"
              />
              <Text fontSize="lg">{question.text}</Text>
              <HStack spacing={4} justifyContent="center">
                <Button 
                  colorScheme={currentAnswers[question.id] === true ? "green" : "gray"}
                  onClick={() => handleAnswer(question.id, true)}
                >
                  예
                </Button>
                <Button
                  colorScheme={currentAnswers[question.id] === false ? "red" : "gray"}
                  onClick={() => handleAnswer(question.id, false)}
                >
                  아니오
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}

        {isAllQuestionsAnswered() && (
          <Button
            colorScheme="blue"
            size="lg"
            onClick={handleComplete}
            width="100%"
          >
            최종 결과 보기
          </Button>
        )}
      </VStack>
    </Box>
  )
}

export default Process
