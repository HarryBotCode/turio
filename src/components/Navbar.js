import React from 'react'
import { Flex, Text, Image, HStack, Button, VStack, useDisclosure, Avatar, CloseButton, Menu, MenuButton, MenuList, MenuItem, IconButton, ButtonGroup, Stack, Divider, Link, Heading,  SimpleGrid, Card, CardBody, PopoverTrigger, Popover, List, ListItem, PopoverContent } from '@chakra-ui/react';
import { BiGridAlt } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import { ImPhone } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { CgMenuMotion } from 'react-icons/cg';
import { FiClock } from 'react-icons/fi';
import { TbArrowBigUpLines } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';


import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'


const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const Navbar = () => {

  const button1 = useDisclosure();
  const button2 = useDisclosure();
  const button3 = useDisclosure();

  const btnRef = React.useRef();





  return (

    <Flex
      bgColor="#232325"
      py={{base:'3', sm:'3', md:'5',lg:'5',xl:'5','2xl':'5'}}
      w='100%'
      justifyContent='space-between'
      position='fixed'
      px={{base:'4', sm:'6', md:'10', lg:'12', xl:'14'}}
      opacity='.85'
      top="0"
      zIndex='sticky'
      as='nav'





    >


      <HStack >
        <Image src={'https://www.turio-wp.egenslab.com/wp-content/uploads/2022/10/logo2-1.svg'}  />

      </HStack>


      <HStack spacing='8px' >

        <Popover  trigger='hover' placement='top-start'>
          
          <PopoverTrigger >
            <ButtonGroup spacing='-20px' display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'unset', '2xl': 'unset' }}>
              <Button  variant='ghost' fontFamily='montserrat' fontSize='sm' color='#54a15d' _hover={{ variant: 'ghost', color: '#539d5c', bg: 'transparent' }}>HOME</Button>
              <Button as={IconButton} px='0px' bgColor='transparent' _hover={{transition:'.6s', transform: 'rotate(-180deg)', bgColor:'transparent'}} icon={<AiOutlinePlus color='#54a15d'/>}/>
            </ButtonGroup>
          </PopoverTrigger>
          <PopoverContent bgColor='rgba(35,35,37,.5)' border='0px'  w='250px'  >
          
          <List spacing='10px' bgColor='rgba(35,35,37)' >
            <ListItem  px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Home One</ListItem>
            <ListItem  px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Home Two</ListItem>
            <ListItem  px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Home Three</ListItem>
            <ListItem  px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Home Four</ListItem>
          </List>
          
          </PopoverContent>
        </Popover>
            



          
          
         
        <Button display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'unset', '2xl': 'unset' }} variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>DESTINATION</Button>
        <Button display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'unset', '2xl': 'unset' }} variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>PACKAGE</Button>
        
        <Popover  trigger='hover' placement='top-start'>
          
          <PopoverTrigger >
            <ButtonGroup spacing='-20px' display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'unset', '2xl': 'unset' }}>
              <Button  variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ variant: 'ghost', color: '#539d5c', bg: 'transparent' }}>BLOG</Button>
              <IconButton  px='0px' bgColor='transparent' _hover={{transition:'.6s', transform: 'rotate(-180deg)', bgColor:'transparent'}} icon={<AiOutlinePlus color='#54a15d'/>}/>
            </ButtonGroup>
          </PopoverTrigger>
          <PopoverContent bgColor='rgba(35,35,37,.5)' border='0px'  w='250px'>
          
          <List spacing='10px' bgColor='rgba(35,35,37)'>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Blog Grid</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Blog Sidebar</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Blog Standard</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Blog Details</ListItem>
          </List>
          
          </PopoverContent>
        </Popover>
            
        <Popover trigger='hover' placement='top-start' >
          
          <PopoverTrigger >
            <ButtonGroup spacing='-20px' display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'unset', '2xl': 'unset' }}>
              <Button  variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ variant: 'ghost', color: '#539d5c', bg: 'transparent' }}>PAGES</Button>
              <Button as={IconButton} px='0px' bgColor='transparent' _hover={{transition:'.6s', transform: 'rotate(-180deg)', bgColor:'transparent'}} icon={<AiOutlinePlus color='#54a15d' />} />
            </ButtonGroup>
          </PopoverTrigger>
          <PopoverContent bgColor='rgba(35,35,37,.5)' border='0px'  w='250px'>
          
          <List spacing='10px' bgColor='rgba(35,35,37)'>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Guide</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Gallery</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>FAQ</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>Error</ListItem>
            <ListItem px='10px' bgColor='rgba(35,35,37,.5)' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }} fontFamily='montserrat'>SubMenu</ListItem>
          </List>
          
          </PopoverContent>
        </Popover>

        <Button display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'unset', '2xl': 'unset' }} variant='ghost' fontFamily='montserrat' fontSize='sm' color='white' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>CONTACT US</Button>

      </HStack>




      <HStack spacing='2' as='nav' >
        <HStack>
          <IconButton display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'none', '2xl': 'unset' }} variant='ghost' bgColor='none' _hover={{ variant: 'ghost' }}>
            <ImPhone color='white' size='25px' />
          </IconButton>

          <Text display={{ base: 'none', md: 'none', sm: 'none', lg: 'none', xl: 'none', '2xl': 'unset' }} as='button' fontSize='14px' color='white' fontFamily='montserrat' > Hot Line Number <br></br>+880 176 1111 456</Text>
        </HStack>

      {/*----- GRID BUTTON------- */}

        <ButtonGroup spacing='2'>
          <Button display={{ base: 'none', md: 'none', sm: 'none', lg: 'unset', xl: 'unset', '2xl': 'unset' }} variant='ghost' rounded='base' size='sm' bgSize='40px' borderRadius='100px' ref={btnRef} onClick={button1.onOpen} _hover={{ bgColor: '#539d5c', borderRadius: '100px' }}> <BiGridAlt color='white' size='22px' /> </Button>

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
                    <CloseButton size='sm' color='white' _hover={{ color: 'black' }} />
                  </Button>
                </HStack>
              </DrawerHeader>

              <DrawerBody justify='space-around'>
                <VStack spacing='6' mt='6' align='space-between'>




                  <HStack justify='space-around' >
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/zena-al-yousef-FGMhOB3phgY-unsplash-1-1.png' zIndex='sticky' ></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }} >Belgium</Button>
                    </VStack>
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/frank-chou-P5a-O4ZCX7U-unsplash-1-1.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>Cambodia</Button>
                    </VStack>
                  </HStack>
                  <HStack justify='space-around' >
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/hanson-lu-_8EFj6ISA08-unsplash-1-1-1.jpg' zIndex='sticky' ></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>China</Button>
                    </VStack>
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/cuda-destination.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>Cuba</Button>
                    </VStack>
                  </HStack>
                  <HStack justify='space-around' >
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/frank-chou-P5a-O4ZCX7U-unsplash-1-1.jpg' zIndex='sticky' ></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>England</Button>
                    </VStack>
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/usa-destination.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}> Grand Canyon</Button>
                    </VStack>
                  </HStack>
                  <HStack justify='space-around' >
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/shan-elahi-DDiLYt_F88w-unsplash-1-1-1.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>India</Button>
                    </VStack>
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/Facebook-2.png' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>Newzealand</Button>
                    </VStack>
                  </HStack>
                  <HStack justify='space-around' >
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/07/rafael-kellermann-streit-24LIw3veBi4-unsplash-1-1.png' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}>Paris</Button>
                    </VStack>
                    <VStack spacing='-8'>
                      <Avatar size='lg' src='https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/usa-destination.jpg' zIndex='sticky'></Avatar>
                      <Button fontFamily='montserrat' height='100px' width='200px' variant='outline' _hover={{ bgColor: '#54a15d', color: 'white' }}> America</Button>
                    </VStack>
                  </HStack>


                </VStack>
              </DrawerBody>



            </DrawerContent>
          </Drawer>


        {/* --------SEARCH BUTTON-------- */}

          <Button  variant='ghost' mr={3} ref={btnRef} id={2} onClick={button2.onOpen} size='sm' borderRadius='70px'  _hover={{ bgColor: '#539d5c', borderRadius: '70px' }}> <BiSearchAlt color='white' size='20px' /> </Button>
          <Drawer id={2}
            isOpen={button2.isOpen}
            placement='top'
            onClose={button2.onClose}
            finalFocusRef={btnRef}
            size='full'
            
            
            
            >
              <DrawerOverlay />
              <DrawerContent  bgColor="rgb(37,33,31,.5)" 
     >
                <DrawerCloseButton color='white' />
  
  
                <DrawerBody px='50px' >
  
                 
                   
  
                      
                      <SimpleGrid px={{base:'25px', sm:'25px', md:'25px',lg:'25px',xl:'100px','2xl':'350px'}} py='15px' mt={{base:'100px', sm:'100px', md:'260px',lg:'260px',xl:'350px','2xl':'370px'}}  borderRadius='10px' templateColumns='repeat(auto-fill, minmax(210px, 1fr))' opacity='revert' bgColor='white' >
                        
                        <Card bgColor='white' maxW='100%' opacity='unset' mt='0' >
                          <CardBody >
                        <HStack>
                        <IoLocationOutline color='green' size='35px'/>
                        <Stack>
                          <Heading as='h1' size='sm' fontFamily='barlow' >
                            Destination
                          </Heading>
                          <Menu>
                            <MenuButton fontSize='xs' _hover={{variant:'ghost'}} fontFamily='montserrat' as={Link} variant='ghost' display='inline' rightIcon={<AiFillCaretDown color='black'/>} >
                              Where Are You Going? 
                            </MenuButton>
                            <MenuList>
                              <MenuItem>Download</MenuItem>
                              <MenuItem>Create a Copy</MenuItem>
                              <MenuItem>Mark as Draft</MenuItem>
                              <MenuItem>Delete</MenuItem>
                              <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                          </Menu>
                        </Stack>
                      </HStack> 
                      </CardBody>
                        </Card>
                        <Card bgColor='white' maxW='100%' opacity='unset' >
                          <CardBody >
                        <HStack>
                        <CgMenuMotion color='green' size='35px'/>
                        <Stack>
                          <Heading as='h1' size='sm' fontFamily='barlow' >
                            Travel Type
                          </Heading>
                          <Menu>
                            <MenuButton fontSize='xs' _hover={{variant:'ghost'}} fontFamily='montserrat' as={Link} variant='ghost' display='inline' icon={<AiFillCaretDown />} >
                              All Activity
                            </MenuButton>
                            <MenuList>
                              <MenuItem>City Tour</MenuItem>
                              <MenuItem>Vacation Tour</MenuItem>
                              <MenuItem>Couple Tour</MenuItem>
                              <MenuItem>Adventure Tour</MenuItem>
                              <MenuItem>Group Tour</MenuItem>
                            </MenuList>
                          </Menu>
                        </Stack>
                      </HStack> 
                      </CardBody>
                        </Card>
                        <Card bgColor='white' maxW='100%' opacity='unset' >
                          <CardBody >
                        <HStack>
                        <FiClock color='green' size='35px'/>
                        <Stack>
                          <Heading as='h1' size='sm' fontFamily='barlow' >
                            Duration
                          </Heading>
                          <Menu>
                            <MenuButton fontSize='xs' _hover={{variant:'ghost'}} fontFamily='montserrat' as={Link} variant='ghost' display='inline' icon={<AiFillCaretDown />} >
                             Please type duration 
                            </MenuButton>
                            
                          </Menu>
                        </Stack>
                      </HStack> 
                      </CardBody>
                        </Card>
                        <Card bgColor='white' maxW='100%' opacity='unset' >
                          <CardBody >
                        <HStack>
                        <TbArrowBigUpLines color='green' size='35px'/>
                        <Stack>
                          <Heading as='h1' size='sm' fontFamily='barlow' >
                            Journey Date
                          </Heading>
                          <Menu>
                            <MenuButton fontSize='xs' _hover={{variant:'ghost'}} fontFamily='montserrat' as={Link} variant='ghost' display='inline' icon={<AiFillCaretDown />} >
                              Select your date 
                            </MenuButton>
                           
                          </Menu>
                        </Stack>
                      </HStack> 
                      </CardBody>
                        </Card>
                        
                        <Button ml='20px' h={{base:'50px', sm:'50px', md:'90px',lg:'90px',xl:'90px','2xl':'90px'}} border='2px' borderColor='54a15d' fontSize={{base:'14px', sm:'14px', md:'20px',lg:'20px',xl:'20px','2xl':'20px'}} color='white' bgColor='#54a15d' fontWeight='extrabold' fontFamily='montserrat' _hover={{bgColor:'white', color:'#54a15d', borderColor:'#54a15d'}}>Find Now</Button>
                        
                      </SimpleGrid>
                    
                     
                
                </DrawerBody>
  
  
              </DrawerContent>
            </Drawer>
    
                {/* HAMBURGER BUTTON */}
    
            <Button variant='ghost' mr={3} ref={btnRef} id={3} size='sm' borderRadius='70px' _hover={{ bgColor: '#539d5c', borderRadius: '70px' }} display={{ md: 'unset', sm: 'unset', lg: 'none', xl: 'none', '2xl': 'none' }}   colorScheme='teal' onClick={button3.onOpen}>
              <GiHamburgerMenu color='white' size='20px' />
            </Button>
            <Drawer
              isOpen={button3.isOpen}
              placement='left'
              onClose={button3.onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
               
                <DrawerHeader><Image src='https://turio-wp.b-cdn.net/wp-content/uploads/2022/10/logo-1-1-1.svg' /></DrawerHeader>
                <Stack spacing='0'>
                  <DrawerBody>
  
                    <Divider />
                    <Menu bgColor='#232325' >
                      <MenuButton as={Button} variant='ghost' fontFamily='montserrat' fontSize='sm' color='#54a15d' _hover={{ variant: 'ghost', color: '#539d5c', bg: 'none' }}>HOME</MenuButton>
                      <MenuList bgColor='#232325' border='0px' borderRadius='0px'>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Home One</MenuItem>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Home Two</MenuItem>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Home Three</MenuItem>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Home Four</MenuItem>
                      </MenuList>
                    </Menu>
                    <Divider />
                    <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='black' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>DESTINATION</Button>
                    <Divider />
                    <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='black' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>PACKAGE</Button>
                    <Divider />
                    <Menu bgColor='#232325' >
                      <MenuButton as={Button} variant='ghost' fontFamily='montserrat' fontSize='sm' color='black' _hover={{ color: '#539d5c', bgColor: '#232325', bg: 'none' }}>BLOG</MenuButton>
                      <MenuList bgColor='#232325' border='0px' borderRadius='0px'>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Blog Grid</MenuItem>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Blog Sidebar</MenuItem>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Blog Standard</MenuItem>
                        <MenuItem bgColor='#232325' color='white' _hover={{ bgColor: '#54a15d', color: 'black' }}>Blog Details</MenuItem>
                      </MenuList>
                    </Menu>
                    <Divider />
                    <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='black' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>PAGES</Button>
                    <Divider />
                    <Button variant='ghost' fontFamily='montserrat' fontSize='sm' color='black' _hover={{ bgColor: "none", color: '#539d5c', bg: 'none' }}>CONTACT US</Button>
                    <Divider />
  
  
  
                  </DrawerBody>
                </Stack>
  
                <Stack mt='20px' px='25px' spacing='4'>
                  <HStack>
                    <ImPhone color='black' size='22px' />
                    <Text as={Link} >
                      +1 763-227-5032
                    </Text>
                  </HStack>
                  <HStack>
                    <MdEmail color='black' size='22px' />
                    <Text as={Link} >
                      info@example.com
                    </Text>
                  </HStack>
                </Stack>
                <Divider />
  
  
              </DrawerContent>
            </Drawer>
          </ButtonGroup>
        </HStack>
  
  
  
      </Flex>
  
    )
  }
  
  export default Navbar