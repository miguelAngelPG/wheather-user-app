import { Box, Divider, Typography } from '@mui/material'
import { CardWrapper } from './CardWrapper'
import { CalendarToday, LocationOn } from '@mui/icons-material'
import { capitalizeFirstLetter, getDate, getTemp } from '../../types/consts'
import { selectCurrentWeather } from '../../redux/slices/currentWeatherSlice'
import { useSelector } from 'react-redux'

export const CardCurrentWeather = () => {

    const currentWeatherState = useSelector(selectCurrentWeather)

    const { data: currentWeather, isLoading, error } = currentWeatherState

    if (isLoading) return <CardWrapper borderRadius='20px'><Typography>Loading...</Typography></CardWrapper>

    if (error) return <CardWrapper borderRadius='20px'><Typography>Error</Typography></CardWrapper>

    if (!currentWeather) return <CardWrapper borderRadius='20px'><Typography>No data</Typography></CardWrapper>

    const { weather, main: { temp }, sys, dt, timezone, name } = currentWeather
    const { country } = sys
    const { description, icon } = weather[0]

    return (
        <CardWrapper borderRadius='20px'>
            <Box component='div' position='relative' display='flex' flexDirection='column' marginBottom={1}>
            <Typography variant="h5">Ahora</Typography>
            <Typography variant="h3" fontWeight='500' marginBottom={1}>
                { getTemp(temp) }
            </Typography>
            <Typography variant="body2" color='text.secondary'>{ capitalizeFirstLetter(description) }</Typography>
            <Box sx={{position: 'absolute', right: 0, top: '50%', translate: '-10% -50%'}} component='img' alt={ description } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} />
            </Box>
            <Divider/>
            <Box component='div' marginTop={2} display='flex' flexDirection='column' sx={{gap: 1}}>
            <Typography variant="body2" color="text.secondary" display='flex' alignItems='center'>
                <CalendarToday/>
                <Box component='span' marginLeft={2}>
                { getDate(dt, timezone) }
                </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" display='flex' alignItems='center'>
                <LocationOn/>
                <Box component='span' marginLeft={2} marginRight={2}>
                { name }, { country }
                </Box>
                <Box component='img' src={`https://flagsapi.com/${ country }/flat/32.png`} alt={ country } width='20px' height='20px'/>
            </Typography>
            </Box>
        </CardWrapper>
    )
}
