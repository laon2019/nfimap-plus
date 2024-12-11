import {
  Flex,
  Image,
  Box,
  Text,
  VStack,
  Heading,
  Divider,
  List,
  ListItem,
  Badge,
  Container,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

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
  const [showLoading, setShowLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  const preloadImages = [
    `/image/nfiti/loading/loading-gif.gif`,
    `/image/Final_UI_save.svg`,
    `/image/Final_UI_share.svg`,
    `/image/nfiti/retry.png`,
    `/image/nfiti/result/INF.png`,
    `/image/nfiti/result/INT.png`,
    `/image/nfiti/result/ISF.png`,
    `/image/nfiti/result/IST.png`,
    `/image/nfiti/result/ENF.png`,
    `/image/nfiti/result/ENT.png`,
    `/image/nfiti/result/EST.png`,
    `/image/nfiti/result/ESF.png`,
  ];

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

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      
      // 로딩 화면을 페이드 아웃 효과로 숨기기
      if (loadingRef.current) {
        loadingRef.current.style.opacity = '0';
        loadingRef.current.style.transition = 'opacity 0.5s ease-out';
        
        // 애니메이션 종료 후 완전히 제거
        const fadeOutTimer = setTimeout(() => {
          setShowLoading(false);
          setImageLoaded(true);
        }, 500);

        return () => clearTimeout(fadeOutTimer);
      }
    }, 2000);

    return () => clearTimeout(loadingTimer);
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
  }, [imageLoaded, name, testResult]);

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
    <Box fontFamily='"nanumfont", sans-serif'>
      <Container maxW="container.md" py={8}>
        <Flex direction="column" align="center" gap={6}>
          {showLoading && (
            <Flex
              ref={loadingRef}
              position="fixed"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              flexDirection="column"
              justify="center"
              align="center"
              p={8}
              zIndex={10}
              bg="white"
              width="100%"
              height="100%"
            >
              <Image
                src="/image/nfiti/loading/loading-gif.gif"
                alt="로딩 이미지"
                width="100px"
                height="100px"
                objectFit="contain"
                objectPosition="center"
                loading="lazy"
              />
              <Text
                fontSize="2xl"
                fontFamily='"UhBeeSe_hyun", serif'
                textAlign="center"
                color="purple.600"
                mt={4}
              >
                로딩중...
              </Text>
            </Flex>
          )}

          {imageLoaded && (
            <canvas
              ref={canvasRef}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
            />
          )}

          {imageLoaded && (
            <Stack spacing={6} w="full">
              {/* Save and Share Buttons */}
              <Flex
                w="full"
                justifyContent="space-between"
                alignItems="center"
                px={4}
              >
                <Image
                  src="/image/Final_UI_save.svg"
                  alt="저장"
                  w="45%"
                  h="auto"
                  cursor="pointer"
                  transition="transform 0.2s"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  _active={{
                    transform: "scale(0.95)",
                  }}
                  onClick={handleSaveClick}
                  loading="lazy"
                />
                <Image
                  src="/image/Final_UI_share.svg"
                  alt="공유"
                  w="45%"
                  h="auto"
                  cursor="pointer"
                  transition="transform 0.2s"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  _active={{
                    transform: "scale(0.95)",
                  }}
                  onClick={handleShareClick}
                  loading="lazy"
                />
              </Flex>

              {/* Result Title */}
              <Heading
                size="xl"
                textAlign="center"
                color="blue.600"
                mb={4}
                fontWeight="bold"
                letterSpacing="tight"
              >
                {testResult?.title}
              </Heading>

              <Divider border="2px" borderColor="blue.200" />

              {/* Reason Section */}
              <Box
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="md"
                textAlign="center"
              >
                <Text fontWeight="bold" fontSize="lg" color="blue.700" mb={3}>
                  {testResult?.details.reason}
                </Text>
                <Text color="gray.600" lineHeight="tall">
                  {testResult?.details.reasonText}
                </Text>
              </Box>

              {/* Key Points */}
              <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                <Heading size="xl" mb={4} color="blue.600" textAlign="center">
                  🔥비장의 무기🔥
                </Heading>
                <Heading size="md" mb={4} color="blue.600" textAlign="center">
                  {testResult?.details.keyPoints.title}
                </Heading>
                <List spacing={3}>
                  {testResult?.details.keyPoints.description.map(
                    (desc: string, idx: number) => (
                      <ListItem
                        key={idx}
                        color="gray.700"
                        fontSize="md"
                        display="flex"
                        alignItems="center"
                      >
                        <Text fontSize="8px" mr={2}>
                          ●
                        </Text>

                        {desc}
                      </ListItem>
                    )
                  )}
                </List>
              </Box>

              {/* Day Plan */}
              <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                <Heading size="md" mb={4} color="blue.600" textAlign="center">
                  {testResult?.details.dayPlan.title}
                </Heading>
                <List spacing={3}>
                  {testResult?.details.dayPlan.description.map(
                    (desc: string, idx: number) => (
                      <ListItem
                        key={idx}
                        color="gray.700"
                        fontSize="md"
                        display="flex"
                        alignItems="center"
                      >
                        <Text fontSize="8px" mr={2}>
                          ●
                        </Text>
                        {desc}
                      </ListItem>
                    )
                  )}
                </List>
              </Box>

              {/* Hashtags */}
              <Flex
                wrap="wrap"
                justifyContent="center"
                gap={2}
                p={4}
                bg="blue.50"
                borderRadius="xl"
              >
                {testResult?.details.hashtags
                  .split(",")
                  .map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      colorScheme="blue" 
                      variant="outline"
                    >
                      {tag.trim()}
                    </Badge>
                  ))}
              </Flex>

              <Box
                position="relative"
                w="100%"
                onClick={handleRestartTest}
                cursor="pointer"
                _hover={{
                  transform: "scale(1.05)",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
              >
                <Image src="/image/nfiti/retry.png" alt="다시하기" w="100%" loading="lazy" />
              </Box>
            </Stack>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Result;