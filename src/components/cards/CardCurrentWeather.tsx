import { useSelector } from 'react-redux'
import { Box, Divider, Skeleton, Typography } from '@mui/material'
import { CalendarToday, LocationOn } from '@mui/icons-material'

import { CardWrapper } from './CardWrapper'
import { selectCurrentWeather } from '@/redux/slices/currentWeatherSlice'
import { capitalizeFirstLetter, getDate, getTemp } from '@/utils/formats'

export const CardCurrentWeather = () => {

    const currentWeatherState = useSelector(selectCurrentWeather)

    const { data: currentWeather, isLoading, error } = currentWeatherState

    if (isLoading) return (
        <CardWrapper borderRadius='20px'>
            <Box component='div' position='relative' display='flex' flexDirection='column' marginBottom={1} sx={{minHeight: '130px', justifyContent: 'space-evenly'}}>
                <Typography variant="h5">
                    <Skeleton animation="wave" sx={{ width: '50%' }}/>
                </Typography>
                <Typography variant="h3" fontWeight='500' marginBottom={1}>
                    <Skeleton animation="wave" sx={{ width: '50%' }}/>
                </Typography>
                <Typography variant="body2" color='text.secondary'>
                    <Skeleton animation="wave" sx={{ width: '50%' }}/>
                </Typography>

                <Skeleton variant="circular" width={60} height={60} sx={{position: 'absolute', right: 0, top: '50%', translate: '-60% -60%'}}/>
            </Box>
            <Divider/>
            <Box component='div' marginTop={2} display='flex' flexDirection='column' sx={{gap: 1}}>
                <Skeleton variant="rectangular" width={'100%'} height={80} />
            </Box>
        </CardWrapper>
    )

    if (error) return (
        <CardWrapper borderRadius='20px'>
            <Typography variant='h5'>Clima actual</Typography>
            <Box component='div' position='relative' display='flex' marginBottom={1} sx={{minHeight: '230px', alignItems: 'center', justifyContent: 'center'}}>
                <Typography variant='h5'>Información no disponible</Typography>
            </Box>
        </CardWrapper>
    )

    if (!currentWeather) return <CardWrapper borderRadius='20px'><Typography>No data</Typography></CardWrapper>

    const { weather, main: { temp }, sys, dt, timezone, name } = currentWeather
    const { country } = sys
    const { description, icon } = weather[0]

    return (
        <CardWrapper borderRadius='20px'>
            <Box component='div' position='relative' display='flex' flexDirection='column' marginBottom={1} sx={{minHeight: '130px'}}>
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
