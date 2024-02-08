import { selectForecastDays } from '../../redux/slices/forecastDaySlice'
import { useSelector } from 'react-redux'
import { Box, Card, CardContent, Divider, Grid, Skeleton, Typography } from '@mui/material'
import { CardWrapper } from './CardWrapper'
import { Navigation } from '@mui/icons-material'
import { capitalizeFirstLetter, getTemp, getTime, mps_to_kmph } from '../../types/consts'

export const CardForecastSchedule = () => {
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
        <>
            {
                forecastList.slice(0, 8).map((data, index) => {

                    const {
                      dt,
                      main: { temp },
                      weather: [{ description, icon }],
                      wind: { speed: windSpeed, deg: windDirection }
                    } = data

                    return (
                      <Grid item key={ index }>
                            <Card sx={{borderRadius: '4%', height:'100%', width: '115px'}}>
                                <CardContent sx={{height:'100%', width:'100%', padding: '10px 15px !important'}}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Typography variant="body2">{ getTime(dt, timezone) }</Typography>
                                        <Box component='img' height={'70px'} alt={ description } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} />
                                        <Typography variant="caption" sx={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} align='center'>{ capitalizeFirstLetter(description) }</Typography>
                                        <Typography variant="body2" fontWeight='500' marginBottom={1}>
                                            { getTemp(temp) }
                                        </Typography>
                                        <Divider sx={{width: '100%', marginBottom: '15px'}}/>
                                        <Typography variant="body2" fontWeight='500' align='center' marginBottom={1}>Viento</Typography>
                                        <Navigation sx={{ fontSize: 35, transform:`rotate(${windDirection - 180}deg)` }} />
                                        <Typography sx={{ marginTop: '15px' }} variant="caption">{ mps_to_kmph(windSpeed).toPrecision(3) } km/h</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                      </Grid>
                    )
                  })
            }
        </>
    )
}
