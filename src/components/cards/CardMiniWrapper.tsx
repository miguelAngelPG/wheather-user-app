import { aqiText } from '../../types/consts'
import { Box, CardContent, Typography } from '@mui/material'
import { ReactNode } from 'react'

export const CardMiniWrapper = ({ children, title, aqi = null }: { children: ReactNode, title: string, aqi?: number | null }) => {
    return (
        <Box sx={{borderRadius: '10px',height:'100%', width:'100%', background: '#f0f0f5', position: 'relative'}}>
            <CardContent sx={{height:'100%', width:'100%'}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant="body2">{ title }</Typography>
                    { aqi !== null && <Typography sx={{ background: aqiText[aqi].color, padding: '3px 15px', borderRadius: '30px'}} variant="body2">{ aqiText[aqi].title.toString() }</Typography>}
                </Box>
                <Box sx={{display: 'flex', flexWrap: 'nowrap', padding: '10px 0', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
                    { children }
                </Box>
            </CardContent>
        </Box>
    )
}