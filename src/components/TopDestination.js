import { Flex, Heading,  Image, Text, VStack , Stack} from '@chakra-ui/react'
import React from 'react'
import destination1 from '../assets/destination1.png';
import destination2 from '../assets/destination2.png';
import destination3 from '../assets/destination3.jpg';
import destination4 from '../assets/destination4.png';
import destination5 from '../assets/destination5.jpg';
import destination6 from '../assets/destination6.jpg';

const TopDestination = () => {
    return (

        <Flex
            mt='100px'
            justify='center'
            px={{base:'20px', sm:'20px', md:'30px',lg:'30px',xl:'30px','2xl':'30px'}}
           
        >
            <VStack spacing='16'>
                <VStack spacing='4'>
                <Heading as='h1' size='lg' fontSize='46px' fontWeight='extrabold' color='#3d373c' fontFamily='barlow'>
                    Top Destination
                </Heading>
                <Text textAlign='center' fontFamily='montserrat' color='#2d373c'>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.<br></br>
                    Suspendissendt blandit interdum.
                </Text>
                </VStack>
                
                <Stack spacing='6' >
                    <Stack spacing='6' direction={{base:'column', sm:'column', md:'column', lg:'row', xl:'row', '2xl':'row'}}>
                        <Image borderRadius='10px' src={destination1} h={{base:'350px',xl:'320px'}} w={{base:'500px',xl:'625px'}} transitionDuration='.3s'  _hover={{transform:'auto', scale:'1.1',maxW:'100%', overflow:'hidden' }}/>
                        <Image borderRadius='10px' src={destination2} h={{base:'350px',xl:'320px'}} w={{base:'500px',xl:'300px'}} transitionDuration='.3s'  _hover={{transform:'auto', scale:'1.1'}} />
                        <Image borderRadius='10px' src={destination3} h={{base:'350px',xl:'320px'}} w={{base:'500px',xl:'300px'}} transitionDuration='.3s'  _hover={{transform:'auto', scale:'1.1'}} />
                    </Stack>
                    <Stack spacing='6' direction={{base:'column', sm:'column', md:'column', lg:'row', xl:'row', '2xl':'row'}}>
                        <Image borderRadius='10px' src={destination4} h={{base:'350px',xl:'320px'}} w={{base:'500px',xl:'300px'}} transitionDuration='.3s'  _hover={{transform:'auto', scale:'1.1'}} />
                        <Image borderRadius='10px' src={destination5} h={{base:'350px',xl:'320px'}} w={{base:'500px',xl:'300px'}} transitionDuration='.3s'  _hover={{transform:'auto', scale:'1.1'}} />
                        <Image borderRadius='10px' src={destination6} h={{base:'350px',xl:'320px'}} w={{base:'500px',xl:'625px'}} transitionDuration='.3s'  _hover={{transform:'auto', scale:'1.1'}} />
                    </Stack>
                </Stack>


                
            </VStack>
        </Flex>
    )
}

export default TopDestination