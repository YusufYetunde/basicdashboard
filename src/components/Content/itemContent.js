import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";
import React from "react";

export function ItemContent(props) {
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <>
      <Flex
        justify='center'
        align='center'
        borderRadius='16px'
        minH={{ base: "60px", md: "70px" }}
        h={{ base: "60px", md: "70px" }}
        minW={{ base: "60px", md: "70px" }}
        w={{ base: "60px", md: "70px" }}
        me='14px'
        bg='linear-gradient(135deg, #FFECE8 0%, #FE8F7B 100%)'>
        <Icon as={FaBitcoin} color='white' w={8} h={14} />
      </Flex>
      <Flex flexDirection='column'>
        <Text
          mb='5px'
          fontWeight='bold'
          color={textColor}
          fontSize={{ base: "md", md: "md" }}>
          New Update: {props.info}
        </Text>
        <Flex alignItems='center'>
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight='100%'
            color={textColor}>
            Dashboard Chakra UI design!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
