import React from "react";
import { Box, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

const Process = ({ currentQuestionIndex, handleAnswer, questions }:ProcessProps) => {
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
            bg="purple.400"
            borderRadius="full"
            transition="width 0.3s ease-in-out"
          >
            <Box
              as="img"
              src="/image/nfiti/loading/loading-gif.gif"
              alt="로딩 이미지"
              position="absolute"
              top="10%"
              right="-30px"
              transform="translateY(-50%)"
              width="80px"
              height="80px"
            />
          </Box>
        </Box>
        <Box 
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxHeight="calc(100vh - 200px)"
        >
          <VStack 
            spacing={20}
            width="100%"
            maxWidth="600px"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text 
                fontSize="2xl" 
                fontFamily='"UhBeeSe_hyun", serif'
                textAlign="center"
                color="purple.600"
                mb={6}
              >
                {currentQuestion.text}
              </Text>
            </motion.div>
            <HStack spacing={6} width="100%" justifyContent="center">
              <motion.div
                animate={{ 
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => handleAnswer(true)}
                  size="lg"
                  height="80px"
                  width="180px"
                  fontSize="xl"
                  bg="purple.400"
                  color="white"
                  _hover={{ 
                    bg: "purple.500",
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"
                  }}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  borderRadius="xl"
                  transition="all 0.3s ease"
                >
                  예
                </Button>
              </motion.div>
              <motion.div
                animate={{ 
                  rotate: [0, -3, 3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => handleAnswer(false)}
                  size="lg"
                  height="80px"
                  width="180px"
                  fontSize="xl"
                  bg="pink.400"
                  color="white"
                  _hover={{ 
                    bg: "pink.500",
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)"
                  }}
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2)"
                  borderRadius="xl"
                  transition="all 0.3s ease"
                >
                  아니오
                </Button>
              </motion.div>
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Process;
