import { ReactNode } from 'react'
import { Box, Container } from '@mui/material'

export function Wrapper({ children }: { children: ReactNode}) {
    return (
        <Container maxWidth='lg'>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minHeight="100vh"
            >
                { children }
            </Box>
        </Container>
    )
}
