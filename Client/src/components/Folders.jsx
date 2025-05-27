import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  IconButton,
  useBreakpointValue,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import { TbPencilPlus } from "react-icons/tb";
const folders = [
  { title: "Movie Review", date: "12/12/2021", color: "blue.100" },
  { title: "Class Notes", date: "12/12/2021", color: "pink.100" },
  { title: "Book Lists", date: "12/12/2021", color: "yellow.100" },
];

const notes = [
  {
    title: "Mid test exam",
    date: "12/12/2021",
    time: "10:30 PM, Monday",
    content:
      "Ultrices viverra odio congue lecos felis, libero egestas nunc sagi are masa, elit ornare eget sem veib in ulum.",
    color: "yellow.200",
  },
  {
    title: "Mid test exam",
    date: "12/12/2021",
    time: "10:30 PM, Monday",
    content:
      "Ultrices viverra odio congue lecos felis, libero egestas nunc sagi are masa, elit ornare eget sem veib in ulum.",
    color: "pink.200",
  },
  {
    title: "Jonas's notes",
    date: "12/12/2021",
    time: "04:20 PM, Sunday",
    content:
      "Rokity viverra odio congue lecos felis, libero egestas nunc sagi are masa, elit ornare eget sem veib in ulum.",
    color: "blue.200",
  },
];

const Folders = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const [activeFolderTab, setActiveFolderTab] = useState("Todays");
  const [activeNoteTab, setActiveNoteTab] = useState("Todays");

  const renderFolderContent = () => {
    return (
      <SimpleGrid columns={columns} spacing={4} mt={4}>
        {folders.map((folder, index) => (
          <Box
            key={index}
            p={4}
            bg={folder.color}
            borderRadius="lg"
            position="relative"
          >
            <Text fontWeight="bold">{folder.title}</Text>
            <Text fontSize="sm" mt={2}>
              {folder.date}
            </Text>
            <IconButton
              icon={<FiMoreHorizontal />}
              size="sm"
              position="absolute"
              top={2}
              right={2}
              aria-label="More"
              variant="ghost"
            />
          </Box>
        ))}
        <Box
          border="2px dashed gray"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100px"
        >
          <Text color="gray.400">
            <TbPencilPlus /> New Folder
          </Text>
        </Box>
      </SimpleGrid>
    );
  };

  const renderNoteContent = () => {
    return (
      <SimpleGrid columns={columns} spacing={4} mt={4}>
        {notes.map((note, index) => (
          <Box
            key={index}
            p={4}
            bg={note.color}
            borderRadius="lg"
            position="relative"
          >
            <Text fontSize="sm">{note.date}</Text>
            <Text fontWeight="bold" mt={2}>
              {note.title}
            </Text>
            <Text fontSize="sm" mt={2}>
              {note.content}
            </Text>
            <Text fontSize="xs" mt={2}>
              {note.time}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    );
  };

  return (
    <Box p={6} bg="gray.50" minH="100vh">
      <Heading mb={4}>Recent Folders</Heading>

      <ButtonGroup mb={4}>
        {["Todays", "This Week", "This Month"].map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            fontWeight={activeFolderTab === tab ? "bold" : "normal"}
            borderBottom={activeFolderTab === tab ? "2px solid black" : "none"}
            onClick={() => setActiveFolderTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </ButtonGroup>

      {renderFolderContent()}

      <Heading mt={10} mb={4}>
        My Notes
      </Heading>

      <ButtonGroup mb={4}>
        {["Todays", "This Week", "This Month"].map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            fontWeight={activeNoteTab === tab ? "bold" : "normal"}
            borderBottom={activeNoteTab === tab ? "2px solid black" : "none"}
            onClick={() => setActiveNoteTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </ButtonGroup>

      {renderNoteContent()}
    </Box>
  );
};

export default Folders;
