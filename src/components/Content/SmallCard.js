import { Text, Heading, Box } from "@chakra-ui/layout";

const SmallCard = ({ value, text }) => {
  return (
    <Box p={6} bg="#DBE3E5" borderRadius="3xl">
      <Heading fontWeight="light" fontSize="2xl">
        {value}
      </Heading>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};
export default SmallCard;