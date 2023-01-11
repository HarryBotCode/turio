import React from 'react'
import {Flex, VStack, Heading, Text, Button, Box} from '@chakra-ui/react';
import bgimage from '../assets/bgimage.png';

const Hero = () => {

 
    const outerBoxStyles = {
        
      
        background:
          'url(https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/home3-banner3-1.png) center/cover no-repeat',
      }
    
      const innerBoxStyles = {
        background:
          'url(https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/home3-banner3-1.png) center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
      }
     
  return (
    <Flex
    
    justify='center'
    bgGradient='grey'
    py='20'
    h='100vh'
    sx={outerBoxStyles} 
    bgOpacity="50%" 
    bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))"
  
    >
         <Box sx={innerBoxStyles} backdropFilter='auto' backdropBrightness='40%'>
         <VStack spacing='6'  >
        
        <Heading color='white' as='h3' size='md'>Wellcome To Turio</Heading>
        <Heading as='h1' size='4xl' noOfLines={4} maxW='650px' color='white' align='center'>Enjoy Your New Adventure</Heading>
        <Text color='white' maxW='650px' align='center'>Sed convallis sit ametquis feugiat. Nunc interdum mollis facilisis. feugi Dthreec id the urna aliquet, suscipit turpis ut Dthreec id urna aliquet, suscipit turpis ut, facilisis purus.</Text>
        <Button borderRadius='0px' border='2px' borderColor='#54a15d' w='150px' h='50px' bgColor='#54a15d' variant='outline' _hover={{bgColor : 'transparent', variant:'outline', color:'#54a15d'}}>Explore Now</Button>
</VStack>
       
         </Box>
        

        </Flex>
        
        
       
    
  )
}

export default Hero