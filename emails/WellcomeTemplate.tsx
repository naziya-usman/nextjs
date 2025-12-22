import React from 'react'
import { Html, Head, Preview, Body, Container, Heading, Hr, Text, } from '@react-email/components'
const WellcomeTemplate = () => {
    return (
        <Html>
            <Head />
            <Preview>Welcome to our platform!</Preview>
            <Body>
                <Container>
                    <Heading>Welcome to our platform!</Heading>
                    <Hr />
                    <Text>Thanks for joining us.</Text>
                </Container>
            </Body>
        </Html>
    )
}

export default WellcomeTemplate
