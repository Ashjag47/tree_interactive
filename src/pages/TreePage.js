import React, { useState } from "react";
import Tree from "react-d3-tree";
import { Box } from "@chakra-ui/react";
import ADUModal from "../components/ADUModal";
import BFS from "../utils/BFS";
import { v4 as uuidv4 } from "uuid";
import "./TreePage.css";
import ModeTabs from "../components/ModeTabs";

function TreePage() {
  const [SCB, setSCB] = useState({
    name: "SCB",
    attributes: {
      id: uuidv4(),
    },
    children: [],
  });

  const [mode, setMode] = useState("View");

  const [isOpen, setIsOpen] = useState(false);

  const [node, setNode] = useState(undefined);
  const onClose = () => setIsOpen(false);
  const handleSubmit = (name) => {
    const newTree = BFS(node.data.attributes.id, SCB, name, mode);
    if (newTree) setSCB(newTree);
    onClose();
  };
  return (
    <Box h="100vh" w="100vw">
      <ModeTabs mode={mode} setMode={setMode} />
      <Tree
        data={SCB}
        onNodeClick={(datum) => {
          if (mode === "View") setNode(datum);
          else if (mode === "Add" || mode === "Update") {
            setNode(datum);
            setIsOpen(true);
          }
        }}
        translate={{ x: 200, y: 200 }}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
      <ADUModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        mode={mode}
      />
    </Box>
  );
}

export default TreePage;
