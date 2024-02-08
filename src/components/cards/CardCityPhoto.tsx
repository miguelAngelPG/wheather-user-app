import { useSelector } from 'react-redux'
import { CardWrapper } from './CardWrapper'
import { Box, Skeleton } from '@mui/material'
import { selectCityPhoto } from '../../redux/slices/cityPhotoSlice'

export const CardCityPhoto = () => {

    const cityPhotoState = useSelector(selectCityPhoto)

    const { data: cityPhoto, isLoading, error } = cityPhotoState

    if (isLoading) return (
        <CardWrapper borderRadius='15px' padding='0 !important'>
            <Skeleton variant="rectangular" animation='wave' width={'100%'} height={'100%'} />
        </CardWrapper>
    )
    if (error || !cityPhoto || cityPhoto.photos.length === 0) return <CardWrapper borderRadius='15px'><Box width={'100%'} height={'100%'} display='flex' alignItems='center' justifyContent={'center'}>Sin imagen del lugar</Box></CardWrapper>

    return (
        <CardWrapper borderRadius='15px' padding='0 !important'>
            <Box component='img' loading='lazy' sx={{ height: '100%', width: '100%', objectFit: 'cover' }} src={ cityPhoto.photos[1].src.large } alt={ cityPhoto.photos[0].alt } />
        </CardWrapper>
    )
}
