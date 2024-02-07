import { ReactNode } from 'react'
import { Box, Container } from '@mui/material'

export function PageWrapper({ children }: { children: ReactNode}) {
    return (
        <Container maxWidth='lg'>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minHeight="100dvh"
            >
                { children }
            </Box>
        </Container>
    )
}
