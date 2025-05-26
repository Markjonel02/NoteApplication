import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box>
        <Avatar.Root>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </Box>
    </>
  );
}

export default App;
