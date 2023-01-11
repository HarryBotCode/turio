import React from 'react'
import { Heading, Flex ,VStack, HStack, Text, Button,ListItem,List, Image} from '@chakra-ui/react';

const Cards = () => {
    return (
        <Flex h='100vh'>
        <HStack  px='40' >
                <VStack  mt='24'>
                    <List>
                    <ListItem>
                    <Heading as='h1' fontSize='50px' fontWeight='extrabold' fontFamily='body'>
                        Best Selling Tours
                    </Heading>
                    </ListItem>
                    <ListItem>
                        <HStack spacing='24'>
                        <Text fontFamily='montserrat' >
                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.
                        </Text>
                        <Button w='200px' h='50px' bgColor='#54a15d' variant='outline' color='white' borderRadius='0px' border='2px' borderColor='#54a15d'_hover={{bgColor : 'transparent', variant:'outline', color:'#54a15d'}}>View All Tour</Button>
                        </HStack>
                        
                        </ListItem>
                        </List>
              

               <HStack>
                <VStack> 
                    <Image src='https://turio-wp.b-cdn.net/wp-content/uploads/2022/07/Destination-Image-10-1.jpg'/>
                    <Button variant='solid'>3 days 4 nights</Button>
                    <Heading>Valley</Heading>
                        <HStack>
                            <Button variant='solid'>Book now</Button>
                            <Text>$59 per person</Text>
                        </HStack>
                </VStack>
               
                    
                    

               </HStack>
                    
                           
                    
               </VStack>    
          
          
          
      
       </HStack>
       </Flex>
        
        
    )
}

export default Cards