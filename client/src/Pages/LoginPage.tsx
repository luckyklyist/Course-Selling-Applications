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

const LoiginPage = () => {
    // State to store the input values
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can add the logic to handle login
        // For example, send the formData to an authentication endpoint
        console.log('Submitted data:', formData);
    };

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Container>
            <Heading mt={10}>Login</Heading>
            <Box w="100%" maxW="500px" mt={4} p={4} borderWidth={1} borderRadius="md">
                <form onSubmit={handleSubmit}>
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
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="green" >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoiginPage;
