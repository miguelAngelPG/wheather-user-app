import { Box, Grid, Skeleton, Typography } from '@mui/material'
import { CardWrapper } from './CardWrapper'
import { ForecastDay } from './ForecastDay'
import { selectForecastDays } from '../../redux/slices/forecastDaySlice'
import { useSelector } from 'react-redux'

export const CardForecast = () => {

    const forecastState = useSelector(selectForecastDays)

    const { data: forecastWeather, isLoading, error } = forecastState

    if (isLoading) return (
        <CardWrapper borderRadius='20px'>
            <Grid container spacing={0} sx={{minHeight: '250px'}}>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <Grid item xs={12} display='flex' key={index} alignItems='center' justifyContent='space-between' paddingRight={2}>
                            <Box display='flex' alignItems='center'>
                                <Skeleton variant="circular" width={40} height={40} />
                            </Box>
                            <Typography variant="body1" color='text.secondary' sx={{width: '40%'}}>
                                <Skeleton />
                            </Typography>
                            <Typography variant="body1" sx={{width: '20%'}}>
                                <Skeleton />
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </CardWrapper>
    )

    if (error || !forecastWeather) return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' alignItems='center' gap={1}  sx={{minHeight: '250px'}}>
                <Typography variant="h6">Pronóstico no disponible</Typography>
            </Box>
        </CardWrapper>
    )

    const { list: forecastList, city: {timezone}  } = forecastWeather

    return (
        <CardWrapper borderRadius='20px'>
            <Grid container spacing={0} sx={{minHeight: '250px'}}>
                {
                    forecastList.map((forecast, index) => (
                        (index % 8 === 7) && (
                            <ForecastDay
                                key={index}
                                description={forecast.weather[0].description}
                                icon={forecast.weather[0].icon}
                                temp={forecast.main.temp}
                                timezone={timezone}
                                dt={forecast.dt}
                            />
                        )
                    ))
                }
            </Grid>
        </CardWrapper>
    )
}
