import { Box, Grid, Skeleton, Typography } from '@mui/material'
import { CardWrapper } from './CardWrapper'
import { CardMiniWrapper } from './CardMiniWrapper'
import { Air, DarkModeOutlined, Thermostat, VisibilityOutlined, WaterDropOutlined, WaterOutlined, WbSunnyOutlined } from '@mui/icons-material'
import { CardAirQualityItem } from './CardAirQualityItem'
import { getPressure, getTemp, getTime, getVisibity } from '../../types/consts'
import { useSelector } from 'react-redux'
import { selectCurrentWeather } from '../../redux/slices/currentWeatherSlice'
import { selectAirPollution } from '../../redux/slices/airPollutionSlice'

export const CardAirPollution = () => {

    const currentWeatherState = useSelector(selectCurrentWeather)
    const { data: currentWeather, isLoading: isLoadingWeather, error: errorWeather } = currentWeatherState
    const airPollutionState = useSelector(selectAirPollution)
    const { data: airPollution, isLoading: isLoadingAirPollution, error: errorAirPollution } = airPollutionState

    if (isLoadingAirPollution || isLoadingWeather) return (
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

    if (errorAirPollution || errorWeather) return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1}>
                <Typography variant="h6">Error</Typography>
                <Typography variant="h6">Air Pollution info not available</Typography>
            </Box>
        </CardWrapper>
    )

    if (!airPollution || !currentWeather) return (
        <CardWrapper borderRadius='20px'>
            <Typography variant="h6">No data</Typography>
        </CardWrapper>
    )

    const { main: { humidity, pressure, feels_like }, sys, visibility, timezone } = currentWeather
    const { sunrise, sunset } = sys

    const { list: airPollutionList } = airPollution
    const [{main: { aqi }, components: { no2, o3, so2, pm2_5 }}] = airPollutionList

    return (
        <CardWrapper borderRadius='20px'>
            <Typography variant="h6" sx={{marginBottom: '15px'}}>Lo más destacado de hoy</Typography>
            <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <CardMiniWrapper title='Amanecer y atardecer '>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '15px'}}>
                    <WbSunnyOutlined sx={{fontSize: 35}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', height: '100%'}}>
                        <Typography variant="caption" lineHeight='normal'>Amanecer</Typography>
                        <Typography variant="h6" lineHeight='normal'>{ getTime(sunrise, timezone) }</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', gap: '15px'}}>
                    <DarkModeOutlined sx={{fontSize: 35}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', height: '100%'}}>
                        <Typography variant="caption" lineHeight='normal'>Atardecer</Typography>
                        <Typography variant="h6" lineHeight='normal'>{ getTime(sunset, timezone) }</Typography>
                    </Box>
                </Box>
                </CardMiniWrapper>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ display: {sm: 'none', lg: 'block' } }}>
                <CardMiniWrapper title='Indice de calidad del aire' aqi={ aqi }>
                <Air sx={{fontSize: 35}}/>
                <CardAirQualityItem text1='PM25' text2={ pm2_5 }/>
                <CardAirQualityItem text1='SO2' text2={ so2 }/>
                <CardAirQualityItem text1='NO2' text2={ no2 }/>
                <CardAirQualityItem text1='O3' text2={ o3 }/>
                </CardMiniWrapper>
            </Grid>
            <Grid item xs={6} sm={12} lg={3}>
                <CardMiniWrapper title='Humedad'>
                    <WaterDropOutlined sx={{fontSize: 35}}/>
                    <Typography variant="h6" lineHeight='normal'>{ humidity }%</Typography>
                </CardMiniWrapper>
            </Grid>
            <Grid item xs={6} sm={12} lg={3}>
                <CardMiniWrapper title='Presión'>
                <WaterOutlined sx={{fontSize: 35}}/>
                <Typography variant="h6" lineHeight='normal'>{ getPressure(pressure) }</Typography>
                </CardMiniWrapper>
            </Grid>
            <Grid item xs={6} sm={12} lg={3} sx={{ display: {sm: 'none', lg: 'block' } }}>
                <CardMiniWrapper title='Visibilidad'>
                <VisibilityOutlined sx={{fontSize: 35}}/>
                <Typography variant="h6" lineHeight='normal'>{ getVisibity(visibility) }</Typography>
                </CardMiniWrapper>
            </Grid>
            <Grid item xs={6} sm={12} lg={3} sx={{ display: {sm: 'none', lg: 'block' } }}>
                <CardMiniWrapper title='Aparenta'>
                <Thermostat sx={{fontSize: 35}}/>
                <Typography variant="h6" lineHeight='normal'>{ getTemp(feels_like) }</Typography>
                </CardMiniWrapper>
            </Grid>
            </Grid>
        </CardWrapper>
    )
}
