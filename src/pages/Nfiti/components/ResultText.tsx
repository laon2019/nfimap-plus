import {
    Badge,
    Box,
    Flex,
    Heading,
    List,
    ListItem,
    Text,
    chakra,
    Divider,
    shouldForwardProp,
  } from "@chakra-ui/react";
  import { isValidMotionProp, motion } from "framer-motion";
  import React from "react";
  
  interface TestResultDetails {
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
  }
  
  interface TestResult {
    title: string;
    imageUrl: string;
    details: TestResultDetails;
  }
  interface ResultTextProps {
    testResult: TestResult | null | undefined;
  }
  
  const MotionBox = motion(
    chakra(Box, {
      shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
    }) as any
  );
  
  const MotionListItem = motion(
    chakra(ListItem, {
      shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
    }) as any
  );
  
  const ResultText = ({ testResult }: ResultTextProps) => {
    const listItemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    };
  
    return (
      <>
        {/* Result Title */}
        <Heading
          size="xl"
          textAlign="center"
          color="blue.700"
          mb={4}
          fontWeight="bold"
          letterSpacing="tight"
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
        >
          {testResult?.title}
        </Heading>
  
        {/* Hashtags */}
        <Flex
          wrap="wrap"
          justifyContent="center"
          gap={2}
          p={4}
          bg="blue.100"
          borderRadius="xl"
          boxShadow="sm"
        >
          {testResult?.details.hashtags.split(",").map((tag, idx) => (
            <Badge
              key={idx}
              bg="none"
              fontSize="12px"
              px={3}
              py={1}
              borderRadius="md"
              textTransform="capitalize"
            >
              {tag.trim()}
            </Badge>
          ))}
        </Flex>
  
        {/* Reason Section */}
        <MotionBox
          bg="blue.50"
          p={6}
          borderRadius="xl"
          boxShadow="lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text
            fontWeight="bold"
            fontSize="lg"
            color="blue.700"
            mb={3}
            textTransform="uppercase"
            textAlign="center"
          >
            {testResult?.details.reason}
          </Text>
          <Text color="gray.600" lineHeight="tall" fontSize="md" textAlign="center">
            {testResult?.details.reasonText}
          </Text>
        </MotionBox>
  
        {/* Key Points */}
        <MotionBox
          bg="orange.50"
          p={6}
          borderRadius="xl"
          boxShadow="lg"
          mt={6}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            size="lg"
            mb={4}
            color="orange.600"
            textAlign="center"
            bgGradient="linear(to-r, orange.400, red.300)"
            bgClip="text"
          >
            🔥 Key Points 🔥
          </Heading>
          <Heading size="md" mb={4} color="orange.600" textAlign="center">
            {testResult?.details.keyPoints.title}
          </Heading>
          <List spacing={4}>
            {testResult?.details.keyPoints.description.map(
              (desc: string, idx: number) => (
                <MotionListItem
                  key={idx}
                  color="gray.700"
                  fontSize="md"
                  display="flex"
                  alignItems="center"
                  initial="hidden"
                  animate="visible"
                  variants={listItemVariants}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Text fontSize="lg" color="orange.400" mr={3}>
                    💡
                  </Text>
                  {desc}
                </MotionListItem>
              )
            )}
          </List>
        </MotionBox>
  
        {/* Day Plan */}
        <MotionBox
          bg="green.50"
          p={6}
          borderRadius="xl"
          boxShadow="lg"
          mt={6}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading size="md" mb={4} color="green.600" textAlign="center">
            {testResult?.details.dayPlan.title}
          </Heading>
          <List spacing={6}>
            {testResult?.details.dayPlan.description.map(
              (desc, idx) => (
                <MotionListItem
                  key={idx}
                  color="gray.700"
                  fontSize="md"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  initial="hidden"
                  animate="visible"
                  variants={listItemVariants}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Text fontWeight="bold" color="green.700" mb={1}>
                    🌟 {desc.title}
                  </Text>
                  <Text>{desc.content}</Text>
                </MotionListItem>
              )
            )}
          </List>
        </MotionBox>
      </>
    );
  };
  
  export default ResultText;
  