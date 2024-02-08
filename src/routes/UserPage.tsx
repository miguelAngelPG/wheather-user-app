import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, Typography } from '@mui/material'

import { AppDispatch } from '@/redux'
import { CardAirPollution } from '@/components/cards/CardAirPollution'
import { CardCityInfo } from '@/components/cards/CardCityInfo'
import { CardCityPhoto } from '@/components/cards/CardCityPhoto'
import { CardCurrentWeather } from '@/components/cards/CardCurrentWeather'
import { CardForecast } from '@/components/cards/CardForecast'
import { CardForecastSchedule } from '@/components/cards/CardForecastSchedule'
import { CardUserInfo } from '@/components/cards/CardUserInfo'
import { CardWrapper } from '@/components/cards/CardWrapper'
import { fetchAirPollution } from '@/redux/slices/airPollutionSlice'
import { fetchCityInfo, selectCityInfo } from '@/redux/slices/cityInfoSlice'
import { fetchCityPhoto } from '@/redux/slices/cityPhotoSlice'
import { fetchCurrentWeather, selectName } from '@/redux/slices/currentWeatherSlice'
import { fetchForecastDays } from '@/redux/slices/forecastDaySlice'
import { HeaderBack } from '@/components/HeaderBack'
import { PageWrapper } from '@/components/PageWrapper'
import { selectUserById } from '@/redux/slices/usersSlice'
import { Layer } from '@/types/@types'

export const UserPage = () => {

    const { id } = useParams()
    const [isLoadingUser, setIsLoadingUser] = useState(true)
    const user = useSelector((state) => selectUserById(state, id))
    const name = useSelector(selectName)
    const cityState = useSelector(selectCityInfo)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const change = setTimeout(() => {
            if (user) {
                dispatch(fetchCityInfo({ lat: user.lat, long: user.long }))
                dispatch(fetchCurrentWeather({ lat: user.lat, long: user.long }))
                dispatch(fetchForecastDays({ lat: user.lat, long: user.long }))
                dispatch(fetchAirPollution({ lat: user.lat, long: user.long }))
            }
            setIsLoadingUser(false)
        }, 1000)

        return () => clearTimeout(change)
    }, [user, dispatch])

    useEffect(() => {
        if (name) {
            dispatch(fetchCityPhoto({ city: name }))
        }
    }, [name, dispatch])

    if ((cityState.error || !cityState.data) && !isLoadingUser) return (
        <PageWrapper>
            <HeaderBack/>
            <h1>Coordenadas no validas</h1>
        </PageWrapper>
    )

    if (isLoadingUser) {
        return <PageWrapper><h1>Cargando...</h1></PageWrapper>
    }

    if (!user) return (
        <PageWrapper>
            <HeaderBack/>
            <h1>Usuario no encontrado</h1>
        </PageWrapper>

    )

    return (
        <div>
            <PageWrapper>
                <HeaderBack/>

                <Grid container spacing={3} sx={{paddingBottom: {xs: '16px'}, marginTop: 3}}>
                    {/* Col 1 */}
                    <Grid item xs={12} sm={6} lg={4}>
                        <Grid container spacing={2}>
                            {/* Row 1 */}
                            <Grid item xs={12}>
                                {/* current weather card */}
                                <CardCurrentWeather/>
                            </Grid>
                            {/* Row 2 */}
                            <Grid item xs={12}>
                                <Typography variant="h6">Pronóstico para 5 días</Typography>
                            </Grid>
                            {/* Row 3 */}
                            <Grid item xs={12}>
                                <CardForecast/>
                            </Grid>
                            {/* Row 4 */}
                            <Grid item xs={12} sm={12} lg={6}>
                                <CardWrapper borderRadius='10px'>
                                    <Typography variant="h6">{ 'Temperatura' }</Typography>
                                    <Box component='img' src={ `https://tile.openweathermap.org/map/${Layer.Temp_new}/0/0/0.png?appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}` } alt="Mapa" width='100%' height='90%'/>
                                </CardWrapper>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ display: {xs: 'none', lg: 'block' } }}>
                                <CardWrapper borderRadius='10px'>
                                    <Typography variant="h6">{ 'Presión' }</Typography>
                                    <Box component='img' src={ `https://tile.openweathermap.org/map/${Layer.Pressure_new}/0/0/0.png?appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}` } alt="Mapa" width='100%' height='90%'/>
                                </CardWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Col 2 */}
                    <Grid item xs={12} sm={6} lg={8}>
                        <Grid container spacing={2}>
                            {/* Row 1 */}
                            <Grid container item xs={12} spacing={2}>
                                {/* Col 1.1 */}
                                <Grid item xs={12} lg={4}>
                                    <CardUserInfo name={user.name} lat={user.lat} long={user.long} />
                                </Grid>
                                {/* Col 1.2 */}
                                <Grid item xs={12} lg={4} sx={{ display: {xs: 'none', sm: 'none', lg: 'block' } }}>
                                    <CardCityInfo />
                                </Grid>
                                {/* Col 1.3 */}
                                <Grid item xs={12} lg={4} sx={{ display: {xs: 'none', sm: 'none', lg: 'block' }, maxHeight: '230px' }}>
                                    <CardCityPhoto/>
                                </Grid>
                            </Grid>
                            {/* Row 2 */}
                            <Grid item xs={12}>
                                <CardAirPollution/>
                            </Grid>
                            {/* Row 3 */}
                            <Grid item xs={12}>
                                <Typography variant="h6">Hoy a las</Typography>
                            </Grid>
                            {/* Row 4 */}
                            <Grid item xs={12}>
                                <Grid container spacing={2} sx={{ flexWrap: { xs: 'wrap', sm: 'nowrap' }, justifyContent: {xs: 'space-between', sm: 'start'}, overflowX: {xs: 'inherit', sm: 'scroll'} }}>
                                    <CardForecastSchedule/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </PageWrapper>
        </div>
    )
}
