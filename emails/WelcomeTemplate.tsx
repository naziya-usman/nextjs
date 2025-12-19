import React from 'react'
import { Html, Body, Text, Link, Preview, Container, Tailwind } from '@react-email/components'



const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome to Our Service!</Preview>
            <Tailwind>
                <Body className="bg-yellow-100 my-auto mx-auto font-sans text-black ">
                    <Container>
                        <Text className='text-3xl font-bold'> hello {name}</Text>
                        <Link href="https://naziya.com">www.naziya.com</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default WelcomeTemplate
