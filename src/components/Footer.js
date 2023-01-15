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
      <VStack spacing='-520px'>
        <Flex
          mt='100'
          bgImage={bgImage2}
          bgBlendMode='hue'
          backgroundSize='center'
          backgroundRepeat="no-repeat"
          backgroundPosition='center'
          h='90vh'
          w='100%'
          justify='space-around'
        >
          <VStack py='100px'>
            <HStack spacing='130px'>
              <Stack spacing='4'>
                <Heading as='h1' size='2xl' color='white' fontFamily='barlow' fontWeight='extrabold' >JOIN US FOR MORE UPDATE</Heading>
                <Text fontSize='sm' color='white' fontFamily='montserrat' >Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.<br></br>
                  Suspendissendt blandit interdum.</Text>
              </Stack>
              <VStack>
                <Button w='150px' h='50px' fontFamily='montserrat' borderRadius='0' fontSize='18px' ghost='solid' bgColor='#54a15d' color='white' border='2px' borderColor='#54a15d' _hover={{ bgColor: 'transparent', color: '#54a15d', border: '2px', borderColor: '#54a15d' }}>Join Now</Button>
              </VStack>
            </HStack>
          </VStack>


        </Flex>

        <Flex bgColor='#1d2326'
          opacity='.95'
          mt='0'
          py='0'
          h='50vh'
          w='100%'
          px='340px'
          

        >
          <HStack spacing='14'>
          <VStack mt='100px' mb='100px'>
         
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
          
         
          </VStack>
          
          <VStack mt='100px' mb='100px'>
         
           
              <Stack spacing='8'>
                <Heading color='white' fontFamily='barlow' as='h1' size='lg' fontWeight='extrabold'>Quick Links</Heading>
               
                <List spacing='2'>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Guide</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Blog Standard</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Contact Us</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Destination</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>FAQ</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Gallery</Text></ListItem>
                </List>
                
                
              </Stack>
              
            
          
         
          </VStack>
          
          <VStack mt='100px' mb='100px'>
          
           
              <Stack spacing='8'>
                <Heading color='white' fontFamily='barlow' as='h1' size='lg' fontWeight='extrabold'>Tour Type</Heading>
               
                <List spacing='2'>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Adventur Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Couple Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Family Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Group Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Holiday Tour</Text></ListItem>
                  <ListItem><Text color='white' fontFamily='montserrat' as='button'>Village Tour</Text></ListItem>
                </List>
                
                
              </Stack>
              
            
          
          
          </VStack>
          <VStack mt='100px' mb='100px'>
          <Stack>
           
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
          
          </VStack>
          </HStack>
         
        </Flex>
       
        
        
      </VStack>
      <Flex justify='center' mt='3'>
        <Text color='white' fontFamily='montserrat' fontSize='sm'>Copyright 2022 Turio | Design By Egens Lab</Text>
      </Flex>
      
    </>
  )
}

export default Footer

