import { Text, Spacer, Stack, Heading, Flex, Box } from "@chakra-ui/layout";
import { BiBitcoin } from "react-icons/bi";
import { FaViacoin } from "react-icons/fa6";
import { ImCoinYen } from "react-icons/im";
import { FaLitecoinSign } from "react-icons/fa6";

const Wallets = () => {
  const Wallet = ({
    icon,
    title,
    subtitle,
    percent,
    change,
    loss,
    color1,
    color2,
  }) => (
    <Box>
      <Flex alignItems="center">
        <Box
          borderRadius="lg"
          fontSize="xl"
          p={3}
          bg={color1}
          textColor={color2}
        >
          {icon}
        </Box>
        <Box ml={2}>
          <Heading fontSize="md">{title}</Heading>
          <Text fontSize="xs" mt={1}>
            {subtitle}
          </Text>
        </Box>
        <Spacer />
        <Box textAlign="right">
          <Text fontSize="16" fontWeight="semibold">
            {percent}
          </Text>
          <Text
            fontSize="12"
            textColor={loss ? "red" : "black"}
            fontWeight="thin"
          >
            {change}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box ml={6} mr={4}>
      <Flex mb={4} textColor="gray.400" fontSize="sm">
        <Text>WALLETS</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          VIEW ALL
        </Text>
      </Flex>
      <Stack>
        <Wallet
          title="BTC"
          subtitle="Bitcoin"
          icon={<FaViacoin />}
          percent="37%"
          change="-2.5%"
          loss
          color1="#FFECE8"
          color2="#FE8F7B"
        />
        <Wallet
          title="DAI"
          subtitle="Dai"
          icon={<ImCoinYen />}
          percent="23%"
          change="+2.5%"
          color1="#FCF6DD"
          color2="#EDCC48"
        />
        <Wallet
          title="XRP"
          subtitle="Ripple"
          icon={<FaLitecoinSign />}
          percent="20%"
          change="-3.5%"
          loss
          color1="#E0F4F8"
          color2="#43B8D5"
        />
        <Wallet
          title="USDT"
          subtitle="Tether"
          icon={<BiBitcoin />}
          percent="17%"
          change="+2.5%"
          color1="#E0F8F2"
          color2="#4BD7B1"
        />
      </Stack>
    </Box>
  );
};

export default Wallets;