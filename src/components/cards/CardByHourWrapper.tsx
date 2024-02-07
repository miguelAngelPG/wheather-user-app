import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import { capitalizeFirstLetter, getTemp, getTime, mps_to_kmph } from '../../types/consts'
import { Navigation } from '@mui/icons-material'

export const CardByHourWrapper = ({ windSpeed, windDirection, description, icon, temp, schedule, timezone }: { windSpeed: number, windDirection: number, description: string, icon: string, temp: number, schedule: number, timezone: number }) => {
    return (
        <Card sx={{borderRadius: '4%', height:'100%', width: '115px'}}>
            <CardContent sx={{height:'100%', width:'100%', padding: '10px 15px !important'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body2">{ getTime(schedule, timezone) }</Typography>
                    <Box component='img' height={'70px'} alt={ description } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} />
                    <Typography variant="caption" sx={{textWrap: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} align='center'>{ capitalizeFirstLetter(description) }</Typography>
                    <Typography variant="body2" fontWeight='500' marginBottom={1}>
                        { getTemp(temp) }
                    </Typography>
                    <Divider sx={{width: '100%', marginBottom: '15px'}}/>
                    <Navigation sx={{ fontSize: 35, transform:`rotate(${windDirection - 180}deg)` }} />
                    {/* <Box component='img' height={'70px'} sx={{ transform:`rotate(${windDirection - 180}deg)`} } alt={ description } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} /> */}
                    <Typography sx={{ marginTop: '15px' }} variant="caption">{ mps_to_kmph(windSpeed).toPrecision(3) } km/h</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}
