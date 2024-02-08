import { CardWrapper } from './CardWrapper'
import { Box, Divider, Typography } from '@mui/material'
import { Person } from '@mui/icons-material'
import Latitude from '../../assets/latitude.png'
import Longitude from '../../assets/longitude.png'

export const CardUserInfo = ({ name, lat, long }:{ name: string, lat: number, long: number }) => {
    return (
        <CardWrapper borderRadius='15px'>
            <Box component='div' display='flex' flexDirection='column' gap={1}>
                <Box component='div' display='flex' flexDirection='column' alignItems='center'>
                    <Person sx={{fontSize: 35}}/>
                    <Typography variant="h6">{ name }</Typography>
                </Box>
                <Divider/>
                <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                    <Box component='img' src={Latitude} alt="Latitude" />
                    <Typography variant="h6">{ lat } lat.</Typography>
                </Box>
                <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                    <Box component='img' src={Longitude} alt="Longitude" />
                    <Typography variant="h6">{ long } long.</Typography>
                </Box>
            </Box>
        </CardWrapper>
    )
}
