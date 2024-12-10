import React, { useLayoutEffect, useState } from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";

interface NfitiProps {
  onStartTest: () => void;
}

const Nfiti = ({ onStartTest }: NfitiProps) => {
  const preloadImages = [
    "image/nfiti/start/00_START_PAGE_startN.svg",
    "/image/nfiti/start/00_START_PAGE_animation.gif",
    "image/nfiti/start/00_START_PAGE_startB.svg",
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
