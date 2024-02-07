import { CardWrapper } from './CardWrapper'
import { Box } from '@mui/material'

export const CardCityPhoto = ({ url }:{ url: string }) => {
    return (
        <CardWrapper borderRadius='15px' padding='0 !important'>
            <Box component='img' loading='lazy' sx={{ height: '100%', width: '100%', objectFit: 'cover' }} src={url} alt='city photo' />
        </CardWrapper>
    )
}
