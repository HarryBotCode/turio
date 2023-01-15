import { Button, Card, Flex, Heading, HStack, SimpleGrid, Stack, VStack, Image, Text, Grid, Container, IconButton } from '@chakra-ui/react'
import React from 'react'
import reviewproducts from './reviewproducts.json';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FiClock } from 'react-icons/fi';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';


const Review = () => {
  return (
   
    <Flex 
    bgColor='#767676'
    mt='20'
    >
        
 
 <VStack px='310px' mt='20' mb='10' spacing='10' >
               
                <VStack >
                
                <HStack spacing='500px'>
                    <Stack  >
                       
                    <Heading  as='h1' size='lg' fontSize='46px' fontWeight='extrabold' color='white' fontFamily='barlow'>Upcoming Best Tours</Heading>
                     <Text fontFamily='montserrat' maxW='700px' color='white'>Duis rutrum nisl urna maecenas vel libero faucibus nisi vene natis hendrerit aid lectus suspendissendt.</Text>
                    </Stack>
                    <HStack spacing='12'>
                    <IconButton variant='ghost' color='#4bbc58' _hover={{variant:'ghost', bgColor:'#4bbc58', color:'white', bg:'none'}} icon={<BsArrowLeftCircle  size='28px'/>} >  </IconButton>
                    <IconButton variant='ghost' color='#4bbc58' _hover={{variant:'ghost', bgColor:'#4bbc58', color:'white', bg:'none'}} icon={<BsArrowRightCircle  size='28px'/>} >  </IconButton>
                    
                    </HStack>
                </HStack>

                </VStack> 
       
   
       
                
                <SimpleGrid columns={3} spacing='6'>

               
                


                    {reviewproducts.map((data) => (



                        <Card maxW='100%' mb='10' bgColor='white'   _hover={{bgColor:'#ececec' }}>
                            <VStack spacing='-6'>
                                <Image
                                    src={data.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Button borderRadius='100px' border='0px' borderColor='#54a15d' w='180px' h='50px' fontSize='15px' bgColor='white' variant='outline' color='#54a15d' _hover={{ bgColor: '#54a15d', variant: 'outline', color: 'white' }}><FiClock size='20px'/>&nbsp;&nbsp;&nbsp;3 Days 4 Nights</Button>

                            </VStack>


                            <Stack spacing='4' px='4' mb='6' mt='4'>

                                <Heading as='h3' size='md' color='#2d373c'>{data.name}</Heading>
                                <HStack spacing='16' >
                                    <Button borderRadius='100px' border='1px' borderColor='#54a15d' w='160px' h='40px' fontSize='15px' bgColor='transparent' fontFamily='montserrat' variant='outline' color='#54a15d' _hover={{ bgColor: '#54a15d', variant: 'outline', color: 'white' }}  >BOOK NOW &nbsp;&nbsp;&nbsp;<ArrowForwardIcon size='2px'/></Button>
                                    <Stack spacing='0'>
                                        <Text fontFamily='montserrat' fontWeight='semibold' fontSize='15px' color='#2d373c'>From</Text>
                                        <HStack>
                                            <Text fontSize='20px' fontWeight='extrabold' fontFamily='barlow' color='#54a15d'>{data.price}</Text>
                                            <Text fontSize='15px' fontWeight='semibold' fontFamily='montserrat' color='#2d373c'>Per Person </Text>
                                        </HStack>
                                    </Stack>
                                </HStack>

                            </Stack>

                        </Card>



                    ))}
</SimpleGrid>
<Button borderRadius='0px' border='2px' borderColor='#54a15d' w='180px' h='45px' fontSize='18px' bgColor='#54a15d' variant='outline' color='white' fontFamily='montserrat' _hover={{ bgColor: 'transparent', variant: 'outline', color: '#54a15d' }}>View All Offer</Button>
</VStack>
          
    
    </ Flex>
    
    

   
  )
}

export default Review