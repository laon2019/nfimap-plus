import React, { useRef, useEffect } from "react";
import { VStack, Input, Button, Box, Text, Flex } from "@chakra-ui/react";

interface NameInputProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName, onSubmit }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 5) {
      setName(e.target.value);
    }
  };

 useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const img = new Image();
  img.src = "/image/nfiti/name/01_NAMING_PAGE_BG.png";

  img.onload = () => {
    canvas.width = 400;
    canvas.height = 650;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 텍스트 스타일 설정
    ctx.font = "32px 'UhBeeSe_hyun', serif";
    ctx.fillStyle = "#333";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 텍스트 위치 계산 (중앙)
    const x = canvas.width / 2;
    const y = canvas.height / 2 + 15;
    ctx.fillText(name || "", x, y);
  };
}, [name]);


  return (
    <VStack spacing={4} align="center">
      {/* Canvas */}
      <Flex justifyContent="center" alignItems="center">
        <canvas
          ref={canvasRef}
          style={{
            borderRadius: "8px",
            maxWidth: "100%",
          }}
        />
      </Flex>

      {/* Input 박스 */}
       <Box
        position="absolute"
        bottom="200px"
        left="50%"
        transform="translateX(-50%)"
        w="100%"
        maxW="480px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="8px"
      >
        <Input
          placeholder="이름을 입력하세요"
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          maxLength={5}
          w="200px"
          h="48px"
          textAlign="center"
          flex="1"
          maxW="60%"
        />
        <Button colorScheme="blue" onClick={onSubmit} flexShrink="0" w="80px" h="48px">
          제출
        </Button>
      </Box>
    </VStack>
  );
};

export default NameInput;
