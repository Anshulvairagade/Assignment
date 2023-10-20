import React from 'react'
import { Flex, Box, Text, HStack, Image } from "@chakra-ui/react";
import { MdCircleNotifications } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import Logo from "../assets/HAN.png";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  
  return (
    <Flex
      position="sticky"
      top="0"
      zIndex={9}
      alignItems="center"
      justifyContent="space-between"
      color="white"
          
          width={"100%"}
          style={{ backgroundColor: "#0b0252",padding: "20px 30px" }} 
    >
      <NavLink to="/" style={{fontSize:"26px", fontWeight:"bold"}} >
        Dashboard
      </NavLink>
          <HStack spacing={2} mt={2} width="220px" p={2} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image src={Logo} alt="Company Logo" boxSize="30px" borderRadius="full"/>
          <Text fontWeight="semibold" fontSize="16px">Rohit Bajaj</Text>
          <AiOutlineDown size={10} style={{ marginRight: "16px" }} />
          <MdCircleNotifications size={30} style={{ marginRight: "16px" }} />
        </HStack>
    </Flex>
  )
}

export default Navbar