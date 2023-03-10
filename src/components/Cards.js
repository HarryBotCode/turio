import React from 'react'
import { Heading, Flex, VStack, HStack, Text, Button, Image, Card, Stack, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FiClock } from 'react-icons/fi';
import products from './products.json';
import { extendTheme } from '@chakra-ui/react'


// 2. Update the breakpoints as key-value pairs
const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
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
            
               <VStack px={{base:'20px',sm:'20px',md:'100px',lg:'100px',xl:'100px'}} >
                
                
                    
                    <Stack  spacing={{base:'40px', sm:'40px', md:'none',lg:'none',xl:'none','2xl':'none'}} direction={{base:'column', sm:'column', md:'column', lg:'row', xl:'row', '2xl':'row'}}>
                    
                    <Stack spacing='20px'   >
                       
                                <Heading as='h1' size='lg' fontSize={{base:'35px',sm:'35px',md:'46px',lg:'46px',xl:'46px','2xl':'46px'}} fontWeight='extrabold' color='#2d373c' fontFamily='barlow'>
                                    Best Selling Tours
                                </Heading>
                                <Text fontFamily='montserrat' maxW='700px' color='#2d373c'>
                                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
                                        Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.
                                </Text>
                    </Stack>
                    <Button mt='100px' borderRadius='0px' border='2px' borderColor='#54a15d' w='180px' h='45px' fontSize='18px' bgColor='#54a15d' variant='outline' color='white' fontFamily='montserrat' _hover={{ bgColor: 'transparent', variant: 'outline', color: '#54a15d' }}>View All Tour</Button>
                    
                 
                    </Stack>
                
                
                </VStack> 
              

                {/* CARDS */}
                <VStack px={{base:'20px', sm:'20px', md:'30px',lg:'30px',xl:'30px','2xl':'30px'}} >
                
                <SimpleGrid w='100%' columns={{base:1,sm:1,md:2,xl:3, '2xl':3}} spacing='4'>

               
                


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
                                <HStack spacing={{base:'10', sm:'10', md:'16',lg:'16',xl:'16','2xl':'16'}} >
                                    <Button borderRadius='100px' border='1px' borderColor='#54a15d' w='160px' h='40px' fontSize={{base:'12px', sm:'12px', md:'15px',lg:'15px',xl:'15px','2xl':'15px'}} bgColor='transparent' fontFamily='montserrat' variant='outline' color='#54a15d' _hover={{ bgColor: '#54a15d', variant: 'outline', color: 'white' }}  >BOOK NOW &nbsp;&nbsp;&nbsp;<ArrowForwardIcon size='2px'/></Button>
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