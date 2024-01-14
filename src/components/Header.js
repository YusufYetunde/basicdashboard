import { useState } from 'react';
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Spacer, HStack, Flex, Box, Text, VStack, Badge, Popover, PopoverTrigger, PopoverContent, PopoverArrow,
  PopoverCloseButton,
  PopoverHeader, 
  PopoverBody,
  PopoverFooter,
  Portal,
  IconButton,
  Input,
Menu,
MenuButton,
MenuList,
MenuItem } from "@chakra-ui/react";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import { IoMdArrowDropdown } from 'react-icons/io'

export default () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const onBellClick = () => {
    // Set the state to open/close the notification box
    setNotificationOpen(!isNotificationOpen);
  };

  const onSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleSearchInputChange = (event) => {
    console.log(event.target.value);
  };

  const closeSearchInput = () => {
    setSearchOpen(false);
  };

  const handleProfileMenuClick = (action) => {
    // Handle actions such as logout, etc.
    console.log(`Performing ${action}`);
  };

  //notifications data
  const notifications = [
    { id: 1, text: 'John Doe liked your post.', time: '2 hours ago' },
    { id: 2, text: 'Jane Doe commented on your photo.', time: '1 day ago' },
  ];

  return (
    <Box py={8} mx={{ base: 1, md: 20 }}>
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
          <Popover isOpen={isNotificationOpen} onClose={() => setNotificationOpen(false)}>
            <PopoverTrigger>
              <Box position="relative" cursor="pointer">
                <FiBell onClick={onBellClick} />
                {/* Badge for unread notifications */}
                <Badge
                  position="absolute"
                  top="-1"
                  right="-3"
                  fontSize="xs"
                  colorScheme="red"
                  borderRadius="full"
                  px="2"
                >
                  5 {/* Replace with the actual count of unread notifications */}
                </Badge>
              </Box>
            </PopoverTrigger>
            <Portal>
            <PopoverContent
              bg="white"
              boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
              borderRadius="md"
              borderWidth={0}
              p={4}
              w="300px"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="bold" mb={2}>
                Notifications
              </PopoverHeader>
              <PopoverBody>
                {/* Content of the notification dropdown */}
                <VStack align="start" spacing={2}>
                  {notifications.slice(0, 2).map((notification) => (
                    <Flex key={notification.id} align="center">
                      <Avatar size="sm" src="https://placekitten.com/40/40" mr={2} />
                      <VStack align="start">
                        <Text fontWeight="semibold">{notification.text}</Text>
                        <Text fontSize="sm" right="0" color="gray.500">{notification.time}</Text>
                      </VStack>
                    </Flex>
                  ))}
                  {/* Separator */}
                  <Box borderTop="1px solid" borderColor="gray.200" my={2} />
                  {/* See More link */}
                  <Text color="blue.500" fontWeight="bold" cursor="pointer">
                    See More
                  </Text>
                </VStack>
              </PopoverBody>
              <PopoverFooter>
                {/* Additional footer content if needed */}
              </PopoverFooter>
            </PopoverContent>
            </Portal>
          </Popover>
          <FiSettings />
          {/* Profile Avatar with Dropdown Menu */}
          <Menu>
            <MenuButton as={IconButton} icon={
            <Avatar size="sm" 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />} 
            variant="ghost">
              <IoMdArrowDropdown />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleProfileMenuClick('Profile')}>Profile</MenuItem>
              <MenuItem onClick={() => handleProfileMenuClick('Logout')}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
