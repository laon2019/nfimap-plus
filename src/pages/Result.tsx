import { Flex, Image, Box, Input, Button, Spinner } from '@chakra-ui/react'
import React, { useState, useRef, useEffect } from 'react'

const Result = () => {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleGenerateClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setImageLoaded(true)
    }, 2000)
  }

  useEffect(() => {
    if (imageLoaded && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = new window.Image()
      
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        
        if (ctx) {
          ctx.font = 'bold 100px Arial'
          ctx.fillStyle = 'black'
          ctx.textAlign = 'center'
          ctx.fillText(text, canvas.width/2, canvas.height/9)
        }
      }
      
      img.src = '/image/NFITI.png'
    }
  }, [imageLoaded, text])

  const handleSaveClick = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          const url = window.URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'NFITI-result.png'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
        }
      }, 'image/png')
    }
  }

  const handleShareClick = () => {
    alert('이미지가 공유되었습니다.')
  }

  return (
    <Box p={4}>
      <Flex direction="column" gap={4}>
        <Input
          placeholder="텍스트를 입력하세요"
          value={text}
          onChange={handleTextChange}
        />
        <Button
          onClick={handleGenerateClick}
          isDisabled={!text}
        >
          이미지 생성하기
        </Button>

        {isLoading ? (
          <Flex justify="center" p={8}>
            <Spinner size="xl" />
          </Flex>
        ) : imageLoaded ? (
          <canvas
            ref={canvasRef}
            style={{width: '100%', height: 'auto'}}
          />
        ) : null}

        {imageLoaded && (
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
        )}
      </Flex>
    </Box>
  )
}

export default Result
