import React, { useState } from "react";
import Tree from "react-d3-tree";
import { Box } from "@chakra-ui/react";
import ADUModal from "../components/ADUModal";
import BFS from "../utils/BFS";
import { v4 as uuidv4 } from "uuid";
import "./TreePage.css";

function TreePage() {
  const [SCB, setSCB] = useState({
    name: "SCB",
    attributes: {
      id: uuidv4(),
    },
    children: [],
  });

  const [node, setNode] = useState(undefined);
  const onClose = () => setNode(undefined);
  const handleSubmit = (name) => {
    const newTree = BFS(node.data.attributes.id, SCB, name);
    if (newTree) setSCB(newTree);
    onClose();
  };
  return (
    <Box h="100vh" w="100vw">
      <Tree
        data={SCB}
        onNodeClick={(datum) => {
          setNode(datum);
        }}
        translate={{ x: 200, y: 200 }}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
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
