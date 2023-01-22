import React from 'react'
import {Flex, VStack, Heading, Text, Button, HStack, IconButton, ButtonGroup, Stack} from '@chakra-ui/react';
import hero from '../assets/hero.jpg';
import hero2 from '../assets/hero2.jpg';
import {BsArrowUpCircle} from 'react-icons/bs';
import {BsArrowDownCircle} from 'react-icons/bs';
import {BiLoaderCircle} from 'react-icons/bi';
  

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

 

  const Hero = () => {
    
  return (

         <Flex 
          
          justifyContent='center'
          backgroundImage= {hero}  
          backgroundPosition='center'
          py={{md:'65px'}}
          px='12'
          backgroundSize='cover'
          backgroundRepeat="no-repeat"
          h={{base:'110vh', sm:'110vh', md:'110vh',lg:'110vh',xl:'110vh','2xl':'110vh'}}
         
          >
            

           <HStack spacing={{base:'none',sm:'none',md:'150px',lg:'150px',xl:'150px','2xl':'400px'}}>
            <Stack  w='0px' display={{base:'none', sm:'none', md:'none', lg:'unset', xl:'unset','2xl':'unset'}} >
                  <HStack px='4' transform= 'rotate(-90deg)' mt='400' >
                    <ButtonGroup spacing='-20px' >
                    <IconButton variant='ghost'  _hover={{bgColor:'transparent'}} icon={<BiLoaderCircle color='white'/>}/>
                    <Button  variant='ghost' color='white' fontFamily='montserrat'  _hover={{bgColor:'transparent'}} fontSize='sm'   icon={<BiLoaderCircle color='white'/>}>Facebook</Button>
                    </ButtonGroup>
                    <ButtonGroup spacing='-5px'>
                    <IconButton variant='ghost'  _hover={{bgColor:'transparent'}} icon={<BiLoaderCircle color='white'/>}/>
                    <Button  px='0px' variant='ghost' color='white'  fontFamily='montserrat'  _hover={{bgColor:'transparent'}} fontSize='sm' >Instagram</Button>
                    </ButtonGroup>
                    <ButtonGroup spacing='-20px'>
                    <IconButton variant='ghost'  _hover={{bgColor:'transparent'}} icon={<BiLoaderCircle color='white'/>}/>
                    <Button  variant='ghost' color='white' fontFamily='montserrat'  _hover={{bgColor:'transparent'}} fontSize='sm'  >Linked in</Button>
                    </ButtonGroup>
                    </HStack>
             
              
            </Stack>
            <VStack spacing={{base:'20px',sm:'20px',md:'50px',lg:'50px',xl:'50px','2xl':'50px'}}   >
                <VStack spacing={{base:'10px',sm:'10px',md:'none',lg:'none',xl:'none','2xl':'none'}}  >
                <Heading color='white' as='h2' size={{base:'xs',sm:'sm',md:'md',lg:'md',xl:'md','2xl':'md'}}  fontFamily='montserrat'>Wellcome To Turio</Heading>
                <Heading fontWeight='extrabold' fontFamily='body' fontSize={{base:'40px',sm:'40px',md:'55px',lg:'70px','xl':'70px', '2xl':'70px'}}  color='white' align='center'  >Enjoy Your New Adventure</Heading>
                <Text color='white' maxW={{base:'900x',sm:'600px',md:'900px',lg:'900px','xl':'900px', '2xl':'900px'}} align='center' fontFamily='montserrat'>Sed convallis sit ametquis feugiat. Nunc interdum mollis facilisis. feugi Dthreec id the urna aliquet, suscipit turpis ut Dthreec id urna aliquet, suscipit turpis ut, facilisis purus.</Text>
                </VStack>
                <Button borderRadius='0px' border='2px' borderColor='#54a15d' w={{base:'145px',sm:'145px',md:'155px',lg:'170px','xl':'170px', '2xl':'170px'}} h='45px' fontSize={{base:'14px',sm:'14px',md:'16px',lg:'16px','xl':'16px', '2xl':'16px'}} mb={{base:'100px',sm:'100px',md:'none',lg:'none',xl:'none','2xl':'none'}} bgColor='#54a15d' variant='outline' color='white' fontFamily='montserrat' _hover={{bgColor : 'transparent', variant:'outline', color:'#54a15d'}}>Explore Now</Button>
                
                
            </VStack>
            <VStack spacing='10'>
              <Button variant='ghost'  color='white'  _hover={{variant:"ghost", color:'#54a15d', bg:'none'}} display={{base:'none', sm:'none', md:'none', lg:'unset',xl:'unset','2xl':'unset'}} ><BsArrowUpCircle size='34px'/></Button>
              <Button variant='ghost'  color='white'  _hover={{variant:"ghost", color:'#54a15d', bg:'none'}} display={{base:'none', sm:'none', md:'none', lg:'unset',xl:'unset','2xl':'unset'}} ><BsArrowDownCircle size='34px'/></Button>
            </VStack>
            </HStack> 
         </Flex>
         
        
        
        
        
       
    
  )
}

export default Hero