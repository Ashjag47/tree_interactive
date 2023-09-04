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
} from "@chakra-ui/react";

function ADUModal({ isOpen, onClose, onSubmit, mode }) {
  const [name, setName] = useState("");
  let header, button;
  switch (mode) {
    case "Add":
      header = "Add a Node";
      button = "Add";
      break;
    case "Update":
      header = "Update a Node";
      button = "Update";
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
            <Input
              placeholder="Node Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
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
