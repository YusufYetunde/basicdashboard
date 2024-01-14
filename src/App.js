import { Box, Flex, Container, SimpleGrid, GridItem, Text, Stack } from "@chakra-ui/react";
import BigCard from "./components/Content/BigCard";
import Security from "./components/Content/Security";
import SmallCard from "./components/Content/SmallCard";
import Transactions from "./components/Content/Transactions";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Wallets from "./components/Wallets";

function App() {
  return (
    <Box>
      <Header />
      <Flex ml={{base: 1, md: 20}} mr={{ base: 1, md: 20}}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Container maxW="100%" ml={{ base: 2, md: 16 }} mr={{ base: 2, md: 10}}>
          <SimpleGrid columns={{ base: 1, md: 8 }} gap={6}>
            <GridItem colSpan={5} rowGap={8}>
            <Flex direction={{ base: "column", md: "row" }}> {/* firstbox */}
                <GridItem colSpan={{ base: 1, md: 7 }} mr={{ base: 0, md: 6 }}> 
                  {/* the card box */}
                  <BigCard />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 5 }}>
                  {/* fees column */}
                  <Flex direction="column" justify="space-between">
                    <Text fontWeight="semibold" fontSize="sm" textColor="gray" my={2}>
                      FEES
                    </Text>
                    <Stack>
                    <SmallCard value="0.069%" text="MAKER" />
                    <SmallCard value="0.069%" text="MAKER" />
                    </Stack>
                  </Flex>
                </GridItem>
              </Flex>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 3 }} flex={{ base: 1, md: 3 }}>
              {/* the wallet box */}
              <Wallets />
            </GridItem>

            <GridItem colSpan={5}>
              {/* transaction box */}
              <Transactions />
            </GridItem>
            <GridItem colSpan={3}>
              {/* security box */}
              <Security />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Flex>
    </Box>
  );
}

export default App;
