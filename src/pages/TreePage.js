import React, { useState } from "react";
import Tree from "react-d3-tree";
import { Box } from "@chakra-ui/react";

function TreePage() {
  const [SCB, setSCB] = useState({
    name: "SCB",
    children: [{ name: "SCB1" }, { name: "SCB2" }],
  });
  return (
    <Box h="100vh" w="100vw">
      <Tree data={SCB} />
    </Box>
  );
}

export default TreePage;
