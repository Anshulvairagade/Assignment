import React, { useEffect, useState } from "react";
import Logo from "../assets/HAN.png";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import '../App.css'
import CreatePage from "./CreatePage";
import DetailsPage from "./DetailsPage";
import CompanyDetailsPage from "./CompanyDetailsPage";
import { useStateValue } from "../context/StateProvider";

const HomePage = () => {
  const [isForm, setIsForm] = useState(false)
  const [isDashboard, setIsDashboard] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [{ compDetails }] = useStateValue();
  // console.log(companyDetails)
  useEffect(() => {
    if (compDetails?.companyName) {
      setIsDashboard(true)
      setIsLoading(false)
    } else {
      setIsDashboard(false)
      // setIsForm(false)
      setIsLoading(false)
    }
  }, [])
  return (
   (!isForm && !isDashboard && !isLoading) ?  <Flex
      flexDirection="column"
      p={4}
      style={{ backgroundColor: "#eeedf2", height: "88%" }}
    >
      <Box mt={10}>
              <NavLink
                 
          style={{
            backgroundColor: "#0b0252",
            padding: "20px 30px",
            color: "white",
            fontSize: "1.6rem",
              borderRadius: "10px",
            
          }}
          fontSize={"1.6rem"}
          fontWeight="normal"
          onClick={()=>setIsForm(true)}
        >
          {" "}
          Create Company
        </NavLink>
      </Box>
      <Box
        className="container"
        mt="24"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text fontSize="2rem" fontWeight="semibold">
          Companies
        </Text>
        <Flex justifyContent="space-between" padding="1rem 2rem">
          <Button
            mt={4}
            style={{
              backgroundColor: "#0b0252",
              padding: "20px 30px",
              color: "white",
              padding: "2rem",
            }}
            fontSize={"1.3rem"}
            fontWeight="normal"
          >
            {" "}
            <Image
              src={Logo}
              alt="Company Logo"
              boxSize="30px"
              borderRadius="full"
            />
            DSA
          </Button>
          <Button
            mt={4}
            style={{
              backgroundColor: "#0b0252",
              padding: "20px 30px",
              color: "white",
              padding: "2rem",
            }}
            fontSize={"1.3rem"}
            fontWeight="normal"
          >
            {" "}
            <Image
              src={Logo}
              alt="Company Logo"
              boxSize="30px"
              borderRadius="full"
            />
            Nidhi Pvt Ltd.
          </Button>
          <Button
            mt={4}
            style={{
              backgroundColor: "#0b0252",
              padding: "20px 30px",
              color: "white",
              padding: "2rem",
            }}
            fontSize={"1.3rem"}
            fontWeight="normal"
          >
            {" "}
            <Image
              src={Logo}
              alt="Company Logo"
              boxSize="30px"
              borderRadius="full"
            />
            Nidhi Pvt Ltd.
          </Button>
        </Flex>
      </Box>
    </Flex> : (!isDashboard && !isLoading) ? <DetailsPage onClick={()=>setIsDashboard(true)}   /> : <CompanyDetailsPage/>
  );
};

export default HomePage;