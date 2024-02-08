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
            <Grid container spacing={0}>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
            </Grid>
        </CardWrapper>
    )

    if (error) return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1}>
                <Typography variant="h6">Error</Typography>
                <Typography variant="h6">Forecast info not available</Typography>
            </Box>
        </CardWrapper>
    )

    if (!forecastWeather) return (
        <CardWrapper borderRadius='20px'>
            <Grid container spacing={0}>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                <Skeleton/>
                No data
            </Grid>
        </CardWrapper>
    )

    const { list: forecastList, city: {timezone}  } = forecastWeather

    return (
        <CardWrapper borderRadius='20px'>
            <Grid container spacing={0}>
            {forecastList.map((forecast, index) => (
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
            ))}
            </Grid>
        </CardWrapper>
    )
}
