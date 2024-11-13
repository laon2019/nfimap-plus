import React, { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      backgroundColor="gray.100"
    >
      <Container 
        maxW="480px"
        height="100%"
        p={0}
        backgroundColor="white"
        boxShadow="lg"
      >
        <Header />
        <main>{children}</main>
      </Container>
    </Box>
  );
};

export default Layout;
