import { useState } from "react";
import React from 'react';
import { Modal, useDisclosure } from '@chakra-ui/react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

type SignUpFormState = {
  name: string;
  email: string;
  password: string;
};

const SignupModel = () => {
  const [formState, setFormState] = useState<SignUpFormState>({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<SignUpFormState>({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform form validation here
    const errors: SignUpFormState = {
      name: "",
      email: "",
      password: ""
    };
    if (!formState.name) {
      errors.name = "Name is required";
    }
    if (!formState.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Invalid email format";
    }
    if (!formState.password) {
      errors.password = "Password is required";
    } else if (formState.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // If there are errors, update the formErrors state
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If there are no errors, submit the form data
    console.log(formState);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Box maxW="sm" mx="auto" py={6}>
          <form onSubmit={handleFormSubmit}>
            <FormControl isRequired isInvalid={!!formErrors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{formErrors.name}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={!!formErrors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={!!formErrors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{formErrors.password}</FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="blue" type="submit" >
              Sign up
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default SignupModel;
