import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

function ADUModal({ isOpen, onClose, onSubmit, mode, node }) {
  const [name, setName] = useState("");
  let header, button, color;
  switch (mode) {
    case "Add":
      header = "Add a Node";
      button = "Add";
      color = "green";
      break;
    case "Update":
      header = "Update a Node";
      button = "Update";
      color = "yellow";
      break;
    case "Delete":
      header = "Delete a Node";
      button = "Delete";
      color = "red";
      break;
    default:
      header = "View a Node";
      button = "View";
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader> {header}</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <FormControl>
            <FormLabel>Node Name</FormLabel>
            {mode !== "Delete" ? (
              <Input
                placeholder="Node Name"
                value={
                  name === "" && mode === "Update" ? node?.data?.name : name
                }
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <Box
                mt="2"
                fontWeight="semibold"
                bg="gray.200"
                color="black"
                px={3}
                h={8}
              >
                {node?.data?.name}
              </Box>
            )}
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme={color}
            disabled={!name}
            onClick={() => {
              onSubmit(name);
              setName("");
            }}
          >
            {button}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ADUModal;
