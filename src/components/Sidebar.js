import { VStack, GridItem, Center, Box } from "@chakra-ui/layout";
import { RiHomeLine, RiPieChart2Fill, RiShareBoxFill } from "react-icons/ri";
import { IconButton } from "@chakra-ui/button";
import { FiPlus } from "react-icons/fi";

const Sidebar = () => {
  const Item = ({ icon, active }) => (
    <Box
      _hover={{ cursor: "pointer" }}
      p={4}
      borderRadius="md"
      bg={active ? "#FE8872" : "white"}
      textColor={active ? "white" : "gray"}
    >
      {icon}
    </Box>
  );
  return (
    <Box>
      <VStack>
        <Item active icon={<RiHomeLine />} />
        <Item icon={<RiShareBoxFill />} />
        <Item icon={<RiPieChart2Fill />} />
        
      </VStack>
      <GridItem colSpan={1}>
          <Center>
            <IconButton
              bg="#5C4E7A"
              textColor="white"
              position="fixed"
              bottom={12}
              size="lg"
              icon={<FiPlus />}
            />
          </Center>
        </GridItem>
    </Box>
  );
};

export default Sidebar;