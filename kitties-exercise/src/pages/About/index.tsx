import { AboutContainer, Paragraph, Section, Title, Highlight, SubTitle, List, ListItem, Contact } from './styles'
import React, { FC } from 'react'

const About: FC = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>

      <Section>
        <Paragraph>
          Welcome to <Highlight>Catpedia</Highlight>, your ultimate destination for all things feline! Whether you're a lifelong
          cat enthusiast or a new cat parent, our website is designed to provide you with a wealth of interesting and useful
          information about cats. Our mission is to create a comprehensive resource where everyone can learn, share, and celebrate
          the fascinating world of cats.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>Our Story</SubTitle>
        <Paragraph>
          Catpedia was born out of a deep love for cats and a desire to share this passion with others. We understand that cats
          are more than just pets; they are family members, companions, and often, our best friends. Our team consists of
          dedicated cat lovers, veterinarians, and writers who are committed to bringing you accurate, engaging, and up-to-date
          information about cats.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>What You'll Find Here</SubTitle>
        <Paragraph>At Catpedia, we cover a wide range of topics to cater to all cat lovers:</Paragraph>
        <List>
          <ListItem>
            Cat Breeds: Learn about the different cat breeds, their unique characteristics, and which breed might be the best fit
            for your lifestyle.
          </ListItem>
          <ListItem>
            Health and Care: Find tips and advice on how to keep your cat healthy and happy, including information on nutrition,
            grooming, and common health issues.
          </ListItem>
          <ListItem>
            Behavior and Training: Understand your cat’s behavior and learn effective training techniques to foster a harmonious
            relationship with your feline friend.
          </ListItem>
          <ListItem>
            Fun Facts and Stories: Discover fascinating facts about cats and read heartwarming stories from cat owners around the
            world.
          </ListItem>
          <ListItem>
            Adoption and Rescue: Get information on adopting a cat and learn about organizations dedicated to rescuing and
            rehoming cats in need.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SubTitle>Our Commitment</SubTitle>
        <Paragraph>
          We are committed to providing a welcoming and informative space for all cat lovers. We continuously update our content
          to ensure it is current and relevant. Your feedback is important to us, and we encourage you to share your thoughts and
          experiences with us.
        </Paragraph>
        <Paragraph>
          Thank you for visiting Catpedia. We hope you enjoy exploring our site and finding valuable information that enhances
          your bond with your furry friends. Together, let's celebrate the wonderful world of cats!
        </Paragraph>
      </Section>

      <Contact>
        If you have any questions, suggestions, or just want to share a cute cat story, feel free to contact us. We love hearing
        from fellow cat enthusiasts!
      </Contact>
    </AboutContainer>
  )
}

export default About
