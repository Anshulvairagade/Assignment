import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import DonutChart from "react-donut-chart";
const CompanyDetailsPage = () => {
  return (
    <Flex
      flexDirection="column"
      style={{
        backgroundColor: "#eeedf2",
        width: "84vw",
        height: "88vh",
      }}
    >
      <Flex justifyContent="space-between" w="100%" p="2rem">
        <Box
          mt={2}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flexStart"
          w="16vw"
          style={{ borderRadius: "10px", padding: "16px" }}
        >
          <Box display="flex">
            <Text fontSize="1.2rem">Saving</Text>
            <Text
              style={{
                backgroundColor: "#79e896",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}
            >
              10%
            </Text>
          </Box>
          <Box fontSize="2rem" fontWeight="bold">
            856
          </Box>
          <Box color="gray.500"> Employee</Box>
        </Box>
        <Box
          mt={2}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flexStart"
          w="16vw"
          style={{ borderRadius: "10px", padding: "16px" }}
        >
          <Box display="flex">
            <Text fontSize="1rem">Total Customers</Text>
            <Text
              style={{
                backgroundColor: "#79e896",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}
            >
              10%
            </Text>
          </Box>
          <Box fontSize="2rem" fontWeight="bold">
            856
          </Box>
          <Box color="gray.500"> Employee</Box>
        </Box>
        <Box
          mt={2}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flexStart"
          w="16vw"
          style={{ borderRadius: "10px", padding: "16px" }}
        >
          <Box display="flex">
            <Text fontSize="1rem">Total Customers</Text>
            <Text
              style={{
                backgroundColor: "#79e896",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}
            >
              10%
            </Text>
          </Box>
          <Box fontSize="2rem" fontWeight="bold">
            856
          </Box>
          <Box color="gray.500"> Employee</Box>
        </Box>
        <Box
          mt={2}
          bg="white"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flexStart"
          w="16vw"
          style={{ borderRadius: "10px", padding: "16px" }}
        >
          <Box display="flex">
            <Text fontSize="1rem">Total Customers</Text>
            <Text
              style={{
                backgroundColor: "#79e896",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}
            >
              10%
            </Text>
          </Box>
          <Box fontSize="2rem" fontWeight="bold">
            856
          </Box>
          <Box color="gray.500"> Employee</Box>
        </Box>
      </Flex>
      <Flex gap={2}>
        <Flex
          //   border="2px solid red"
          m="1.6rem"
          bg="white"
          w="45vw"
          flexDirection="column"
          p="2"
          border="2px solid #bec2bf"
        >
          <Flex justifyContent="space-between">
            <Text fontWeight="bold" fontSize="1.2rem">
              Employee Status
            </Text>
            <Button>Filter & Sort</Button>
          </Flex>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Employee Name</Th>
                  <Th>Department</Th>
                  <Th isNumeric>Age</Th>
                  <Th isNumeric>Discipline</Th>
                  <Th isNumeric>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Justin</Td>
                  <Td>Marketing </Td>
                  <Td isNumeric>25</Td>
                  <Td isNumeric>+100%</Td>
                  <Td isNumeric><Text style={{
                backgroundColor: "#79e896",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}>Permanent</Text></Td>
                </Tr>
                <Tr>
                  <Td>Marcus</Td>
                  <Td>finance </Td>
                  <Td isNumeric>30</Td>
                  <Td isNumeric>+90%</Td>
                  <Td isNumeric ><Text style={{
                backgroundColor: "#dedbd3",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}>Contract</Text></Td>
                </Tr>
                <Tr>
                  <Td>Leo Stanton</Td>
                  <Td>R & D </Td>
                  <Td isNumeric>40</Td>
                  <Td isNumeric>+80%</Td>
                  <Td isNumeric><Text style={{
                backgroundColor: "#79e896",
                color: "#27b84c",
                borderRadius: "8px",
                marginLeft: "20px",
                padding: "2px 16px",
              }}>Permanent</Text></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Flex
          m="2rem"
          bg="white"
          p="4"
          border="2px solid #bec2bf"
          flexDirection="column"
          gap="4"
          w="25vw"
        >
          <Box>
            <Text fontWeight="bold" fontSize="20px">
              Employee Composition
            </Text>
          </Box>
          <Box>
            <DonutChart
              height="200"
              width="300"
              data={[
                {
                  label: "Male",
                  value: 25,
                },
                {
                  label: "Female",
                  value: 75,
                  //   isEmpty: true,
                },
              ]}
            />
            <Text m="auto" w="10vw" color="gray.600">856 Total Employee</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyDetailsPage;
