import React from "react";
import { VStack, Text, Input, Button } from "@chakra-ui/react";

interface NameInputProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName, onSubmit }) => {
  return (
    <VStack spacing={4}>
      <Text fontSize="lg">이름을 입력해주세요:</Text>
      <Input
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button colorScheme="blue" onClick={onSubmit}>
        다음
      </Button>
    </VStack>
  );
};

export default NameInput;
