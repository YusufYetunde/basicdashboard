import { useState } from 'react';
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Spacer,
  HStack,
  Flex,
  Box,
  Text,
  Badge,
  Icon,
  IconButton,
  Input,
Menu,
MenuButton,
MenuList,
MenuItem,
useColorModeValue } from "@chakra-ui/react";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import { ItemContent } from './Content/itemContent';

export default () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const onSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (event) => {
    console.log(event.target.value);
  };

  const closeSearchInput = () => {
    setSearchOpen(false);
  };

  const shadow = useColorModeValue(
		'14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
		'14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
	);


  return (
    <Box py={8} ml={{ base: 1, md: 20 }} mr={{base: 1, md: 40 }}>
      <Flex>
        <Image src="/assets/logo.png" w={16} />
        <Spacer />
        <HStack fontSize="xl" spacing="4">
          {/* Search Button */}
          <IconButton
            icon={<FiSearch />}
            onClick={onSearchClick}
            aria-label="Search"
            variant="ghost"
          />
          {/* Search Input */}
          {isSearchOpen && (
            <Input
              placeholder="Search..."
              size="sm"
              borderRadius="full"
              onBlur={closeSearchInput}
              onChange={handleSearchInputChange}
              autoFocus
            />
          )}
          {/* Notification Bell */}
          <Menu>
				<MenuButton p="0px">
          <Box position="relative" cursor="pointer">
          <Icon mt="6px" as={FiBell} color="gray-300" w="18px" h="18px" me="10px"
          />
          <Badge
          position="absolute"
          top="-1"
          right="-1"
          fontSize="xs"
          colorScheme="red"
          borderRadius="full"
          px="2"
          >
          5 
          </Badge>
          </Box>
				</MenuButton>
				<MenuList
					boxShadow="md"
					p="20px"
					borderRadius="20px"
					bg="white"
					border="none"
					mt="22px"
					me={{ base: '30px', md: 'unset' }}
					minW={{ base: 'unset', md: '400px', xl: '450px' }}
					maxW={{ base: '360px', md: 'unset' }}>
					<Flex jusitfy="space-between" w="100%" mb="20px">
						<Text fontSize="md" fontWeight="600" color="gray.700">
							Notifications
						</Text>
						<Text fontSize="sm" fontWeight="500" color="gray.700" ms="auto" cursor="pointer">
							Mark all read
						</Text>
					</Flex>
					<Flex flexDirection="column">
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px="0" borderRadius="8px" mb="10px">
							<ItemContent info="Dashboard Trial" aName="John Doe" />
						</MenuItem>
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} px="0" borderRadius="8px" mb="10px">
							<ItemContent info="Chakra UI Design" aName="Mary Jane" />
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
          <FiSettings />
          {/* Profile Avatar with Dropdown Menu */}
          <Menu>
				<MenuButton p="0px">
					<Avatar
						_hover={{ cursor: 'pointer' }}
						color="white"
						name="jOHN doe"
						bg="#11047A"
						size="sm"
						w="40px"
						h="40px"
					/>
				</MenuButton>
				<MenuList boxShadow={shadow} p="0px" mt="10px" borderRadius="20px" bg="white" border="none">
					<Flex w="100%" mb="0px">
						<Text
							ps="20px"
							pt="16px"
							pb="10px"
							w="100%"
							borderBottom="1px solid"
							borderColor="#e6ecfa"
							fontSize="sm"
							fontWeight="700"
							color="gray.700">
							👋&nbsp; Holla, John
						</Text>
					</Flex>
					<Flex flexDirection="column" p="10px">
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} borderRadius="8px" px="14px">
							<Text fontSize="sm">Profile</Text>
						</MenuItem>
						<MenuItem _hover={{ bg: 'none' }} _focus={{ bg: 'none' }} borderRadius="8px" px="14px">
							<Text fontSize="sm">Newsletter</Text>
						</MenuItem>
						<MenuItem
							_hover={{ bg: 'none' }}
							_focus={{ bg: 'none' }}
							color="red.400"
							borderRadius="8px"
							px="14px">
							<Text fontSize="sm">Log out</Text>
						</MenuItem>
					</Flex>
				</MenuList>
			</Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
