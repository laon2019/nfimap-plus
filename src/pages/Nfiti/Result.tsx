import {
  Flex,
  Image,
  Box,
  Button,
  Spinner,
  Text,
  VStack,
  Heading,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

interface TestResultDetails {
  reason: string;
  reasonText: string;
  keyPoints: {
    title: string;
    description: string[];
  };
  dayPlan: {
    title: string;
    description: string[];
  };
  hashtags: string;
}

interface TestResult {
  title: string;
  imageUrl: string;
  details: TestResultDetails;
}

interface ResultProps {
  name: string;
  testResult?: TestResult | null;
  handleRestartTest: () => void;
}

const Result = ({ name, testResult, handleRestartTest }: ResultProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setImageLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (imageLoaded && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new window.Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        if (ctx) {
          ctx.font = 'Bold 64px "UhBeeSe_hyun", serif';
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(
            name + "(이)는",
            canvas.width / 2,
            canvas.height / 9 - 10
          );
        }
      };

      img.src = `${testResult?.imageUrl}`;
    }
  }, [imageLoaded, name]);

  const handleSaveClick = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "NFITI.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }
      }, "image/png");
    }
  };

  const handleShareClick = () => {
    alert("이미지가 공유되었습니다.");
  };

  return (
    <Box>
      <Flex direction="column" align="center" gap={6} p={4}>
        {isLoading ? (
          <Flex
            position="fixed" // 화면 정중앙 고정
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)" // 화면 중심으로 정렬
            flexDirection="column"
            justify="center"
            align="center"
            p={8}
          >
            <Image
              src="/image/nfiti/loading/loading-gif.gif"
              alt="로딩 이미지"
              width="100px"
              height="100px"
              objectFit="contain"
              objectPosition="center"
            />
            <Text
              fontSize="2xl"
              fontFamily='"UhBeeSe_hyun", serif'
              textAlign="center"
              color="purple.600"
              mt={4} // 이미지와 텍스트 간격 조정
            >
              로딩중...
            </Text>
          </Flex>
        ) : imageLoaded ? (
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        ) : null}
        {imageLoaded && (
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
            px={4}
          >
            <Image
              src="/image/Final_UI_save.svg"
              alt="저장"
              w="45%"
              h="auto"
              cursor="pointer"
              onClick={handleSaveClick}
              _hover={{
                transform: "scale(1.05)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
            />
            <Image
              src="/image/Final_UI_share.svg"
              alt="공유"
              w="45%"
              h="auto"
              cursor="pointer"
              onClick={handleShareClick}
              _hover={{
                transform: "scale(1.05)",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
            />
          </Flex>
        )}
        {imageLoaded && (
          <VStack spacing={4} align="stretch" w="100%">
            <Heading size="lg" textAlign="center" color="blue.600">
              {testResult?.title}
            </Heading>
            <Divider />
            <Box p={4} bg="gray.100" borderRadius="md" boxShadow="sm">
              <Text fontWeight="bold" mb={2} textAlign="center">
                {testResult?.details.reason}
              </Text>
              <Text color="gray.700" textAlign="center">
                {testResult?.details.reasonText}
              </Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={4}>
                {testResult?.details.keyPoints.title}
              </Heading>
              <List spacing={2}>
                {testResult?.details.keyPoints.description.map(
                  (desc: string, idx: number) => (
                    <ListItem key={idx} color="gray.600" fontSize="sm">
                      - {desc}
                    </ListItem>
                  )
                )}
              </List>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={4}>
                {testResult?.details.dayPlan.title}
              </Heading>
              <List spacing={2}>
                {testResult?.details.dayPlan.description.map(
                  (desc: string, idx: number) => (
                    <ListItem key={idx} color="gray.600" fontSize="sm">
                      - {desc}
                    </ListItem>
                  )
                )}
              </List>
            </Box>
            <Text textAlign="center" color="blue.400" fontWeight="bold">
              {testResult?.details.hashtags}
            </Text>
          </VStack>
        )}
        {imageLoaded && (
          <Box
            position="relative"
            w="90%"
            onClick={handleRestartTest}
            cursor="pointer"
            _hover={{
              transform: "scale(1.05)",
            }}
            _active={{
              transform: "scale(0.95)",
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
              fontSize="48px"
              color="black"
              fontWeight="bold"
              fontFamily='"UhBeeSe_hyun", serif'
              textAlign="center"
              whiteSpace="pre-line"
            >
              다시하기
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Result;
