import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
} from '@chakra-ui/react';

const SignupPage = () => {
  // State to store the input values
  interface FormData {
    username: string;
    email: string;
    password: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleSubmit = (event:React.FormEvent<Event>) => {
    event.preventDefault();
    // Here, you can add the logic to handle signup
    // For example, send the formData to an authentication endpoint
    console.log('Submitted data:', formData);
  };

  // Function to handle input changes
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Heading mt={10}>Signup</Heading>
      <Box w="100%" maxW="500px" mt={4} p={4} borderWidth={1} borderRadius="md">
        <form onSubmit={()=>handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SignupPage;
