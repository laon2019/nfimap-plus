import React, { useLayoutEffect, useState } from "react";
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
import { convertToWebP } from "../../../utils/utils";

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
  const progress = ((currentQuestionIndex + 1) / questions.length) * 90;

  const svgIndex = Math.min(Math.floor(progress / 10), 9);
  const [processedImages, setProcessedImages] = useState<string[]>([]);

  // Preload images before rendering
  const preloadImages = [
    "/image/nfiti/questions/blueBtn.png",
    "/image/nfiti/questions/redBtn.png",
  ];

  const processImages = async () => {
    try {
      const processed = await Promise.all(
        preloadImages.map((src) => convertToWebP(src))
      );
      setProcessedImages(processed);
    } catch (error) {
      console.error("Image processing error:", error);
    }
  };

  useLayoutEffect(() => {
    processImages();
  }, []);
  // 이미지 미리 불러오기

  const preloadAllImages = () => {
    preloadImages.forEach((src) => {
      const img = new (window as any).Image() as HTMLImageElement;
      img.src = src;
    });
  };

  // 렌더링 전에 이미지 미리 불러오기
  useLayoutEffect(() => {
    preloadAllImages();
  }, []);

  const preloads = [
    `/image/nfiti/questions/02_QnA_PAGE_gauge_1.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_2.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_3.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_4.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_5.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_6.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_7.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_8.svg`,
    `/image/nfiti/questions/02_QnA_PAGE_gauge_9.svg`,
    "/image/nfiti/loading/loading-gif.gif",
  ];
  const preloadAllImage = () => {
    preloads.forEach((src) => {
      const img = new (window as any).Image() as HTMLImageElement;
      img.src = src;
    });
  };

  useLayoutEffect(() => {
    preloadAllImage();
  }, []);

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
            loading="lazy"
          />
          <Image
            src="/image/nfiti/loading/loading-gif.gif"
            alt="로딩 이미지"
            position="absolute"
            h="100px"
            w="100px"
            left={`calc(${Math.max(0, Math.min(progress * 0.9, 80))}% - 10px)`}
            top="5px"
            transform="translateY(-50%)"
            zIndex="2"
            loading="lazy"
          />
        </Box>

        {/* 질문 텍스트 */}
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

        <Flex flexDirection="column" alignItems="center" gap={4} mb={10}>
          {/* 파랑 버튼 */}
          <Box
            position="relative"
            w="100%"
            onClick={() => handleAnswer(true)}
            cursor="pointer"
            _hover={{
              transform: "scale(1.05)",
            }}
          >
            {processedImages[0] && (
              <Image
                src={processedImages[0]}
                alt="파랑 버튼"
                w="100%"
                loading="lazy"
              />
            )}
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

          {/* 빨강 버튼 */}
          <Box
            position="relative"
            w="100%"
            onClick={() => handleAnswer(false)}
            cursor="pointer"
            _hover={{
              transform: "scale(1.03)",
            }}
          >
            {processedImages[1] && (
              <Image
                src={processedImages[1]}
                alt="빨강 버튼"
                w="100%"
                loading="lazy"
              />
            )}
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
