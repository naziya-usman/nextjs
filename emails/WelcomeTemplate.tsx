import React from 'react'
import { Html, Body, Text, Link, Preview, Container } from '@react-email/components'



const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome to Our Service!</Preview>
            <Body>
                <Container>
                    <Text> hello {name}</Text>
                    <Link href="https://naziya.com">www.naziya.com</Link>
                </Container>
            </Body>
        </Html>
    )
}

export default WelcomeTemplate
