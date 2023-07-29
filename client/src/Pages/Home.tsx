import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Home = () => {
    return (
        <Container maxW="xl" mt={10}>
            <Heading as="h1" size="xl" textAlign="center" mb={5}>
                Welcome to the KLYIST Course
            </Heading>
            <Box
                bg="green.700"
                p={8}
                rounded="md"
                boxShadow="md"
                width={{ base: '100%', md: '80%', lg: '80%', xl: '80%' }}
                mx="auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="300px"
                transition="transform 0.3s ease-in-out"
                _hover={{
                    transform: 'scale(1.01)',
                }}  
            >
                <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    fontWeight="semibold"
                    color="black"
                >
                    Get Free Tech-Related Courses
                </Text>
            </Box>
        </Container>
    );
};

export default Home;
