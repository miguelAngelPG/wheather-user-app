import { Box, Grid, Typography } from '@mui/material'

import { getDay, getSimpleDate, getTemp } from '@/utils/formats'

export const ForecastDay = ({ description, icon, temp, timezone, dt }: { description: string, icon: string, temp: number, timezone: number, dt: number }) => {
    return (
        <Grid item xs={12} display='flex' alignItems='center' justifyContent='space-between' paddingRight={2}>
            <Box display='flex' alignItems='center'>
                <Box component='img' height={'60px'} alt={ description } src={`https://openweathermap.org/img/wn/${ icon }@2x.png`} />
                <Typography variant="body1" fontWeight='500' marginBottom={1}>
                    { getTemp(temp) }
                </Typography>
            </Box>
            <Typography variant="body1" color='text.secondary'>{ getDay(dt, timezone) }</Typography>
            <Typography variant="body1">{ getSimpleDate(dt, timezone) }</Typography>
        </Grid>
    )
}
