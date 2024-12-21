import {
    Box,
    Text,
    Heading,
    Flex,
    Container,
    Badge,
    VStack,
    HStack,
    Image,
    useColorModeValue,
    chakra,
    shouldForwardProp,
  } from "@chakra-ui/react";
  import { motion, isValidMotionProp, Variants } from "framer-motion";
  import { 
    FaStar, 
    FaHeart, 
    FaHashtag,
    FaLightbulb
  } from "react-icons/fa";
  import React from "react";
  
  // Proper typing for motion components
  const ChakraBox = chakra(Box, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  
  interface TestResult {
    title: string;
    imageUrl: string;
    details: {
      reason: string;
      reasonText: string;
      keyPoints: {
        title: string;
        description: string[];
      };
      dayPlan: {
        title: string;
        description: {
          title: string;
          content: string;
        }[];
      };
      hashtags: string;
    };
  }
  
  interface ResultDisplayProps {
    testResult: TestResult;
  }
  
  const ResultDisplay: React.FC<ResultDisplayProps> = ({ testResult }) => {
    const cardBg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const headingColor = useColorModeValue("blue.600", "blue.300");
    const hashtagBg = useColorModeValue("purple.50", "purple.900");
    const keyPointsBg = useColorModeValue("rgba(251, 211, 141, 0.1)", "rgba(66, 30, 0, 0.9)");
    const keyPointsItemBg = useColorModeValue("white", "orange.800");
    const dayPlanBg = useColorModeValue("rgba(154, 230, 180, 0.1)", "rgba(0, 66, 37, 0.9)");
    const dayPlanItemBg = useColorModeValue("white", "green.800");
  
    // Animation variants
    const containerVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, staggerChildren: 0.1 }
      },
    };
  
    const itemVariants: Variants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    };
  
    return (
      <Container maxW="4xl" py={10}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Section */}
          <VStack spacing={6} mb={10}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                size="2xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                textAlign="center"
                mb={4}
              >
                {testResult.title}
              </Heading>
            </motion.div>
  
            <Box position="relative">
              <Image
                src={testResult.imageUrl}
                alt={testResult.title}
                boxSize="200px"
                objectFit="cover"
                borderRadius="full"
                border="4px solid"
                borderColor="purple.200"
                shadow="2xl"
              />
              <Badge
                position="absolute"
                bottom="-2"
                left="50%"
                transform="translateX(-50%)"
                px={4}
                py={2}
                borderRadius="full"
                bg="white"
                color="purple.500"
                fontSize="md"
                fontWeight="bold"
                shadow="md"
              >
                N.Fia Type
              </Badge>
            </Box>
          </VStack>
  
          {/* Hashtags Section */}
          <Flex wrap="wrap" justify="center" gap={3} mb={8}>
            {testResult.details.hashtags.split(",").map((tag, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <HStack
                  bg={hashtagBg}
                  px={4}
                  py={2}
                  borderRadius="full"
                  shadow="sm"
                >
                  <Text fontSize="sm" fontWeight="medium">
                    {tag.trim()}
                  </Text>
                </HStack>
              </motion.div>
            ))}
          </Flex>
  
          {/* Reason Section */}
          <motion.div
            variants={itemVariants}
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              marginBottom: "2rem",
              background: cardBg
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <VStack spacing={4}>
              <Heading size="lg" color={headingColor}>
                <HStack spacing={2}>
                  <Text fontSize="xl">{testResult.details.reason}</Text>
                </HStack>
              </Heading>
              <Text fontSize="lg" textAlign="center" color={textColor}>
                {testResult.details.reasonText}
              </Text>
            </VStack>
          </motion.div>
  
          {/* Key Points Section */}
          <motion.div
            variants={itemVariants}
            style={{
              background: keyPointsBg,
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              marginBottom: "2rem"
            }}
          >
            <VStack spacing={6}>
              <Heading size="md" color="orange.500">
                {testResult.details.keyPoints.title}
              </Heading>
              <VStack spacing={4} align="stretch" width="100%">
                {testResult.details.keyPoints.description.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HStack
                      bg={keyPointsItemBg}
                      p={4}
                      borderRadius="xl"
                      shadow="md"
                    >
                      <Text color={textColor}>{point}</Text>
                    </HStack>
                  </motion.div>
                ))}
              </VStack>
            </VStack>
          </motion.div>
  
          {/* Day Plan Section */}
          <motion.div
            variants={itemVariants}
            style={{
              background: dayPlanBg,
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <VStack spacing={6}>
              <Heading
                size="md"
                color="green.600"
                textAlign="center"
                whiteSpace="pre-line"
              >
                {testResult.details.dayPlan.title}
              </Heading>
              <VStack spacing={4} align="stretch" width="100%">
                {testResult.details.dayPlan.description.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      bg={dayPlanItemBg}
                      p={6}
                      borderRadius="xl"
                      shadow="md"
                    >
                      <HStack spacing={3} mb={3}>
                        <FaStar />
                        <Heading size="md" color="green.600">
                          {plan.title}
                        </Heading>
                      </HStack>
                      <Text color={textColor} whiteSpace="pre-line">
                        {plan.content}
                      </Text>
                    </Box>
                  </motion.div>
                ))}
              </VStack>
            </VStack>
          </motion.div>
        </motion.div>
      </Container>
    );
  };
  
  export default ResultDisplay;