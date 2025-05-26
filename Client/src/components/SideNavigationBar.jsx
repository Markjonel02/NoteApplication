import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  IconButton,
  Text,
  Button,
  Image,
  Circle,
  Spacer,
} from "@chakra-ui/react";
import {
  FaCalendarAlt,
  FaArchive,
  FaTrash,
  FaPlus,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box
      w={collapsed ? "60px" : "220px"}
      bg="white"
      borderRight="1px solid #e2e8f0"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      transition="width 0.3s ease"
      position="relative"
    >
      <VStack align="stretch" spacing={6} p={4}>
        {/* Logo */}
        <HStack justify="space-between">
          {!collapsed && (
            <HStack spacing={2}>
              <Image boxSize="20px" src="/logo.png" alt="Logo" />
              <Text fontWeight="bold" color="blue.700">
                MINO
              </Text>
            </HStack>
          )}
        </HStack>

        {/* Add new section */}
        <VStack align="start" spacing={2}>
          <HStack spacing={2}>
            <FaPlus />
            {!collapsed && <Text fontWeight="medium">Add new</Text>}
          </HStack>
          <HStack spacing={2}>
            <Circle size="10px" bg="yellow.200" />
            <Circle size="10px" bg="blue.400" />
            <Circle size="10px" bg="red.500" />
          </HStack>
        </VStack>

        {/* Navigation Items */}
        <VStack align="start" spacing={4} color="gray.400">
          <HStack spacing={2}>
            <FaCalendarAlt />
            {!collapsed && <Text>Calander</Text>}
          </HStack>
          <HStack spacing={2}>
            <FaArchive />
            {!collapsed && <Text>Archive</Text>}
          </HStack>
          <HStack spacing={2}>
            <FaTrash />
            {!collapsed && <Text>Trash</Text>}
          </HStack>
        </VStack>
      </VStack>

      {/* Upgrade & Toggle Section */}
      <Box p={4} textAlign="center">
        {!collapsed && (
          <>
            <Text fontSize="xs" color="gray.500" mb={2}>
              Want to access unlimited notes taking experience & lots of
              feature?
            </Text>
            <Image
              src="/illustration.png"
              alt="Promo Illustration"
              boxSize="100px"
              mx="auto"
              mb={2}
            />
            <Button size="sm" colorScheme="blue" width="100%" mb={4}>
              Upgrade pro
            </Button>
          </>
        )}

        {/* Collapse/Expand Button */}
        <IconButton
          icon={
            collapsed ? (
              <MdOutlineKeyboardArrowRight />
            ) : (
              <MdOutlineKeyboardArrowLeft />
            )
          }
          size="sm"
          variant="outline"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
          mx="auto"
          display="block"
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
