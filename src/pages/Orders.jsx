// // src/pages/Orders.jsx
// import { Box } from "@chakra-ui/react";
// import OrdersTable from "../components/OrdersTable";

// const Orders = () => {
//   return (
//     <Box p="4">
//       <OrdersTable />
//     </Box>
//   );
// };

// export default Orders;
// src/pages/Orders.jsx
// src/pages/Orders.jsx
// src/pages/Orders.jsx
import React from "react";
import { Box, Button, Flex, Heading, HStack, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { AddIcon, DownloadIcon, SettingsIcon } from "@chakra-ui/icons";
import OrdersTable from "../components/OrdersTable";
import AddOrderModal from "../components/AddOrderModal";

const Orders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p="4">
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Heading as="h2" size="lg">Orders</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="green" onClick={onOpen}>
          Add Order
        </Button>
      </Flex>
      <HStack spacing="4" mb="4">
        <Button variant="solid" colorScheme="gray">All orders <Text as="span" ml="2" color="gray.500">(840)</Text></Button>
        <Button variant="outline" colorScheme="gray">Active orders <Text as="span" ml="2" color="gray.500">(68)</Text></Button>
        <Button variant="outline" colorScheme="gray">Pending orders <Text as="span" ml="2" color="gray.500">(18)</Text></Button>
        <Button variant="outline" colorScheme="gray">Cancelled orders <Text as="span" ml="2" color="gray.500">(08)</Text></Button>
        <IconButton icon={<DownloadIcon />} colorScheme="gray" variant="outline" aria-label="Export" />
        <IconButton icon={<SettingsIcon />} colorScheme="gray" variant="outline" aria-label="Filter" />
      </HStack>
      <OrdersTable />
      <AddOrderModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Orders;
