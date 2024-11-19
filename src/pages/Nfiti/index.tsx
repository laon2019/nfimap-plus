import React from 'react'
import { Box, Button, Image } from '@chakra-ui/react'

const Nfiti = () => {
  return (
    <Box position="relative">
      <Image
        src="/image/nfiti.png"
        alt="NFITI 메인 이미지"
        width="100%"
        height="calc(100vh - 68px)"
        objectFit="cover"
      />
      <Box
        position="absolute"
        bottom="40px"
        left="50%"
        transform="translateX(-50%)"
        width="80%"
      >
        <Button
          width="100%"
          colorScheme="blue"
          size="lg"
          borderRadius="full"
        >
          테스트 시작하기
        </Button>
      </Box>
    </Box>
  )
}

export default Nfiti
