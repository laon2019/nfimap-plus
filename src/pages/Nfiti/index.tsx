import React, { useLayoutEffect, useState } from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";

interface NfitiProps {
  onStartTest: () => void;
}

const Nfiti = ({ onStartTest }: NfitiProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const imageSources = [
      "image/nfiti/start/00_START_PAGE_startN.svg",
      "/image/nfiti/start/00_START_PAGE_animation.gif",
      "image/nfiti/start/00_START_PAGE_startB.svg",
    ];

    const promises = imageSources.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new (window as any).Image() as HTMLImageElement;
        img.src = src;
        img.onload = () => resolve();
      });
    });

    Promise.all(promises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    // 로딩 중 상태를 보여주기 위해 간단한 로딩 UI를 추가
    return (
      <Box
        position="relative"
        w="100%"
        h="calc(100vh - 68px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <p>로딩 중...</p>
      </Box>
    );
  }

  return (
    <Box position="relative" w="100%" h="calc(100vh - 68px)" overflow="hidden">
      <Flex h="150px" justifyContent="center" alignItems="center" p="20px 40px">
        <Image src="image/nfiti/start/00_START_PAGE_startN.svg" alt="제목" />
      </Flex>
      <Flex
        h="calc(100vh - 368px)"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        overflow="hidden"
      >
        <Image
          src="/image/nfiti/start/00_START_PAGE_animation.gif"
          alt="랜덤 이미지"
          objectFit="contain"
        />
      </Flex>

      <Flex h="150px" justifyContent="center" alignItems="center" p="20px 80px">
        <Button
          onClick={onStartTest}
          bg="transparent"
          _hover={{
            transform: "scale(1.05)",
          }}
          _active={{
            transform: "scale(0.95)",
          }}
          borderRadius="md"
          padding="0"
          minWidth="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="image/nfiti/start/00_START_PAGE_startB.svg"
            alt="테스트 시작"
            boxSize="300px"
          />
        </Button>
      </Flex>
    </Box>
  );
};

export default Nfiti;
