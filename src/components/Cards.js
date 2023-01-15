import React from 'react'
import { Heading, Flex, VStack, HStack, Text, Button, Image, Card, Stack, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FiClock } from 'react-icons/fi';
import products from './products.json';
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })


const Cards = () => {
    return (
        <Flex 
        w='100%'
        mt='20'
        
        >
        
        
           
        
        
        
           
            <VStack mt='100' spacing='20' >
            
               <VStack>
                
                <HStack spacing='400px'>
                    <Stack  >
                       
                                <Heading as='h1' size='lg' fontSize='46px' fontWeight='extrabold' color='#2d373c' fontFamily='barlow'>
                                    Best Selling Tours
                                </Heading>
                                <Text fontFamily='montserrat' maxW='700px' color='#2d373c'>
                                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
                                        Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.
                                </Text>
                    </Stack>
                    <Button borderRadius='0px' border='2px' borderColor='#54a15d' w='180px' h='45px' fontSize='18px' bgColor='#54a15d' variant='outline' color='white' fontFamily='montserrat' _hover={{ bgColor: 'transparent', variant: 'outline', color: '#54a15d' }}>View All Tour</Button>
                </HStack>

                </VStack> 
              

                {/* CARDS */}
                
               <VStack px='310px'>
                
                <SimpleGrid columns={3} spacing='6'>

               
                


                    {products.map((data) => (



                        <Card maxW='100%' mb='10'  _hover={{bgColor:'#ececec' }} >
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

        </VStack>
                        <Button borderRadius='100px' border='2px' borderColor='#54a15d' w='150px' h='45px' fontSize='15px' bgColor='#54a15d' variant='outline' color='white' fontFamily='montserrat' _hover={{ bgColor: 'transparent', variant: 'outline', color: '#54a15d' }}>View All</Button>
                        
        </VStack>
        </Flex>

    )
}

export default Cards
                           
                            
                              
                                    
                             

                           
                        







            
          
            
               
  
