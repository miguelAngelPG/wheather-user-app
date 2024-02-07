import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectUserById } from '../redux/slices/usersSlice'
import { PageWrapper } from '../components/PageWrapper'
import { CardWrapper } from '../components/cards/CardWrapper'
import { Air, ArrowBack, CalendarToday, DarkModeOutlined, LocationOn, Person, Thermostat, VisibilityOutlined, WaterDropOutlined, WaterOutlined, WbSunnyOutlined } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
// import Grid2 from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import Latitude from '../assets/latitude.png'
import Longitude from '../assets/longitude.png'
import { air_pollution, currentDay, forecastDay } from '../bd'
import { getDate, getDay, getPressure, getSimpleDate, getTemp, getTime, getVisibity } from '../types/consts'
import { ForecastDay } from '../components/cards/ForecastDay'
import { CardMiniWrapper } from '../components/cards/CardMiniWrapper'
import { CardAirQualityItem } from '../components/cards/CardAirQualityItem'
import { CardByHourWrapper } from '../components/cards/CardByHourWrapper'
import { useState } from 'react'

export const Users = () => {

  const { id } = useParams()
  const user = useSelector((state) => selectUserById(state, id))
  const navigate = useNavigate()

  const handleBackPage = () => navigate('/')

  const [currentWeather/*, setCurrentWeather*/] = useState(currentDay)
  const { weather, main: { humidity, pressure, temp, feels_like }, sys, visibility, dt, timezone, name } = currentWeather
  const { sunrise, sunset, country } = sys
  const { description, icon } = weather[0]
  const [airPollution/*, setAirPollution*/] = useState(air_pollution)
  const [{main: { aqi }, components: { no2, o3, so2, pm2_5 }}] = airPollution.list


  const [forecastWeather/*, setforecastWeather*/] = useState(forecastDay)
  const { list } = forecastWeather
  // const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=21.17429&lon=-86.84656&appid=064a38154d4c70027d24773c077a583e`
  // const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=21.17429&lon=-86.84656&appid=064a38154d4c70027d24773c077a583e`
  // const urlCurrent = `https://api.openweathermap.org/data/2.5/air_pollution?lat=21.17429&lon=-86.84656&appid=064a38154d4c70027d24773c077a583e`

  return (
    <PageWrapper>
      <Box component='header' justifyContent='start' alignItems='center' flexDirection='row' width='100%' display='flex'>
        <Tooltip title="Back home">
            <IconButton onClick={ handleBackPage}>
              <ArrowBack/>
            </IconButton>
        </Tooltip>
      </Box>
      <Divider/>

      <Grid container spacing={3} sx={{paddingBottom: {xs: '16px'}}}>
        <Grid item xs={12} sm={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CardWrapper borderRadius='4%'>
                <Box component='div' position='relative' display='flex' flexDirection='column' marginBottom={1}>
                  <Typography variant="h5">Ahora</Typography>
                  <Typography variant="h3" fontWeight='500' marginBottom={1}>
                    { getTemp(temp) }
                  </Typography>
                  <Typography variant="body2" color='text.secondary'>{ description[0].toUpperCase() + description.slice(1) }</Typography>
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
                    <Box component='span' marginLeft={2}>
                      { name }, { country }
                    </Box>
                  </Typography>
                </Box>
              </CardWrapper>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Previsión para 5 días</Typography>
            </Grid>
            <Grid item xs={12}>
              <CardWrapper borderRadius='4%'>
                <Grid container spacing={0}>
                  <ForecastDay description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } timezone={ currentDay.timezone } dt={ currentDay.dt } />
                  <ForecastDay description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } timezone={ currentDay.timezone } dt={ currentDay.dt } />
                  <ForecastDay description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } timezone={ currentDay.timezone } dt={ currentDay.dt } />
                  <ForecastDay description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } timezone={ currentDay.timezone } dt={ currentDay.dt } />
                  <ForecastDay description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } timezone={ currentDay.timezone } dt={ currentDay.dt } />
                </Grid>
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8} >
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} sm={4}>
                <CardWrapper borderRadius='3%'>
                  <Box component='div' display='flex' flexDirection='column' gap={1}>
                    <Box component='div' display='flex' flexDirection='column' alignItems='center'>
                        <Person sx={{fontSize: 35}}/>
                        <Typography variant="h6">{ user?.name }</Typography>
                    </Box>
                      <Divider/>
                    <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                        <Box component='img' src={Latitude} alt="Latitude" />
                        <Typography variant="h6">{ currentDay.coord.lat }</Typography>
                    </Box>
                    <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                        <Box component='img' src={Longitude} alt="Longitude" />
                        <Typography variant="h6">{ currentDay.coord.lon }</Typography>
                    </Box>
                  </Box>
                </CardWrapper>
              </Grid>
              <Grid item xs={12} sm={6}>

              </Grid>
            </Grid>
            <Grid item xs={12}>
              <CardWrapper borderRadius='2%'>
                <Typography variant="h6" sx={{marginBottom: '15px'}}>Lo más destacado de hoy</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <CardMiniWrapper title='Indice de calidad del aire'>
                      <Air sx={{fontSize: 35}}/>
                      <CardAirQualityItem text1='PM25' text2={ pm2_5 }/>
                      <CardAirQualityItem text1='SO2' text2={ so2 }/>
                      <CardAirQualityItem text1='NO2' text2={ no2 }/>
                      <CardAirQualityItem text1='O3' text2={ o3 }/>
                    </CardMiniWrapper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={6} sm={3}>
                    <CardMiniWrapper title='Humedad'>
                        <WaterDropOutlined sx={{fontSize: 35}}/>
                        <Typography variant="h6" lineHeight='normal'>{ humidity }%</Typography>
                    </CardMiniWrapper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CardMiniWrapper title='Presión'>
                      <WaterOutlined sx={{fontSize: 35}}/>
                      <Typography variant="h6" lineHeight='normal'>{ getPressure(pressure) }</Typography>
                    </CardMiniWrapper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CardMiniWrapper title='Visibilidad'>
                      <VisibilityOutlined sx={{fontSize: 35}}/>
                      <Typography variant="h6" lineHeight='normal'>{ getVisibity(visibility) }</Typography>
                    </CardMiniWrapper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <CardMiniWrapper title='Aparenta'>
                      <Thermostat sx={{fontSize: 35}}/>
                      <Typography variant="h6" lineHeight='normal'>{ getTemp(feels_like) }</Typography>
                    </CardMiniWrapper>
                  </Grid>
                </Grid>
              </CardWrapper>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Hoy a las</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: {xs: 'space-between', sm: 'start'}, overflowX: {xs: 'inherit', sm: 'scroll'} }} >
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
                <Grid item >
                  <CardByHourWrapper description={ currentDay.weather[0].description } icon={ currentDay.weather[0].icon } temp={ currentDay.main.temp } />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}
