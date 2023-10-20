import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useStateValue } from "../context/StateProvider";
import { NavLink } from "react-router-dom";

const DetailsPage = ({ onClick }) => {
  const [{ compDetails }, dispatch] = useStateValue();

  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    address: "",
    city: "", 
    telno: "", 
    email: "", 
    gst: "",
    license: "", 
    pan: "", 
    mname: "", 
    state: "", 
    pin: "", 
    mno: "", 
    waddress: "", 
    lno:""
  });

  const handleSubmit = () => {
      dispatch({
        type: "compDetails",
        compDetails: companyDetails,
      });
      //   sessionStorage.setItem("companyDetails", JSON.stringify(companyDetails))
      onClick();
   
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({ ...companyDetails, [name]: value });
  };
  const isFormValid = () => {
    for (const key in companyDetails) {
      if (companyDetails[key] === "") {
        return false;
      }
    }
    return true;
  };
  console.log(compDetails);
  return (
    <Box style={{ backgroundColor: "#eeedf2" }} w="83vw" p="4">
      <Text fontSize="2.2rem" marginLeft="16px">
        Company Details
      </Text>
      <Box display="flex" justifyContent="Center">
        <Flex justifyContent="space-between" w="60vw" p={4} marginLeft="10px">
          <Stack spacing={4} width="45%">
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Company Name
              </FormLabel>
              <Input
                type="text"
                name="companyName"
                value={companyDetails.companyName}
                border="2px solid #adadad"
                placeholder="Company name"
                bg="white"
                w="80%"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Address
              </FormLabel>
              <Input
                name="address"
                value={companyDetails.address}
                w="80%"
                type="text"
                border="2px solid #adadad"
                placeholder="Address"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                City
              </FormLabel>
              <Input
                name="city"
                value={companyDetails.city}
                w="80%"
                type="text"
                border="2px solid #adadad"
                placeholder="City"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Telephone no.
              </FormLabel>
              <Input
                name="telno"
                value={companyDetails.telno}
                w="80%"
                type="number"
                border="2px solid #adadad"
                placeholder="Telephono no."
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                E-mail
              </FormLabel>
              <Input
                name="email"
                value={companyDetails.email}
                w="80%"
                type="email"
                border="2px solid #adadad"
                placeholder="Email"
                bg="white"
                onChange={handleChange}
                />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                GST No.
              </FormLabel>
              <Input
                name="gst"
                value={companyDetails.gst}
                w="80%"
                type="number"
                border="2px solid #adadad"
                placeholder="Gst no."
                bg="white"
                onChange={handleChange}

              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                License Name
              </FormLabel>
              <Input
                name="license"
                value={companyDetails.license}
                w="80%"
                type="text"
                border="2px solid #adadad"
                placeholder="License"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Pan Card Number
              </FormLabel>
              <Input
                name="pan"
                value={companyDetails.pan}
                w="80%"
                type="number"
                border="2px solid #adadad"
                placeholder="Pan Card No."
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
          </Stack>
          <Stack spacing={4} width="45%">
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Mailing Name
              </FormLabel>
              <Input
                name="mname"
                value={companyDetails.mname}
                w="80%"
                type="text"
                border="2px solid #adadad"
                placeholder="Mailing Name"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                State
              </FormLabel>
              <Input
                name="state"
                value={companyDetails.state}
                w="80%"
                type="text"
                border="2px solid #adadad"
                placeholder="State"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Pin Code
              </FormLabel>
              <Input
                name="pin"
                value={companyDetails.pin}
                w="80%"
                type="number"
                border="2px solid #adadad"
                placeholder="Pin Code"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Mobile No.
              </FormLabel>
              <Input
                name="mno"
                value={companyDetails.mno}
                w="80%"
                type="number"
                border="2px solid #adadad"
                placeholder="Mobile no."
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                Website Adress
              </FormLabel>
              <Input
              name="waddress"
              value={companyDetails.waddress}
                w="80%"
                type="text"
                border="2px solid #adadad"
                placeholder="Website Address"
                bg="white"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
                License No.
              </FormLabel>
              <Input
                name="lno"
                value={companyDetails.lno}
                w="80%"
                type="number"
                border="2px solid #adadad"
                placeholder="License no."
                bg="white"
                onChange={handleChange}
              />
              <Box>
                <Button
                  mt={4}
                  style={{
                    backgroundColor: "#0b0252",
                    color: "white",
                    padding: "1rem",
                    marginLeft: "200px",
                  }}
                  fontSize={"1rem"}
                  fontWeight="normal"
                >
                  Add License
                </Button>
              </Box>
            </FormControl>
          </Stack>
        </Flex>
      </Box>
      <Box mt="4rem" mb="2rem">
        <NavLink
          onClick={() => {
            if (isFormValid()) {
              handleSubmit()
            }
            else {
              alert("Please fill are Required Fields!")
            }
          }}
          style={{
            backgroundColor: "#0b0252",
            color: "white",
            padding: "1rem",
            marginLeft: "40%",
            padding: "1.2rem 4rem",
            borderRadius: "40px",
            fontSize: "1.6rem",
            fontWeight: "normal",
            marginTop: "2rem",
          }}
        >
          Submit
        </NavLink>
      </Box>
    </Box>
  );
};

export default DetailsPage;
