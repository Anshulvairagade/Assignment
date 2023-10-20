import React, { useState } from "react";
import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsFillFlagFill, BsFillExclamationTriangleFill } from "react-icons/bs";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { IoIosCreate } from "react-icons/io";
import { BiSpreadsheet } from "react-icons/bi";
import { GiStairsGoal, GiMaterialsScience } from "react-icons/gi";
import { SlLogout } from "react-icons/sl";
import { GoDiscussionClosed } from "react-icons/go";
import { TbReport } from "react-icons/tb";
import { PiNotepadLight } from "react-icons/pi";
import { SiOpslevel } from "react-icons/si";

import "../App.css";
import Logo from "../assets/HAN.png";
import { useStateValue } from "../context/StateProvider";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  const [{ compDetails }] = useStateValue();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  return (
    <Box
      w="250px"
      p={4}
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      position="sticky"
      top="0"
    >
      <VStack spacing={1} mt={-3}>
        <Image src={Logo} alt="Company Logo" boxSize="100px" />
        <Box
          style={{ height: "440px", overflowY: "auto", overflowX: "hidden" }}
        >
          <HStack spacing={2} mt={2} width="200px" p={2}>
            <MdDashboard size={24} style={{ marginRight: "16px" }} />
            <NavLink to="/" style={{fontSize:"16px", fontWeight:"semibold"}} >
        Dashboard
      </NavLink>
          </HStack>
          {compDetails?.companyName && (
            <VStack>
              {/* <Flex spacing={2} mt={2} width="200px" p={2} border="2px solid red">
                <IoIosCreate size={24} style={{ marginRight: "16px" }}  />
              <Box onClick={()=>setIsCreateOpen(!isCreateOpen)} border="2px solid green">
                <NavLink
                  style={{ fontWeight: "600", marginBottom: "6rem" }}
                  fontSize="16px"
                  to="/createpage"
                >
                  Create
                </NavLink>
                {isCreateOpen && <Box onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}>
                    <Box>
                      Create Form
                    </Box>
                  <Box>Create Ledger</Box>
                  <Box>Create Loan</Box>
                  <Box>Create Level</Box>
                  
                </Box>}
              </Box>
            </Flex> */}
              <Flex
                spacing={2}
                mt={2}
                alignItems="center"
                justifyContent="center"
                mb={-4}

              >
                <Flex flexDirection="column">
                  <Flex
                    onClick={() => setIsCreateOpen(!isCreateOpen)}
                    w="12vw"
                    // justifyContent="space-between"
                  >
                    <IoIosCreate size={24} style={{ marginRight: "16px" }} />
                    <NavLink
                      style={{ fontWeight: "600" }}
                      fontSize="16px"
                      to="/createpage"
                    >
                      Create
                    </NavLink>
                    <AiOutlineDown
                      size={14}
                      style={{ marginTop: "6px", marginLeft: "10px", cursor:"pointer" }}
                    />{" "}
                  </Flex>
                  <Flex mt={4}>
                    {isCreateOpen && (
                      <Flex
                        flexDirection="column"
                        gap={4}
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        <Flex>
                          <Box>
                            <AiOutlineRight
                              size={14}
                              style={{ marginRight: "16px" }}
                            />
                          </Box>
                          <Box>
                            <PiNotepadLight
                              size={24}
                              style={{ marginRight: "16px" }}
                            />
                          </Box>
                          <Box>
                            <NavLink to="/createform" style={{ fontWeight: "600" }}>Create Form</NavLink>
                          </Box>
                        </Flex>
                        <Flex fontWeight="semibold">
                          {" "}
                          <AiOutlineRight
                            size={14}
                            style={{ marginRight: "16px" }}
                          />
                          <GiMaterialsScience
                            size={24}
                            style={{ marginRight: "16px" }}
                          />
                          Create Ledger
                        </Flex>
                        <Flex fontWeight="semibold">
                          {" "}
                          <AiOutlineRight
                            size={14}
                            style={{ marginRight: "16px" }}
                          />
                          <LiaMoneyCheckAltSolid
                            size={24}
                            style={{ marginRight: "16px" }}
                          />
                          Create Loan
                        </Flex>
                        <Flex fontWeight="semibold">
                          {" "}
                          <AiOutlineRight
                            size={14}
                            style={{ marginRight: "16px" }}
                          />
                          <SiOpslevel
                            size={24}
                            style={{ marginRight: "16px" }}
                          />
                          Create Level
                        </Flex>
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </Flex>
              <HStack spacing={2} mt={2} width="200px" p={2}>
                <GiStairsGoal size={24} style={{ marginRight: "16px" }} />
                <Text fontWeight="semibold" fontSize="16px">
                  Career
                </Text>
              </HStack>
              <HStack spacing={2} mt={2} width="200px" p={2}>
                <BiSpreadsheet size={24} style={{ marginRight: "16px" }} />
                <Text fontWeight="semibold" fontSize="16px">
                  Balancesheet
                </Text>
              </HStack>
              <HStack spacing={2} mt={2} width="200px" p={2}>
                <GoDiscussionClosed size={24} style={{ marginRight: "16px" }} />
                <Text fontWeight="semibold" fontSize="16px">
                  Profit & Loss
                </Text>
              </HStack>
              <HStack spacing={2} mt={2} width="200px" p={2}>
                <TbReport size={24} style={{ marginRight: "16px" }} />
                <Text fontWeight="semibold" fontSize="16px">
                  Report
                </Text>
              </HStack>
            </VStack>
          )}

          <hr />
          <HStack spacing={2} mt={2} width="200px" p={2}>
            <BsFillFlagFill size={22} style={{ marginRight: "16px" }} />
            <Text fontWeight="semibold" fontSize="16px">
              Help
            </Text>
          </HStack>
          <HStack spacing={2} mt={2} width="200px" p={2}>
            <SlLogout size={22} style={{ marginRight: "16px" }} />
            <Text fontWeight="semibold" fontSize="16px">
              Logout
            </Text>
          </HStack>
        </Box>
        <hr />
      </VStack>
      <Box
        p={4}
        mt={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#e7e6f0", borderRadius: "10px" }}
      >
        <Text fontSize="18px" fontWeight="semibold" color="blue.900">
          Found a bug?
        </Text>
        <Text fontSize="14px" width="70%" color="#8079b3" textAlign="center">
          Report now to us if{" "}
        </Text>
        <Text fontSize="14px" width="70%" color="#8079b3" textAlign="center">
          you find any bugs{" "}
        </Text>
        <Button
          mt={2}
          style={{ backgroundColor: "#1f0bb8", color: "white" }}
          width="90%"
        >
          {" "}
          <BsFillExclamationTriangleFill
            size={20}
            style={{ marginRight: "16px" }}
          />{" "}
          Report
        </Button>
      </Box>
    </Box>
  );
};

export default SideBar;
