import React, { useState } from "react";

import "./style.css";
import {
  Text,
  Button,
  Card,
  CardBody,
  ButtonGroup,
  Image,
  Box,
  FormControl,
} from "@chakra-ui/react";
const Rating = () => {
  const [select, setSelect] = useState();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (rating) => {
    setSelect(rating);
  };
  const onChange = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(select);
  };
  return submitted ? (
    <Card
      position="relative"
      margin="auto"
      width={{base:'90%',md:"41%",lg:"22%"}}
      top={{base:"150",md:"200" ,lg:"230"}}
  
      borderRadius="15px"
      backgroundColor="hsl(213, 19%, 18%)"
    >
      <CardBody marginLeft={{base:"5px",md:"17px",lg:"18px"}} textAlign="center">
        <Box
          backgroundColor="hsl(213, 19%, 18%)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            margin="auto"
            backgroundColor="hsl(213, 19%, 18%)"
            src="./images/illustration-thank-you.svg"
            alt="star icon"
          />
        </Box>
        <Box
          margin="auto"
          color="hsl(25, 97%, 53%)"
          marginTop="20px"
          width="70%"
          borderRadius="15px"
          backgroundColor="#33334d"
        >
          <span>You selected {select} out of 5</span>
        </Box>
        <Text fontSize="x-large" color="hsl(0, 0%, 100%)" marginTop="10px">
          Thank You!{" "}
        </Text>
        <Text fontSize="15px" marginTop="10px" color="hsl(217, 12%, 63%)">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Text>
      </CardBody>
    </Card>
  ) : (
    <FormControl>
      <Card className="card"
        position="relative"
        margin="auto"
        width={{base:'90%',md:"41%",lg:"22%"}}
        top={{base:"150",md:"200" ,lg:"230"}}
      
        borderRadius="15px"
        backgroundColor="hsl(213, 19%, 18%)"
      >
        <CardBody marginLeft={{base:"5px",md:"17px",lg:"18px"}} textAlign="left">
          <Box
            backgroundColor="#33334d"
            borderRadius="50% "
            width="40px"
            height="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              margin="auto"
              width="45%"
              src="./images/icon-star.svg"
              alt="star icon"
            />
          </Box>

          <Text fontSize="x-large" color="hsl(0, 0%, 100%)" marginTop="10px">
            How did we do?{" "}
          </Text>
          <Text fontSize="15px" marginTop="10px" color="hsl(217, 12%, 63%)">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Text>
          
          <ButtonGroup marginTop="15px" spacing="4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <Button
                className="rating-button"
                borderRadius="50%"
                backgroundColor="#33334d"
                color="hsl(217, 12%, 63%)"
                _hover={{
                  backgroundColor: "hsl(25, 97%, 53%)",
                  color: "white",
                }}
                onClick={() => handleSubmit(rating)}
                key={rating}
              >
                {rating}
              </Button>
            ))}
          </ButtonGroup>

          <Button
            className="custom-button"
            marginTop="30px"
            padding="0px 110px 0px 110px"
            borderRadius="20"
            fontSize="small"
            variant="solid"
            textColor="hsl(0, 0%, 100%)"
            bgColor="hsl(25, 97%, 53%)"
            onClick={onChange}
            isDisabled={!select}
          >
            SUBMIT
          </Button>
        </CardBody>
      </Card>
    </FormControl>
  );
};

export default Rating;
