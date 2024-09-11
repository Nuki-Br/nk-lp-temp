"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Personalização de marca",
    text: "Incorpore sua marca nos e-mail e no catálogo digital. Adicione seu logo, cores e fontes.",
  },
  {
    id: 2,
    title: "Centralize seus empreendimentos",
    text: "Gerencie todos os seus empreendimentos em um só lugar.",
  },
  {
    id: 3,
    title: "Gerencie opções de acabamentos",
    text: "Adicione e gerencie as opções de acabamentos disponíveis para cada empreendimento.",
  },
  {
    id: 4,
    title: "Elimine os processos manuais",
    text: "Automatize a geração de catálogos e propostas, eliminando processos manuais e reduzindo erros.",
  },
];

export default function Features() {
  return (
    <Flex
      p={4}
      minH={"450px"}
      flexDir={"column"}
      align={"center"}
      justify={"center"}
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Sobre a plataforma</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          A Nuki é uma plataforma de personalização de apartamentos que ajuda
          construtoras a oferecerem a melhor experiência de compra e
          personalização de imóveis do mercado.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={FiCheck} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
