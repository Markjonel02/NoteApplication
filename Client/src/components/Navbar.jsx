import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FaRocket } from "react-icons/fa";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={4}
        bg="gray.800"
        color="white"
        boxShadow="md"
      >
        {/* Left side */}
        <Flex align="center" gap={2}>
          <IconButton
            icon={<HamburgerIcon />}
            variant="ghost"
            colorScheme="whiteAlpha"
            onClick={onOpen}
            aria-label="Open menu"
            display={{ base: "inline-flex", md: "none" }}
          />
          <Box as={FaRocket} w={5} h={5} color="cyan.400" />
          <Text fontWeight="bold">MyApp</Text>
        </Flex>

        {/* Center - Search */}
        <Box
          flex="1"
          mx={4}
          maxW="500px"
          display={{ base: "none", md: "block" }}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              bg="gray.700"
              border="none"
            />
          </InputGroup>
        </Box>

        {/* Right side - User */}
        <Flex align="center" gap={2}>
          <Text fontSize="sm" display={{ base: "none", md: "block" }}>
            John Doe
          </Text>
          <Avatar size="sm" name="John Doe" src="https://i.pravatar.cc/300" />
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <InputGroup mb={4}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search..."
                bg="gray.700"
                border="none"
              />
            </InputGroup>
            {/* Add mobile nav items here */}
            <Text>Home</Text>
            <Text>About</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
