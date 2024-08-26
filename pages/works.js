import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/FixMyRide.jpg'
import thumbWalknote from '../public/images/works/DishDive.jpg'
import thumbFourPainters from '../public/images/works/musicrecommendor.jpg'
import thumbMenkiki from '../public/images/works/imagegenerator.jpg'
import thumbMargelo from '../public/images/works/racinggame.jpg'
//import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
//import thumbStyly from '../public/images/works/styly_eyecatch.png'
//import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
//import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
//import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="FixMyRide" title="FixMyRide" thumbnail={thumbInkdrop}>
            A personal AI Car mechanic that provides maintenance and service tips to help maintain and fix your car
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="DishDive"
            title="DishDive"
            thumbnail={thumbWalknote}
          >
            With DishDive, users can store, discover, and share recipes with a community-driven approach, fostering culinary exploration and community engagement
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="Spotify AI Music Recommendor"
            title="Spotify AI Music Recommendor"
            thumbnail={thumbFourPainters}
          >
            SoundSphere leverages Spotify's API and advanced machine learning algorithms to analyze user listening habits, generating personalized music recommendations. The model continuously adapts based on user preferences and behavior, enabling precise and dynamic playlist curation without the need for a dedicated user interface.
          </WorkGridItem>
        </Section>

         <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="AI Image Generator">
          An AI-powered image generator leveraging OpenAI's DALL·E model allows users to create detailed and unique images from text prompts. Through an intuitive user interface, users can input descriptions and adjust parameters, while the machine learning model transforms the input into high-quality visuals. This tool streamlines the process of generating custom images, making AI-driven creativity accessible to everyone.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
         <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Unity Racing Game">
          Developed an engaging racing game in Unity using C#, incorporating a realistic physics system to simulate vehicle dynamics.
Integrated high-quality 3D vehicle models and designed multiple unique tracks to provide varied gameplay experiences. Created
intuitive UI elements to enhance user interaction and overall player experience.
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>   */}
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
