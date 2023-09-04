import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function ModeTabs({ mode, setMode }) {
  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => setMode("View")}>View</Tab>
        <Tab onClick={() => setMode("Add")}>Add</Tab>
        <Tab onClick={() => setMode("Update")}>Update</Tab>
        <Tab onClick={() => setMode("Delete")}>Delete</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>View Mode</p>
        </TabPanel>
        <TabPanel>
          <p>Add Mode</p>
        </TabPanel>
        <TabPanel>
          <p>Update Mode</p>
        </TabPanel>
        <TabPanel>
          <p>Delete Mode</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ModeTabs;
