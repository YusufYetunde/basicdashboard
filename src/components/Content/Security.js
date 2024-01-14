import { Text ,Stack, Heading, Spacer, Flex, Box} from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";

const Security = () => {
  const Item = ({ title, subtitle, enabled }) => (
    <Flex p={4} borderWidth="1px" borderRadius="lg" alignItems="center">
      <Box textColor="gray">
        <Heading size="sm" fontWeight="semibold">
          {title}
        </Heading>
        <Text fontSize="xs">{subtitle}</Text>
      </Box>
      <Spacer />
      <Switch colorScheme="orange" defaultChecked={enabled} />
    </Flex>
  );

  return (
    <Box w="80%" float="right" mr={4}>
      <Flex fontWeight="semibold" fontSize="sm" textColor="gray.400">
        <Text>SECURITY</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          VIEW ALL
        </Text>
      </Flex>
      <Stack mt={4}>
        <Item title="Identify" subtitle="Disable" />
        <Item title="Phone" subtitle="Enable" enabled />
      </Stack>
    </Box>
  );
};
export default Security;