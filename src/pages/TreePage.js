import React, { useState } from "react";
import Tree from "react-d3-tree";
import { Box } from "@chakra-ui/react";
import ADUModal from "../components/ADUModal";

function TreePage() {
  const [SCB, setSCB] = useState({
    name: "SCB",
    children: [{ name: "SCB1" }, { name: "SCB2" }],
  });

  const [node, setNode] = useState(undefined);
  const onClose = () => setNode(undefined);
  const handleSubmit = (name) => {
    setSCB({
      ...SCB,
      children: [...SCB.children, { name }],
    });
    onClose();
  };
  return (
    <Box h="100vh" w="100vw">
      <Tree
        data={SCB}
        onNodeClick={(datum) => setNode(datum)}
        translate={{ x: 200, y: 200 }}
      />
      <ADUModal
        isOpen={Boolean(node)}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}

export default TreePage;
