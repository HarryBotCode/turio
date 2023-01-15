import React from 'react'
import { Flex, Text, Image, HStack, Button, VStack, useDisclosure, Avatar, CloseButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BiGridAlt } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import { ImPhone } from 'react-icons/im';
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

  const button1 = useDisclosure();
  const button2 = useDisclosure();
  
  const btnRef = React.useRef();
  
  
 
  

  return (

    <Flex
      bgColor="#232325"
      py='5'
      w='100%'
      justifyItems='space-between'
      position= 'fixed'
      px='14'
      opacity='.8'
      top= "0" 
      zIndex='sticky'
      as='nav'
    
    
      

    >
        
      <HStack spacing='320px'  >
        <HStack spacing='400px'>
          <Image  src={'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/logo2-1.svg'} ></Image>
       



        <HStack  spacing='8px' >
       
 
  
  
      <Menu bgColor='#232325' >
         <MenuButton as={Button} variant='ghost' fontFamily='montserrat' fontSize='sm' color='#54a15d'  _hover={{variant:'ghost',  color: '#539d5c', bg:'none'}}>HOME</MenuButton>
         <MenuList bgColor='#232325' border='0px' borderRadius='0px'>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Home One</MenuItem>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Home Two</MenuItem>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Home Three</MenuItem>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Home Four</MenuItem>
          </MenuList>
        </Menu>
          <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c', bg:'none'  }}>DESTINATION</Button>
          <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c',bg:'none'  }}>PACKAGE</Button>
          <Menu bgColor='#232325' >
         <MenuButton as={Button} variant='ghost' fontFamily='montserrat' fontSize='sm' color='#54a15d'  _hover={{  color: '#539d5c', bgColor:'#232325' ,bg:'none' }}>BLOG</MenuButton>
         <MenuList bgColor='#232325' border='0px' borderRadius='0px'>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Blog Grid</MenuItem>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Blog Sidebar</MenuItem>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Blog Standard</MenuItem>
            <MenuItem bgColor='#232325' color='white' _hover={{bgColor:'#54a15d', color:'black'}}>Blog Details</MenuItem>
          </MenuList>
        </Menu>
          <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c',bg:'none'  }}>PAGES</Button>
          <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c', bg:'none'  }}>CONTACT US</Button>

        </HStack>
        
        </HStack>
        
        
        <HStack spacing='4' as='nav' >
        
         <ImPhone color='white'  size='25px' />
            <Text as='button' fontSize='14px' color='white' fontFamily='montserrat' > Hot Line Number <br></br>+880 176 1111 456</Text>
        
            <Button variant='ghost' rounded='base' size='sm' bgSize='40px' borderRadius='100px' ref={btnRef} onClick={button1.onOpen} _hover={{ bgColor: '#539d5c', borderRadius: '100px' }}> <BiGridAlt color='white' size='22px'  /> </Button>

          <Drawer id={1}
            isOpen={button1.isOpen}
            placement='left'
            onClose={button1.onClose}
            finalFocusRef={btnRef}
            size='md'
          >
            <DrawerOverlay />
            <DrawerContent>

              <DrawerHeader >
                <HStack justify='space-between' mt='6' px='4'>
                  <Text fontSize='2xl' fontWeight='semibold' fontFamily='montserrat'>Destination</Text>
                  <Button variant='outline' bgColor='#54a15d' rounded='base' size='md' borderRadius='100px' w='40px' onClick={button1.onClose}>
                    <CloseButton size='sm' color='white'  _hover={{color:'black'}}/>
                  </Button>
                </HStack>
              </DrawerHeader>

              <DrawerBody justify='space-around'>
                <VStack spacing='6' mt='6' align='space-between'>
                  



                <HStack justify='space-around' >
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/zena-al-yousef-FGMhOB3phgY-unsplash-1-1.png' zIndex='sticky' ></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}} >Belgium</Button>
                  </VStack>
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/frank-chou-P5a-O4ZCX7U-unsplash-1-1.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Cambodia</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/hanson-lu-_8EFj6ISA08-unsplash-1-1-1.jpg' zIndex='sticky' ></Avatar>
                      <Button fontFamily='montserrat'  height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>China</Button>
                  </VStack>
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/cuda-destination.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Cuba</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/frank-chou-P5a-O4ZCX7U-unsplash-1-1.jpg' zIndex='sticky' ></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>England</Button>
                  </VStack>
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/usa-destination.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}> Grand Canyon</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/shan-elahi-DDiLYt_F88w-unsplash-1-1-1.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>India</Button>
                  </VStack>
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-2.png' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Newzealand</Button>
                    </VStack>
                  </HStack>
                <HStack justify='space-around' >
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/rafael-kellermann-streit-24LIw3veBi4-unsplash-1-1.png' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}>Paris</Button>
                  </VStack>
                  <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/usa-destination.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{bgColor:'#54a15d', color:'white'}}> America</Button>
                    </VStack>
                  </HStack>


                </VStack>
              </DrawerBody>


                   
            </DrawerContent>
          </Drawer>
          
         


          <Button variant='ghost' mr={3} ref={btnRef} id={2} onClick={button2.onOpen} size='sm' borderRadius='70px' _hover={{ bgColor: '#539d5c', borderRadius: '70px' }}> <BiSearchAlt color='white' size='20px' /> </Button>
      <Drawer id={2}
        isOpen={button2.isOpen}
        placement='top'
        onClose={button2.onClose}
        finalFocusRef={btnRef}
        
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
           
              

            
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </HStack>
        
      </HStack>
      
    </Flex>

)
}

export default Navbar










