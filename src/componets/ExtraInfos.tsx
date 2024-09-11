import {
  Text,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
} from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="5xl" p="6">
      <Banner />
    </Container>
  );
};

const Banner = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={5}
      alignItems={{ base: "flex-start", md: "center" }}
      justifyContent="space-between"
      rounded="lg"
      boxShadow="sm"
      bg={"gray.50"}
      mb={10}
      p={{ base: 8, md: 16 }}
    >
      <Box>
        <Text fontSize="4xl" lineHeight={1.2} fontWeight="bold">
          Quer saber mais?
        </Text>
        <Text
          fontSize="lg"
          lineHeight={1.2}
          fontWeight="bold"
          color="gray.400"
          noOfLines={2}
          mt={2}
        >
         Solicite uma demonstração do nosso time comercial.
        </Text>
      </Box>
      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: "100%", sm: "auto" }}
      >
        <Button
          as={Link}
          href="#"
          color="white"
          variant="solid"
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          bg={"black"}
        >
          Solicitar demo
        </Button>
      </Stack>
    </Stack>
  );
};

export default Index;
