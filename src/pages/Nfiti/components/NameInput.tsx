import React from "react";
import { VStack, Text, Input, Button } from "@chakra-ui/react";

interface NameInputProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName, onSubmit }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 2) {
      setName(e.target.value);
    }
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="lg">이름을 입력해주세요 (최대 2글자):</Text>
      <Input
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        maxLength={2}
      />
      <Button colorScheme="blue" onClick={onSubmit}>
        다음
      </Button>
    </VStack>
  );
};

export default NameInput;
