import { useSelector } from 'react-redux'
import { Box, Card, CardContent, Divider, Grid, Skeleton, Typography } from '@mui/material'
import { Navigation } from '@mui/icons-material'

import { CardWrapper } from './CardWrapper'
import { capitalizeFirstLetter, getTemp, getTime, mps_to_kmph } from '@/utils/formats'
import { selectForecastDays } from '@/redux/slices/forecastDaySlice'

export const CardForecastSchedule = () => {
    const forecastState = useSelector(selectForecastDays)
    const { data: forecastWeather, isLoading, error } = forecastState

    if (isLoading) return (
        <>
            {
                Array.from({ length: 8 }).map((_, index) => (
                    <Grid item key={ index }>
                        <Card sx={{borderRadius: '4%', height:'100%', width: '115px'}}>
                            <CardContent sx={{height:'100%', width:'100%', padding: '10px 15px !important'}}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="body2">
                                        <Skeleton/>
                                    </Typography>
                                    <Skeleton variant="circular" width={40} height={40} sx={{ margin: 'auto' }}/>
                                    <Typography variant="caption" sx={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} align='center'>
                                        <Skeleton/>
                                    </Typography>
                                    <Typography variant="body2" fontWeight='500' marginBottom={1}>
                                        <Skeleton/>
                                    </Typography>
                                    <Divider sx={{width: '100%', marginBottom: '15px'}}/>
                                    <Typography variant="body2" fontWeight='500' align='center' marginBottom={1}>
                                        <Skeleton/>
                                    </Typography>
                                    <Skeleton variant="circular" width={40} height={40} sx={{ margin: 'auto' }}/>
                                    <Typography sx={{ marginTop: '15px' }} variant="caption">
                                        <Skeleton/>
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </>
    )

    if (error || !forecastWeather) return (
        <>
            <Grid item>
                <CardWrapper borderRadius='15px'>
                    <Typography variant="h6">Pronostico del día</Typography>
                    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1} sx={{ minHeight: '230px', width: '100%'}}>
                        <Typography variant="h6">Información no disponible</Typography>
                    </Box>
                </CardWrapper>
            </Grid>
        </>
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
