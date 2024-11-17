import { Flex, Image, Box } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  const handleSaveClick = () => {
    alert('이미지가 저장되었습니다.')
  }

  const handleShareClick = () => {
    alert('이미지가 공유되었습니다.')
  }

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
          onClick={handleSaveClick}
        />
        <Image 
          src="/image/Final_UI_share.svg" 
          alt='공유'
          w="45%"
          h="auto" 
          cursor="pointer"
          onClick={handleShareClick}
        />
      </Flex>
    </Box>
  )
}

export default Home
