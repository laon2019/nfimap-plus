import { Flex, Image, Box } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box p={4}>
      <Image 
        src="/image/NFITI.png" 
        alt='결과'
        width="100%"
        objectFit="contain"
      />
      <Flex 
        w="100%" 
        justifyContent="space-between" 
        alignItems="center"
        mt={4}
        px={4}
      >
        <Image 
          src="/image/Final_UI_save.svg" 
          alt='저장'
          w="45%"
          h="auto"
          cursor="pointer"
        />
        <Image 
          src="/image/Final_UI_share.svg" 
          alt='공유'
          w="45%"
          h="auto" 
          cursor="pointer"
        />
      </Flex>
    </Box>
  )
}

export default Home
