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
  Icon,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, Variants } from "framer-motion";
import React from "react";
import { FaLightbulb, FaStar } from "react-icons/fa";

// Proper typing for motion components
const ChakraBox = chakra(Box, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
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
  const keyPointsBg = useColorModeValue(
    "rgba(251, 211, 141, 0.1)",
    "rgba(66, 30, 0, 0.9)"
  );
  const keyPointsItemBg = useColorModeValue("white", "orange.800");
  const dayPlanBg = useColorModeValue(
    "rgba(154, 230, 180, 0.1)",
    "rgba(0, 66, 37, 0.9)"
  );
  const dayPlanItemBg = useColorModeValue("white", "green.800");

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
                shadow="md"
              >
                <Text fontSize="sm" fontWeight="bold">
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
            padding: "1.5rem",
            borderRadius: "1.25rem", 
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            marginBottom: "1.5rem",
            background: cardBg,
            width: "100%"
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <VStack spacing={4}>
            <Heading size="md" color={headingColor}>
              <Text fontSize="xl" textAlign="center">{testResult.details.reason}</Text>
            </Heading>
            <Text 
              fontSize="md" 
              textAlign="center" 
              color={textColor} 
              lineHeight="1.6"
              px={2}
            >
              {testResult.details.reasonText}
            </Text>
          </VStack>
        </motion.div>

        {/* Key Points Section */}
        <motion.div
          variants={itemVariants}
          style={{
            background: keyPointsBg,
            padding: "1.5rem",
            borderRadius: "1.25rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            marginBottom: "1.5rem",
            width: "100%"
          }}
        >
          <VStack spacing={5}>
            <Heading size="md" color="orange.500" textAlign="center">
              {testResult.details.keyPoints.title}
            </Heading>
            <VStack spacing={3} align="stretch" width="100%">
              {testResult.details.keyPoints.description.map((point, idx) => (
                <Box 
                  key={idx} 
                  p={4} 
                  bg={keyPointsItemBg} 
                  borderRadius="lg" 
                  shadow="sm"
                >
                  <HStack spacing={3} alignItems="flex-start">
                    <Icon as={FaLightbulb} color="yellow.400" boxSize={4} mt={1} />
                    <Text color={textColor} fontSize="md">{point}</Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </VStack>
        </motion.div>

        {/* Day Plan Section */}
        <motion.div
          variants={itemVariants}
          style={{
            background: dayPlanBg,
            padding: "1.5rem",
            borderRadius: "1.25rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            width: "100%"
          }}
        >
          <VStack spacing={6}>
            <Heading
              size="md"
              color="green.600"
              textAlign="center"
              whiteSpace="pre-line"
              px={2}
            >
              {testResult.details.dayPlan.title}
            </Heading>
            <VStack align="stretch" width="100%" spacing={4}>
              {testResult.details.dayPlan.description.map((plan, idx) => (
                <Box 
                  key={idx} 
                  p={4} 
                  bg={dayPlanItemBg} 
                  borderRadius="lg" 
                  shadow="sm"
                >
                  <VStack align="stretch" spacing={2}>
                    <HStack spacing={3}>
                      <Icon as={FaStar} color="green.400" boxSize={4} />
                      <Heading size="sm" color="green.600">
                        {plan.title}
                      </Heading>
                    </HStack>
                    <Text 
                      color={textColor} 
                      whiteSpace="pre-line" 
                      fontSize="md" 
                      pl={7}
                    >
                      {plan.content}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </VStack>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ResultDisplay;
