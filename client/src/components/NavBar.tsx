import React, { useState } from 'react';
import {
    Box,
    Flex,
    Link,
    Heading,
    Button,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Link as NavLink } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useState(window.innerWidth <= 768);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bg="gray.800" // Use a darker background color
            color="white"
        >
            {/* Logo or Brand */}
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing="tight">
                    klyist Course
                </Heading>
            </Flex>

            {/* Hamburger menu for mobile */}
            {isMobile && (
                <IconButton
                    aria-label="Open navigation menu"
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    display={{ md: 'none' }}
                    colorScheme="white"
                />
            )}

            {/* Navigation Menu */}
            <Box
                display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
            >
                <NavLink to="/">Home</NavLink>

                <Link href="#" p={2}>
                    About
                </Link>
                <Link href="#" p={2}>
                    Courses
                </Link>
                <Link href="#" p={2}>
                    Profile
                </Link>
            </Box>

            {/* Login/Register Buttons */}
            <Box display={{ base: isOpen ? 'block' : 'none', md: 'flex' }} alignItems="center" ml={2}>
                <NavLink to="/login">
                    <Button colorScheme="teal" variant="outline" mr={4}>
                        Login
                    </Button>
                </NavLink>
                <NavLink to='/signup'>
                    <Button colorScheme="teal">Register</Button>
                </NavLink>
            </Box>

            {/* Drawer for mobile */}
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <Stack spacing={4}>
                            <NavLink to="/">Home</NavLink>
                            <Link href="#">About</Link>
                            <Link href="#">Courses</Link>
                            <Link href="#">Profile</Link>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default Navbar;
