import React from 'react'
import {Flex, VStack, Heading, Text, Button, Box} from '@chakra-ui/react';
import bgimage from './bgimage.png';

const Hero = () => {

 
    const outerBoxStyles = {
        
      
        background:
          'url(https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/home3-banner3-1.png) center/cover no-repeat',
          
      }
    
      const innerBoxStyles = {
        
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
          sx={outerBoxStyles} 
          
          
         
         
          >
            
            <VStack sx={innerBoxStyles} backdropFilter='auto' backdropBrightness='50%' spacing='8' py='80'>
            
                <Heading color='white' as='h2' size='md' fontFamily='montserrat'>Wellcome To Turio</Heading>
                <Heading  fontWeight='extrabold' fontFamily='body' size='4xl'  color='white' align='center'>Enjoy Your New Adventure</Heading>
                <Text color='white' maxW='800px' align='center'>Sed convallis sit ametquis feugiat. Nunc interdum mollis facilisis. feugi Dthreec id the urna aliquet, suscipit turpis ut Dthreec id urna aliquet, suscipit turpis ut, facilisis purus.</Text>
                <Button borderRadius='0px' border='2px' borderColor='#54a15d' w='150px' h='50px' bgColor='#54a15d' variant='outline' _hover={{bgColor : 'transparent', variant:'outline', color:'#54a15d'}}>Explore Now</Button>
            </VStack>
       
         </Flex>
         
      
        
        
        
       
    
  )
}

export default Hero