"use client";

import {
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

import LoginMockup from "../../public//MockupLogin.png";

const overviewList = [
  {
    id: 1,
    label: "Configure o empreendimento",
    subLabel: "Crie as plantas, importe os clientes, opções de acabamento e personalize o catálogo.",
  },
  {
    id: 2,
    label: "Compartilhe com o cliente",
    subLabel: "Envie o catálogo digital para o cliente personalizar o apartamento.",
  },
  {
    id: 3,
    label: "Aprove as escolhas",
    subLabel: "Acompanhe as escolhas do cliente e aprove as personalizações.",
  },
  {
    id: 4,
    label: "Assine o contrato",
    subLabel: "Gere o contrato de compra e venda e finalize a venda.",
  },
];

const HowItWorks = () => {
  return (
    <Container
      maxW="9xl"
      height={"100vh"}
      py={10}
      display={"flex"}
      gap={10}
      flexDir={"column"}
    >
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={6}>
        Como funciona?
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <VStack
          spacing={4}
          alignItems="flex-start"
          mb={{ base: 5, md: 0 }}
          maxW="md"
        >
          {overviewList.map((data) => (
            <Box key={data.id}>
              <HStack spacing={2}>
                <Flex
                  fontWeight="bold"
                  color="white"
                  bg="black"
                  rounded="full"
                  justifyContent="center"
                  alignItems="center"
                  w={7}
                  h={7}
                >
                  {data.id}
                </Flex>
                <Text fontSize="xl">{data.label}</Text>
              </HStack>
              <Text fontSize="md" color="gray.500" ml={12}>
                {data.subLabel}
              </Text>
            </Box>
          ))}
        </VStack>
        <Flex maxW={"700px"} maxH={"500px"}>
          <Image objectFit="scale-down" src={LoginMockup.src} rounded="lg" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default HowItWorks;
