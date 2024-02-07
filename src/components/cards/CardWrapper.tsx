import { Card, CardContent } from '@mui/material'
import { ReactNode } from 'react'

export const CardWrapper = ({ children, borderRadius }: { children: ReactNode, borderRadius: string }) => { // Add prop validation for 'children'
    return (
        <Card sx={{borderRadius,height:'100%', width:'100%'}}>
            <CardContent sx={{height:'100%', width:'100%'}}>
                { children }
            </CardContent>
        </Card>
    )
}
