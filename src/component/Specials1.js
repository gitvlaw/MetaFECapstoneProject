import React from "react";
import { Card, CardBody, Heading, VStack, Button, HStack,Text,Image } from '@chakra-ui/react';
import '../style/special.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function Specials() {
    return (
        <>
            <ChakraProvider>
                <VStack className="special">
                    <HStack>
                        <Text>Special</Text>
                        <Button>Online Menu</Button>
                    </HStack>
                    <HStack className="special-card">
                        <Card>
                            <CardBody>
                                <Image src={require('../icons_assets/restaurant.jpg')} alt="Greek Salad" borderRadius='5px'></Image>
                                <VStack mt='6' spacing='3'>
                                    <HStack>
                                        <Heading>Greek Salad</Heading>
                                        <Heading>$12.99</Heading>
                                    </HStack>
                                    <HStack>
                                        <Text>The famous greek salad of crispy letture, pepers, olivers and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</Text>
                                    </HStack>
                                    <HStack>
                                        <Text>Order a delivery</Text>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Image src={require('../icons_assets/restaurant.jpg')} alt="Greek Salad" borderRadius='5px'></Image>
                                <VStack mt='6' spacing='3'>
                                    <HStack>
                                        <Heading>Greek Salad</Heading>
                                        <Heading>$12.99</Heading>
                                    </HStack>
                                    <HStack>
                                        <Text>The famous greek salad of crispy letture, pepers, olivers and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</Text>
                                    </HStack>
                                    <HStack>
                                        <Text>Order a delivery</Text>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Image src={require('../icons_assets/restaurant.jpg')} alt="Greek Salad" borderRadius='5px'></Image>
                                <VStack mt='6' spacing='3'>
                                    <HStack>
                                        <Heading>Greek Salad</Heading>
                                        <Heading>$12.99</Heading>
                                    </HStack>
                                    <HStack>
                                        <Text>The famous greek salad of crispy letture, pepers, olivers and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</Text>
                                    </HStack>
                                    <HStack>
                                        <Text>Order a delivery</Text>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </ChakraProvider>
        </>
    );
}