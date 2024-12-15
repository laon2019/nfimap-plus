import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
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
    description: string[];
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

const ResultText = ({ testResult }: ResultTextProps) => {
  return (
    <>
      {/* Result Title */}
      <Heading
        size="xl"
        textAlign="center"
        color="blue.600"
        mb={4}
        fontWeight="bold"
        letterSpacing="tight"
      >
        {testResult?.title}
      </Heading>

      <Divider border="2px" borderColor="blue.200" />

      {/* Reason Section */}
      <Box bg="white" p={6} borderRadius="xl" boxShadow="md" textAlign="center">
        <Text fontWeight="bold" fontSize="lg" color="blue.700" mb={3}>
          {testResult?.details.reason}
        </Text>
        <Text color="gray.600" lineHeight="tall">
          {testResult?.details.reasonText}
        </Text>
      </Box>

      {/* Key Points */}
      <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
        <Heading size="xl" mb={4} color="blue.600" textAlign="center">
          🔥비장의 무기🔥
        </Heading>
        <Heading size="md" mb={4} color="blue.600" textAlign="center">
          {testResult?.details.keyPoints.title}
        </Heading>
        <List spacing={3}>
          {testResult?.details.keyPoints.description.map(
            (desc: string, idx: number) => (
              <ListItem
                key={idx}
                color="gray.700"
                fontSize="md"
                display="flex"
                alignItems="center"
              >
                <Text fontSize="8px" mr={2}>
                  ●
                </Text>

                {desc}
              </ListItem>
            )
          )}
        </List>
      </Box>

      {/* Day Plan */}
      <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
        <Heading size="md" mb={4} color="blue.600" textAlign="center">
          {testResult?.details.dayPlan.title}
        </Heading>
        <List spacing={3}>
          {testResult?.details.dayPlan.description.map(
            (desc: string, idx: number) => (
              <ListItem
                key={idx}
                color="gray.700"
                fontSize="md"
                display="flex"
                alignItems="center"
              >
                <Text fontSize="8px" mr={2}>
                  ●
                </Text>
                {desc}
              </ListItem>
            )
          )}
        </List>
      </Box>
      <Flex
        wrap="wrap"
        justifyContent="center"
        gap={2}
        p={4}
        bg="blue.50"
        borderRadius="xl"
      >
        {testResult?.details.hashtags.split(",").map((tag, idx) => (
          <Badge key={idx} colorScheme="blue" variant="outline">
            {tag.trim()}
          </Badge>
        ))}
      </Flex>
    </>
  );
};

export default ResultText;
