// src/components/OrdersTable.jsx
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import mockData from "../mockData";

const OrdersTable = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Product Items</Th>
          <Th>Items No</Th>
          <Th>Incoming</Th>
          <Th>Category</Th>
          <Th>Date</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th>Paid</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {mockData.map((order, index) => (
          <Tr key={index}>
            <Td>{order.productItems}</Td>
            <Td>{order.itemsNo}</Td>
            <Td>{order.incoming}</Td>
            <Td>{order.category}</Td>
            <Td>{order.date}</Td>
            <Td>{order.quantity}</Td>
            <Td>{order.price}</Td>
            <Td>{order.paid ? "✓" : "✗"}</Td>
            <Td>
              <Button
                colorScheme={
                  order.action === "Cancelled"
                    ? "red"
                    : order.action === "Pending"
                    ? "yellow"
                    : "green"
                }
              >
                {order.action}
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default OrdersTable;
