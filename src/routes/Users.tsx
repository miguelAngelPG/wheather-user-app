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
import Temp from '../assets/temp.png'
import { air_pollution, currentDay, forecastDay } from '../bd'
import { capitalizeFirstLetter, getDate, getPressure, getTemp, getTime, getVisibity } from '../types/consts'
import { ForecastDay } from '../components/cards/ForecastDay'
import { CardMiniWrapper } from '../components/cards/CardMiniWrapper'
import { CardAirQualityItem } from '../components/cards/CardAirQualityItem'
import { CardByHourWrapper } from '../components/cards/CardByHourWrapper'
import { useState } from 'react'
import { CardCityInfo } from '../components/cards/CardCityInfo'

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
  const { list: forecastList } = forecastWeather
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
        <Grid item xs={12} sm={6} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Pronóstico para 5 días</Typography>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              {/* <CardWrapper borderRadius='4%'>
                <Box component='img' src="https://tile.openweathermap.org/map/temp_new/0/0/0.png?appid=064a38154d4c70027d24773c077a583e" alt="Mapa" width='100%' height='100%'/>
              </CardWrapper> */}
              <CardWrapper borderRadius='10px'>
                <Box component='img' src={ Temp } alt="Mapa" width='100%' height='100%'/>
              </CardWrapper>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: {xs: 'none', lg: 'block' } }}>
              <CardWrapper borderRadius='10px'>
                <Box component='img' src={ Temp } alt="Mapa" width='100%' height='100%'/>
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={8}>
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs={12} lg={4}>
                <CardWrapper borderRadius='15px'>
                  <Box component='div' display='flex' flexDirection='column' gap={1}>
                    <Box component='div' display='flex' flexDirection='column' alignItems='center'>
                        <Person sx={{fontSize: 35}}/>
                        <Typography variant="h6">{ user?.name }</Typography>
                    </Box>
                      <Divider/>
                    <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                        <Box component='img' src={Latitude} alt="Latitude" />
                        <Typography variant="h6">{ currentDay.coord.lat } lat.</Typography>
                    </Box>
                    <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                        <Box component='img' src={Longitude} alt="Longitude" />
                        <Typography variant="h6">{ currentDay.coord.lon } long.</Typography>
                    </Box>
                  </Box>
                </CardWrapper>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ display: {xs: 'none', sm: 'none', lg: 'block' } }}>
                <CardCityInfo />
              </Grid>
              <Grid item xs={12} lg={3} sx={{ display: {xs: 'none', sm: 'none', lg: 'block' } }}>
                <CardCityInfo />
              </Grid>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Hoy a las</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: {xs: 'space-between', sm: 'start'}, overflowX: {xs: 'inherit', sm: 'scroll'} }} >
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
                        <CardByHourWrapper windDirection={ windDirection } windSpeed={ windSpeed } description={ description } icon={ icon } temp={ temp } schedule={ dt } timezone={ timezone }/>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}
