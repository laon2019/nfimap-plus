import React, { useRef, useEffect } from "react";
import { Flex, Input, Button, Box, Image, VStack, Center } from "@chakra-ui/react";

interface NameInputProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName, onSubmit }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle key press for submitting
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  // Handle input changes with character limits
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value); // Check for Korean characters

    if ((isKorean && value.length <= 3) || (!isKorean && value.length <= 5)) {
      setName(value);
    }
  };

  // Update the canvas text
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Set font and style
        ctx.font = '40px "UhBeeSe_hyun", serif';
        ctx.textAlign = "center";
        ctx.fillStyle = "#000";

        // Draw text at the center
        ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 20); // Adjusted position for alignment
      }
    }
  }, [name]);

  return (
    <Flex 
      h="calc(100vh - 68px)" 
      flexDirection="column" 
      justifyContent="space-between" 
      alignItems="center"
    >
      <VStack 
        flex="1" 
        spacing={0} 
        w="full" 
        alignItems="center" 
        justifyContent="center"
      >
        <Image 
          src="/image/nfiti/name/01_NAMING_PAGE_character.gif" 
          alt="캐릭터" 
          w="100%" 
          maxW="500px"
        />
        <Image 
          src="/image/nfiti/name/01_NAMING_PAGE_name.png" 
          alt="네임 배경" 
          w="100%" 
          maxW="500px"
        />

        <Box 
          position="relative" 
          w="100%" 
          maxW="400px" 
          h="200px" 
          mb={4}
        >
          <canvas
            ref={canvasRef} 
            width={400} 
            height={200} 
            style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              zIndex: 10 
            }} 
          />
          <Image 
            src="/image/nfiti/name/01_NAMING_PAGE_nametag.png" 
            alt="네임 태그" 
            w="100%" 
            position="absolute"
            top={0}
            left={0}
          />
        </Box>
        <Image 
          src="/image/nfiti/name/01_NAMING_PAGE_segeulja.png" 
          alt="세글자 이미지" 
          w="100%" 
          maxW="500px"
        />
      </VStack>
      <Box w="100%" px={4} py={6} bg="white" boxShadow="md">
        <Input
          placeholder="이름을 입력하세요"
          value={name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          maxLength={5}
          textAlign="center"
          fontSize="lg"
          w="100%"
          bg="gray.50"
          borderRadius="md"
          _focus={{ borderColor: "purple.600", bg: "white" }}
        />
        <Button mt={4} colorScheme="purple" w="100%" onClick={onSubmit}>
          저장
        </Button>
      </Box>
    </Flex>
  );
};

export default NameInput;