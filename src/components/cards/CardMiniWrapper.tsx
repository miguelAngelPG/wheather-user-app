import { Box, CardContent, Typography } from '@mui/material'
import { ReactNode } from 'react'

export const CardMiniWrapper = ({ children, title }: { children: ReactNode, title: string }) => { // Add prop validation for 'children'
    return (
        <Box sx={{borderRadius: '4%',height:'100%', width:'100%', background: '#f0f0f5', position: 'relative'}}>
            <CardContent sx={{height:'100%', width:'100%'}}>
                <Typography variant="body2">{ title }</Typography>
                <Box sx={{display: 'flex', flexWrap: 'nowrap', padding: '10px 0', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
                    { children }
                </Box>
            </CardContent>
        </Box>
    )
}