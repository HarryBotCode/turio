import React from 'react'
import { Flex, Image, HStack, Button, VStack, useDisclosure, Avatar, Heading, CloseButton, Box } from '@chakra-ui/react';
import { BiGridAlt } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


  return (

    <Flex
      bgColor="#464648"
      py='5'
      w='100%'
      justify='center'
      position='fixed'
      align='center'
      bgOpacity="50%"
    
      

    >

      <HStack as='nav' spacing='220px'>
        <HStack as='nav'>
          <Image src={'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/logo2-1.svg'} ></Image>
        </HStack>



        <HStack as='nav' spacing='1px' >

          <Button variant='ghost' fontSize='sm' color='white' _hover={{ bgColor: "#464648", color: '#539d5c' }}>HOME</Button>
          <Button variant='ghost' fontSize='sm' color='white' _hover={{ bgColor: "#464648", color: '#539d5c' }}>DESTINATION</Button>
          <Button variant='ghost' fontSize='sm' color='white' _hover={{ bgColor: "#464648", color: '#539d5c' }}>PACKAGE</Button>
          <Button variant='ghost' fontSize='sm' color='white' _hover={{ bgColor: "#464648", color: '#539d5c' }}>BLOG</Button>
          <Button variant='ghost' fontSize='sm' color='white' _hover={{ bgColor: "#464648", color: '#539d5c' }}>PAGES</Button>
          <Button variant='ghost' fontSize='sm' color='white' _hover={{ bgColor: "#464648", color: '#539d5c' }}>CONTACT US</Button>

        </HStack>
        <HStack spacing='5' as='nav' >
          <Button ref={btnRef} onClick={onOpen} variant='ghost' size='md' rounded='md' borderRadius='200' _hover={{ bgColor: '#539d5c', borderRadius: '200', variant: 'ghost' }}><BiGridAlt color='white' size='22px' /></Button>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            size='md'
          >
            <DrawerOverlay />
            <DrawerContent>

              <DrawerHeader >
                <HStack justify='space-between'>
                  <Heading>Destination</Heading>
                  <Button variant='outline' bgColor='#54a15d' rounded='md' borderRadius='100px' onClick={onClose}>
                    <CloseButton size='xl' color='white' _hover={{color:'black'}}/>
                  </Button>
                </HStack>
              </DrawerHeader>

              <DrawerBody justify='space-around'>
                <VStack spacing='10' mt='10' align='space-between'>
                  



                <HStack justify='space-around' >
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/zena-al-yousef-FGMhOB3phgY-unsplash-1-1.png' />
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}} >Belgium</Button>
                  </VStack>
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/pexels-oleksandr-pidvalnyi-1031659-1-1.png' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Cambodia</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/hanson-lu-_8EFj6ISA08-unsplash-1-1-1.jpg' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>China</Button>
                  </VStack>
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/cuda-destination.jpg' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Cuba</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/frank-chou-P5a-O4ZCX7U-unsplash-1-1.jpg' ></Avatar>
                      <Button  height='100px' width='200px'variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>England</Button>
                  </VStack>
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Image-10-2-1.png' ></Avatar>
                      <Button height='100px' width='200px' svariant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>GrandCanyon</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/shan-elahi-DDiLYt_F88w-unsplash-1-1-1.jpg' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>India</Button>
                  </VStack>
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-2.png' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Newzealand</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/rafael-kellermann-streit-24LIw3veBi4-unsplash-1-1.png' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Paris</Button>
                  </VStack>
                  <VStack>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/usa-destination.jpg' ></Avatar>
                      <Button height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}> America</Button>
                    </VStack>
                  </HStack>



                   


                 

                    
                 

                </VStack>
              </DrawerBody>





            </DrawerContent>
          </Drawer>
          <Button variant='ghost' size='md' borderRadius='200' _hover={{ bgColor: '#539d5c', borderRadius: '200' }}> <BiSearchAlt color='white' size='22px' /> </Button>

        </HStack>

      </HStack>

    </Flex>











  )
}

export default Navbar