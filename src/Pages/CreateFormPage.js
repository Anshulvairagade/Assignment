import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Radio,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../App.css";

const CreateFormPage = () => {
  return (
    <Box style={{ backgroundColor: "#eeedf2", padding: "26px" }}>
      <Flex flexDirection="column">
        <Flex>
          <FormControl isRequired>
            <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
              Form Name
            </FormLabel>
            <Input
              type="text"
              border="2px solid #adadad"
              placeholder=" Name"
              bg="white"
              w="30vw"
              h="8vh"
              fontSize="1.4rem"
            />
          </FormControl>
        </Flex>
        <Flex mt={6} w="74vw">
          <FormControl isRequired>
            <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
              Add Group
            </FormLabel>
            <Input
              type="text"
              border="2px solid #adadad"
              placeholder=" Name"
              bg="white"
              w="30vw"
              h="8vh"
              fontSize="1.4rem"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel style={{ color: "#12034d", fontSize: "1.6rem" }}>
              Add Sub-group
            </FormLabel>
            <Input
              type="text"
              border="2px solid #adadad"
              placeholder=" Name"
              bg="white"
              w="30vw"
              h="8vh"
              fontSize="1.4rem"
            />
          </FormControl>
        </Flex>
        <Flex>
          <Text fontSize="1.6rem" fontWeight="semibold" mt={6}>
            Add Field
          </Text>
        </Flex>
        <Flex
          p={6}
          justifyContent="space-between"
          w="90%"
          alignItems="center"
          mt="6"
          gap={8}
        >
          <Flex
            w="100%"
            flexDirection="column"
            gap={6}
            // border="2px solid red"
            justifyContent="space-between"
          >
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Party Time
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox" />
                <label for="checkbox"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Display Name
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox2" />
                <label for="checkbox2"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Email Address
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox3" />
                <label for="checkbox3"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Address 
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox4" />
                <label for="checkbox4"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                GST Number
              </Text>
              <div class="round">
                <input type="checkbox" id="checkboxz" />
                <label for="checkboxz"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                State
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox5ss" />
                <label for="checkbox5ss"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                City
              </Text>
              <div class="round">
                <input type="checkbox" id="checkboxv" />
                <label for="checkboxv"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Pin Code
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox6" />
                <label for="checkbox6"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Mobile Number
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox7" />
                <label for="checkbox7"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Updata Url
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox8" />
                <label for="checkbox8"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Account Holder Name
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox9" />
                <label for="checkbox9"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Bank Name
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox10" />
                <label for="checkbox10"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                IFCS Code
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox11" />
                <label for="checkbox11"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Minimum Business
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox12" />
                <label for="checkbox12"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Minimum Payout
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox13" />
                <label for="checkbox13"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Compulsory Requirement
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox14" />
                <label for="checkbox14"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                No. of Job Vacancy
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox15" />
                <label for="checkbox15"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Is this Primary?
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox16" />
                <label for="checkbox16"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Level Number
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox17" />
                <label for="checkbox17"></label>
              </div>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            flexDirection="column"
            gap={6}
            // border="2px solid red"
            justifyContent="space-between"
          >
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Type of Loan
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox18" />
                <label for="checkbox18"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                User Id / Password
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox19" />
                <label for="checkbox19"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Upload Image
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox20" />
                <label for="checkbox20"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Incentive
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox21" />
                <label for="checkbox21"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Range
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox22" />
                <label for="checkbox22"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Mode of Payment
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox23" />
                <label for="checkbox23"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Minimum Life
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox24" />
                <label for="checkbox24"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Salary
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox25" />
                <label for="checkbox25"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Level
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox26" />
                <label for="checkbox26"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Upgrade New Passcard
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox27" />
                <label for="checkbox27"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Account No.
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox28" />
                <label for="checkbox28"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Upload Pan card
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox29" />
                <label for="checkbox29"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Upload Aadhar card
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox30" />
                <label for="checkbox30"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Benifits
              </Text>
              <div class="round">
                <input type="checkbox" id="checkboxe31" />
                <label for="checkbox31"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Job Description
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox32" />
                <label for="checkbox32"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Job Deadlines
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox33" />
                <label for="checkbox33"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Is this Primary ?
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox34" />
                <label for="checkbox34"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Level Name
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox35" />
                <label for="checkbox35"></label>
              </div>
            </Flex>
            <Flex
              width="70%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="1.6rem" fontWeight="semibold">
                Party Time
              </Text>
              <div class="round">
                <input type="checkbox" id="checkbox36" />
                <label for="checkbox36"></label>
              </div>
            </Flex>
          </Flex>
        </Flex>
          </Flex>
          <Flex justifyContent="center"><Button style={{
            backgroundColor: "#0b0252",
            color: "white",
            padding: "1rem",
            padding: "1.6rem 4.4rem",
            borderRadius: "40px",
            fontSize: "1.6rem",
            fontWeight: "semibold",
            marginTop: "2rem",
          }}>Create Form</Button></Flex>
    </Box>
  );
};

export default CreateFormPage;