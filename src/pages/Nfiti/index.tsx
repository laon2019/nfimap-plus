import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";

interface NfitiProps {
  onStartTest: () => void;
}

const Nfiti = ({ onStartTest }: NfitiProps) => {
  const [processedImages, setProcessedImages] = useState<string[]>([]);

  const preloadImages = [
    "image/nfiti/start/00_START_PAGE_startN.svg",
    "/image/nfiti/start/00_START_PAGE_animation.gif", // GIF 파일
    "image/nfiti/start/00_START_PAGE_startB.svg",
  ];

  // WebP로 변환 (GIF 제외)
  const convertToWebP = async (src: string): Promise<string> => {
    if (src.endsWith(".gif")) {
      return src; // GIF는 변환하지 않고 원본 유지
    }

    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.src = src;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas context is not available"));
          return;
        }
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // 품질 설정 추가
        const webpDataUrl = canvas.toDataURL("image/webp", 1); // 품질 95%
        resolve(webpDataUrl);
      };

      img.onerror = (error: Event | string) => reject(error);
    });
  };

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

  useEffect(() => {
    processImages();
  }, []);

  return (
    <Box position="relative" w="100%" h="calc(100vh - 68px)" overflow="hidden">
      <Flex h="150px" justifyContent="center" alignItems="center" p="20px 40px">
        {processedImages[0] && (
          <Image src={processedImages[0]} alt="제목" loading="lazy" />
        )}
      </Flex>
      <Flex
        h="calc(100vh - 368px)"
        alignItems="center"
        justifyContent="center"
        borderRadius="md"
        overflow="hidden"
      >
        {processedImages[1] && (
          <Image
            src={processedImages[1]}
            alt="랜덤 이미지"
            objectFit="contain"
            loading="lazy"
          />
        )}
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
          {processedImages[2] && (
            <Image src={processedImages[2]} alt="테스트 시작" loading="lazy" />
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default Nfiti;
