import React from "react";
import { ScrollView, Box, Text, VStack, Icon, Image, useColorModeValue} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from "../components/animated-color-box";
import NavBar from "../components/navbar";
import Masthead from "../components/masthead";
import LinkButton from '../components/link-button'

const AboutScreen = () => {
    return (
        <AnimatedColorBox 
        flex={1} 
        bg={useColorModeValue('warmGray.50', 'warmGray.900')}
        w="full"
        >
        <Masthead title="About this app" image={require('../assets/about-masthead.png')}>
            <NavBar/>
        </Masthead>
        <ScrollView 
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
        >
        <VStack flex={1} space={4}>
            <Box alignItems="center">
                <Image source={require('../assets/profile.jpg')} 
                borderRadius="full"
                resizeMode="cover"
                w={120}
                h={120}
                alt="author"
                />
                <Text fontSize="md" w='full'>This is my React Native Todolist Project built from a tutorial from a Youtube channel called DevAsLife</Text>
            </Box>
            <LinkButton 
            colorScheme="red" 
            size="lg" 
            borderRadius="full" 
            href="https://www.youtube.com/devaslife"
            leftIcon={
                <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }
            >
            You can Find his channel
            </LinkButton>
            <LinkButton 
            colorScheme={useColorModeValue('blue', 'darkBlue')} 
            size="lg" 
            borderRadius="full" 
            href="https://github.com/JeronOkkers"
            leftIcon={
                <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
            >
            My github
            </LinkButton>
            <LinkButton 
            colorScheme="purple" 
            size="lg" 
            borderRadius="full" 
            href="https://instagram.com/jeron_okkers"
            leftIcon={
                <Icon as={Feather} name="instagram" size="sm" opacity={0.5} />
            }
            >
            My instagram
            </LinkButton>
        </VStack>
        </ScrollView>
        </AnimatedColorBox>
    )
}

export default AboutScreen