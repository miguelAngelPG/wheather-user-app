import { Box, Typography } from '@mui/material'

export const CardAirQualityItem = ({ text1, text2 }: { text1: string, text2: number }) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Typography variant="button" lineHeight='normal'>{ text1 }</Typography>
            <Typography variant="h6" lineHeight='normal'>{ text2.toPrecision(3) }</Typography>
        </Box>
    )
}
