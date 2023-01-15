import React from 'react'
import {Flex, VStack, Heading, Text, Button, HStack, IconButton} from '@chakra-ui/react';
import hero from '../assets/hero.jpg';
import hero2 from '../assets/hero2.jpg';
import {BsArrowUpCircle} from 'react-icons/bs';
import {BsArrowDownCircle} from 'react-icons/bs';
import {BiLoaderCircle} from 'react-icons/bi';

const Hero = () => {

 
    // const outerBoxStyles = {
        
      
    //     background:
    //       'url(https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/home3-banner3-1.png) center/cover no-repeat',
          
    //   }
    
    //   const innerBoxStyles = {
        
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     boxSize: 'full',
    //     color: 'white',
        
    //     fontWeight: 'bold',
    //     fontSize: '20px',
    //   }


    
     
  return (

         <Flex 
          
          justifyContent='center'
          backgroundImage= {hero2}    
          backgroundPosition='center'
          py='85px'
          px='12'
          backgroundSize='cover'
          backgroundRepeat="no-repeat"
         
          >
            

           <HStack spacing='400px' >
            <VStack>
              <Text ><BiLoaderCircle color='white'/>Facebook</Text>
              <Text  ><BiLoaderCircle color='white'/>Instagram</Text>
              <Text  ><BiLoaderCircle color='white'/>Linked in</Text>
            </VStack>
            <VStack spacing='8' py='40'>
            
                <Heading color='white' as='h2' size='md' fontFamily='montserrat'>Wellcome To Turio</Heading>
                <Heading  fontWeight='extrabold' fontFamily='body' size='4xl'  color='white' align='center' >Enjoy Your New Adventure</Heading>
                <Text color='white' maxW='900px' align='center' fontFamily='montserrat'>Sed convallis sit ametquis feugiat. Nunc interdum mollis facilisis. feugi Dthreec id the urna aliquet, suscipit turpis ut Dthreec id urna aliquet, suscipit turpis ut, facilisis purus.</Text>
                <Button borderRadius='0px' border='2px' borderColor='#54a15d' w='170px' h='45px' fontSize='16px' bgColor='#54a15d' variant='outline' color='white' fontFamily='montserrat' _hover={{bgColor : 'transparent', variant:'outline', color:'#54a15d'}}>Explore Now</Button>
            </VStack>
            <VStack spacing='10'>
              <Button variant='ghost'  color='white'  _hover={{variant:"ghost", color:'#54a15d', bg:'none'}}><BsArrowUpCircle size='34px'/></Button>
              <Button variant='ghost'  color='white'  _hover={{variant:"ghost", color:'#54a15d', bg:'none'}}><BsArrowDownCircle size='34px'/></Button>
            </VStack>
            </HStack> 
         </Flex>
         
        
        
        
        
       
    
  )
}

export default Hero
          
          
         
          
          
          
          
          
          
         
         
          