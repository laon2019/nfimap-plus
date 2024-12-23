import React, { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import { bgColorState } from "../../Atom/bgColorState";
import { useRecoilValue } from "recoil";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const bg = useRecoilValue(bgColorState);
  return (
    <Box 
      height="100dvh"
      display="flex" 
      justifyContent="center" 
      backgroundColor={bg}
    >
      <Container 
        maxW="480px"
        height="100dvh"
        p={0}
        backgroundColor="white"
        boxShadow="lg"
      >
        <Header />
        <main style={{ minHeight: "calc(100dvh - 68px)"}}>{children}</main>
      </Container>
    </Box>
  );
};

export default Layout;
