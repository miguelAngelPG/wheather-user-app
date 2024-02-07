import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectUserById } from '../redux/slices/usersSlice'
import { PageWrapper } from '../components/PageWrapper'
import { CardWrapper } from '../components/cards/CardWrapper'
import { ArrowBack, CalendarToday, LocationOn } from '@mui/icons-material'
import { Box, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
// import Grid2 from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
import { currentDay } from '../bd'
import { getDate, getTemp } from '../types/consts'
import { useState } from 'react'

export const Users = () => {

  const { id } = useParams()
  const user = useSelector((state) => selectUserById(state, id))
  const navigate = useNavigate()

  const handleBackPage = () => navigate('/')

  const [currentWeather/*, setCurrentWeather*/] = useState(currentDay)
  const { sys, dt, timezone, name } = currentWeather
  const { country } = sys

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
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}
