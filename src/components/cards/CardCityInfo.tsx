import { CardWrapper } from './CardWrapper'
import { Box, Divider, Typography } from '@mui/material'

export const CardCityInfo = ({ country, city, population, state, flag }:{ country: string, city: string, population: number, state: string, flag: string }) => {
    return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1}>
                <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                    <Typography variant="h6">{ country }</Typography>
                    <Box component='img' src={`https://flagsapi.com/${ flag }/flat/32.png`} alt={ country } width='20px' height='20px'/>
                </Box>
                <Divider/>
                <Box component='div' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Typography variant="h6">{ state }</Typography>
                    <Typography variant="h6">{ city }</Typography>
                    <Typography variant="h6">Población { population }</Typography>
                </Box>
            </Box>
        </CardWrapper>
    )
}
