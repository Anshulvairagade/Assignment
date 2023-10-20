import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
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

const CreatePage = () => {
  return (
    <Flex
      style={{ backgroundColor: "#eeedf2" }}
      h="88vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        // border="2px solid red"
        mb="8rem"
        h="40vh"
        w="40vw"
        justifyContent="center"
        alignItems="center"
        gap="34"
      >
        <Flex gap="58">
          <Box
            mt={2}
            bg="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="16vw"
            h="20vh"
            style={{ padding: "16px" }}
            gap={4}
          >
            <Box>
              <PiNotepadLight size={60} style={{ marginRight: "16px" }} />
            </Box>
            <Box>
              <NavLink to="/createform" style={{ fontWeight: "600", fontSize: "1.6rem" }}>Create Form</NavLink>
            </Box>
          </Box>
          <Box
            mt={2}
            bg="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="16vw"
            h="20vh"
            style={{ padding: "16px" }}
            gap={4}
          >
            <Box>
              <GiMaterialsScience size={60} style={{ marginRight: "16px" }} />
            </Box>
            <Box>
              <NavLink style={{ fontWeight: "600", fontSize: "1.6rem" }}>Create group</NavLink>
            </Box>
          </Box>
        </Flex>
        <Flex gap="58">
        <Box
            mt={2}
            bg="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="16vw"
            h="20vh"
            style={{ padding: "16px" }}
            gap={4}
          >
            <Box>
              <LiaMoneyCheckAltSolid size={60} style={{ marginRight: "16px" }} />
            </Box>
            <Box>
              <NavLink style={{ fontWeight: "600", fontSize: "1.6rem" }}>Create Loan</NavLink>
            </Box>
          </Box>
          <Box
            mt={2}
            bg="white"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            w="16vw"
            h="20vh"
            style={{ padding: "16px" }}
            gap={4}
          >
            <Box>
              <SiOpslevel size={60} style={{ marginRight: "16px" }} />
            </Box>
            <Box>
              <NavLink style={{ fontWeight: "600", fontSize: "1.6rem" }}>Create Level</NavLink>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreatePage;
