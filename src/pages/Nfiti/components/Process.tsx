import React from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Question {
  id: number;
  text: string;
  answer: boolean | null;
  options: {
    A: string;
    B: string;
  };
}

interface ProcessProps {
  currentQuestionIndex: number;
  handleAnswer: (answer: boolean) => void;
  questions: Question[];
}

const Process = ({
  currentQuestionIndex,
  handleAnswer,
  questions,
}: ProcessProps) => {
  const currentQuestion = questions[currentQuestionIndex];
  // Adjust progress calculation to ensure exact 9-segment movement
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const svgIndex = Math.min(Math.floor(progress / 11.11), 9);

  return (
    <Box height="calc(100vh - 68px)" p={4}>
      <VStack spacing={6} align="stretch" height="100%">
        <Box position="relative" h="30px">
          <Image
            src={`/image/nfiti/questions/02_QnA_PAGE_gauge_${svgIndex}.svg`}
            position="absolute"
            left="0"
            top="0"
            h="100%"
            w="100%"
            objectFit="cover"
            zIndex="1"
          />
          <motion.div
            style={{
              position: "absolute",
              top: "-10px",
              left: "10px",
              width: "85%",
              height: "100%",
              zIndex: "2",
              display: "flex",
              alignItems: "center",
            }}
            initial={{
              x: "-100%",
            }}
            animate={{
              x: `calc(${progress}% - 20px)`,
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/image/nfiti/loading/loading-gif.gif"
              alt="로딩 이미지"
              width="100px"
              height="100px"
              objectFit="contain"
              objectPosition="center"
              zIndex="3"
            />
          </motion.div>
        </Box>

        {/* Question Text */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={8} maxWidth="600px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                fontSize="2xl"
                fontFamily='"nanumfont", sans-serif'
                textAlign="center"
                color="purple.600"
                mb={6}
                whiteSpace="pre-line"
              >
                {currentQuestion.text}
              </Text>
            </motion.div>
          </VStack>
        </Box>
        <Flex flexDirection="column" alignItems="center" gap={4}>
          {/* Blue Button */}
          <Box
            position="relative"
            w="100%"
            onClick={() => handleAnswer(true)}
            cursor="pointer"
            _hover={{
              transform: 'scale(1.05)',
            }}
            _active={{
              transform: 'scale(0.95)',
            }}
          >
            <Image
              src="/image/nfiti/questions/blueBtn.png"
              alt="파랑"
              w="100%"
            />
            <Text
              position="absolute"
              w="70%"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="16px"
              color="black"
              fontWeight="bold"
              fontFamily='"nanumfont", sans-serif'
              textAlign="center"
              whiteSpace="pre-line"
            >
              {currentQuestion.options.A}
            </Text>
          </Box>

          {/* Red Button */}
          <Box
            position="relative"
            w="100%"
            onClick={() => handleAnswer(false)}
            cursor="pointer"
            _hover={{
              transform: 'scale(1.05)',
            }}
            _active={{
              transform: 'scale(0.95)',
            }}
          >
            <Image
              src="/image/nfiti/questions/redBtn.png"
              alt="빨강"
              w="100%"
            />
            <Text
              position="absolute"
              w="70%"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="16px"
              color="black"
              fontWeight="bold"
              fontFamily='"nanumfont", sans-serif'
              textAlign="center"
              whiteSpace="pre-line"
            >
              {currentQuestion.options.B}
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Process;