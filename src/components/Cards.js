import React from 'react'
import { Heading, Flex ,VStack, HStack, Text, Button,ListItem,List} from '@chakra-ui/react';

const Cards = () => {
    return (
        <Flex h='50vh'>
        <HStack  px='40' >
                <VStack  mt='24'>
                    <List>
                    <ListItem>
                    <Heading as='h1' fontSize='50px' noOfLines={1}>
                        Best Selling Tours
                    </Heading>
                    </ListItem>
                    <ListItem>
                        <HStack spacing='24'>
                        <Text  >
                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur.
                        </Text>
                        <Button w='200px' h='50px' bgColor='#54a15d' variant='outline' color='white' borderRadius='0px' border='2px' borderColor='#54a15d'_hover={{bgColor : 'transparent', variant:'outline', color:'#54a15d'}}>View All Tour</Button>
                        </HStack>
                        
                        </ListItem>
                        </List>
               </VStack>
                    
                           
                    
                   
          
          
          
      
       </HStack>
       </Flex>
        
        
    )
}

export default Cards