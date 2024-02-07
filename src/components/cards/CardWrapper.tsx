import { Card, CardContent } from '@mui/material'
import { ReactNode } from 'react'

export const CardWrapper = ({ children, borderRadius, padding = '' }: { children: ReactNode, borderRadius: string, padding?: string }) => {
    return (
        <Card sx={{borderRadius,height:'100%', width:'100%'}}>
            <CardContent sx={{height:'100%', width:'100%', padding}}>
                { children }
            </CardContent>
        </Card>
    )
}
