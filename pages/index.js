import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {  IoLogoGithub, IoLogoLinkedin , IoMail} from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software engineer based in the US!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Shawn Melwani
          </Heading>
          <p>Enthusiast ( Cars / Developer / Engineer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Shawn cropped.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          
          I recently graduated from CSUF with a bachelor&apos;s degree in computer science
          and I&apos;m on the lookout for job opportunities. I have a passion for creating
          digital solutions and love diving into every aspect of a project, from the
          initial planning and design stages to coding and problem-solving. When I&apos;m
          not immersed in technology, you can usually find me exploring the world of
          cars!{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Anaheim, CA
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Graduated from Servite High School
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at IBS Electronics
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Completed the Bachelor&apos;s Program of Computer Science at CSUF
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Worked at Hyundai AutoEver America
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Cars, Music,{' '}
          <Link href="https://www.youtube.com/@themudamaniacs/videos" target="_blank">
            Anime
          </Link>
          , AI, Machine Learning, {' '}
          <Link href="https://osu.ppy.sh/users/11312128" target="_blank">
            Osu!
          </Link>
          , and Building PC's
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ShawnMelwani" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ShawnMelwani
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/shawn-melwani/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Shawn Melwani
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/contactme" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail/>}
              >
                shawnmelwani4@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact Me!
        </Heading>
        <p>
        If you like what you see, feel free to contact me. 
        I&apos;m always open to discussing projects, sharing insights, and exploring new opportunities.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/contactme"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Click here to Contact me!
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
