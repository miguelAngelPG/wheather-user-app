import { Box, Card, CardContent, Typography } from '@mui/material'
import { getTemp } from '../../types/consts'

export const CardByHourWrapper = ({ description, icon, temp }: { description: string, icon: string, temp: number }) => {
    return (
        <Card sx={{borderRadius: '4%', height:'100%', width:'100%'}}>
            <CardContent sx={{height:'100%', width:'100%', padding: '10px 15px !important'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body2">9 AM</Typography>
                    <Box component='img' height={'70px'} alt={ description } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} />
                    <Typography variant="body2">{ getTemp(temp) }</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}
