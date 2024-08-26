import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: 'Message Sent',
            description: "Thank you. I will get back to you as soon as possible.",
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast({
            title: 'Error',
            description: 'Ahh, something went wrong. Please try again.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box p={4} maxWidth="600px" mx="auto" mt={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Contact Me
        </Heading>
        <Text fontSize="lg" textAlign="center">
          If you like what you see, feel free to contact me. I&apos;m always open to
          discussing projects, sharing insights, and exploring new opportunities.
        </Text>
        <form ref={formRef} onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              size="md"
              isLoading={loading}
            >
              Send
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default ContactMe;
