import { Button, Flex, Heading, HStack, VStack, Text, Stack, Image, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import bgImage2 from '../assets/bgImage2.jpg'
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import {BsPinterest} from 'react-icons/bs';
import {BsTelephone} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {TfiLocationPin} from 'react-icons/tfi';

const Footer = () => {
  return (
    <>
     
        <Flex
          bgImage={bgImage2}
          bgBlendMode='hue'
          backgroundSize='center'
          backgroundRepeat="no-repeat"
          backgroundPosition='center'
          h={{base:'70vh', sm:'70vh', md:'50vh',lg:'30vh',xl:'30vh','2xl':'30vh'}}
          w='100%'
          justify='space-around'
        >
          <VStack py='100px' >
            <Stack spacing={{base:'40px', sm:'40px', md:'40px',lg:'40px',xl:'130px','2xl':'130px'}} px={{base:'10px',sm:'10px', md:'none', lg:'none', xl:'none', '2xl':'none'}} direction={{base:'column', sm:'column', md:'row', lg:'row',xl:'row', '2xl':'row'}}>
              <Stack spacing='4'>
                <Heading as='h1' textAlign={{base:'center',sm:'center',md:'none', lg:'none', xl:'none', '2xl':'none'}} size={{base:'xl', sm:'xl', md:'2xl',lg:'2xl',xl:'2xl','2xl':'2xl'}} color='white' fontFamily='barlow' fontWeight='extrabold' >JOIN US FOR MORE UPDATE</Heading>
                <Text fontSize='sm' color='white' fontFamily='montserrat' textAlign={{base:'center',sm:'center',md:'none', lg:'none', xl:'none', '2xl':'none'}} >Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.<br></br>
                  Suspendissendt blandit interdum.</Text>
              </Stack>
              <VStack>
                <Button w='150px' h='50px' fontFamily='montserrat' borderRadius='0' fontSize='18px' ghost='solid' bgColor='#54a15d' color='white' border='2px' borderColor='#54a15d' _hover={{ bgColor: 'transparent', color: '#54a15d', border: '2px', borderColor: '#54a15d' }}>Join Now</Button>
              </VStack>
            </Stack>
          </VStack>


        </Flex>
        
       
        
        
        
   

      <Flex bgColor='#1d2326'
          opacity='.9'
          py='0'
          h={{base:'220vh', sm:'220vh', md:'150vh',lg:'150vh',xl:'65vh','2xl':'65vh'}}
          w='100%'
          px={{base:'10px', sm:'10px', md:'10px',lg:'10px',xl:'100px','2xl':'100px'}}
          

        >
           <Stack spacing={{base:'40px', sm:'40px', md:'40px',lg:'40px',xl:'40px','2xl':'150px'}} mt={{base:'100px', sm:'100px', md:'50px',lg:'50px',xl:'100px','2xl':'140px'}} direction={{base:'column',sm:'column',md:'column',lg:'column',xl:'row','2xl':'row'}}>
          
        
            <Stack>
              <Stack spacing='8'>
                <Heading><Image src={'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/logo2-1.svg'} ></Image></Heading>
                
                <Text color='white' fontFamily='montserrat'>Duis rutrum nisl urna. Maecenas vel libero faucibus nisi<br></br>venenatis hendrerit a id lectus. Suspendissendt<br></br>molestie turpis nec lacinia vehicula.</Text>
              </Stack>
              <Stack spacing='8'>
                <Text color='#54a15d' fontFamily='montserrat' >Working Day : Monday - Firday (9AM - 5PM)</Text>
                <Heading color='white' fontFamily='barlow' as='h1' size='lg' fontWeight='extrabold'>Follow Us On :</Heading>
                <HStack spacing='4'><BsFacebook color='#54a15d' size='35px'/><AiFillTwitterCircle color='#54a15d' size='40px' /><IoLogoWhatsapp color='#54a15d' size='40px' /><BsPinterest color='#54a15d' size='35px' /></HStack>
              </Stack>
            </Stack>
          
         
         
          
          
         
           
              <Stack spacing='8'>
                <Heading color='white' fontFamily='barlow' as='h1' size='lg' fontWeight='extrabold'>Quick Links</Heading>
               
                <List spacing='2'>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}}  transition='.4s' >Guide</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'  _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}}  transition='.4s'>Blog Standard</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}}  transition='.4s'>Contact Us</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}}  transition='.4s'>Destination</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}}  transition='.4s'>FAQ</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}}  transition='.4s'>Gallery</Text></ListItem>
                </List>
                
                
              </Stack>
              
            
          
         
          
          
          
          
           
              <Stack spacing='8'>
                <Heading color='white' fontFamily='barlow' as='h1' size='lg' fontWeight='extrabold'>Tour Type</Heading>
               
                <List spacing='2'>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}} transition='.4s'>Adventur Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}} transition='.4s'>Couple Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}} transition='.4s'>Family Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}} transition='.4s'>Group Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}} transition='.4s'>Holiday Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button' _hover={{color:'#54a15d', transition:'.2s', transform:'translateX(10px)'}} transition='.4s'>Village Tour</Text></ListItem>
                </List>
                
                
              </Stack>
              
            
          
          
          
          
          
           
              <Stack spacing='8'>
                <Heading color='white' fontFamily='barlow' as='h1' size='lg' fontWeight='extrabold'>Contact Us</Heading>
               <Stack>
                <List spacing='5'>
                  <HStack spacing='4'>
                    <BsTelephone color='white' size='25px'/>
                    <ListItem><Text color='white' fontFamily='montserrat' as='button'>+880-566-1111-985<br></br>+880-657-1111-576</Text></ListItem>
                  </HStack>
                  
                  

                  <HStack spacing='4'>
                    <HiOutlineMail color='white' size='25px'/>
                    <ListItem><Text color='white' fontFamily='montserrat' as='button'>info@example.com<br></br>info@support.com</Text></ListItem>
                  </HStack>

                  <HStack spacing='4'>
                    <TfiLocationPin color='white' size='25px'/>
                    <ListItem><Text color='white' fontFamily='montserrat' as='button'>168/170, Avenue 01<br></br>Mirpur DOHS, Bangladesh</Text></ListItem>
                  </HStack>
                </List>
                </Stack>
                
              </Stack>
              
            
          
             
              
          
          
          </Stack>
        </Flex>
      <Flex justify='center' bgColor='blue.600' py='4'>
        <Text color='white' fontFamily='montserrat' fontSize='sm'>Copyright 2022 Turio | Design By Egens Lab</Text>
      </Flex>


      
    </>
  )
}

export default Footer