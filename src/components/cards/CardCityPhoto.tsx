import { useSelector } from 'react-redux'
import { CardWrapper } from './CardWrapper'
import { Box } from '@mui/material'
import { selectCityPhoto } from '../../redux/slices/cityPhotoSlice'

export const CardCityPhoto = () => {

    const cityPhotoState = useSelector(selectCityPhoto)

    const { data: cityPhoto, isLoading, error } = cityPhotoState

    if (isLoading) return <CardWrapper borderRadius='15px'><Box>Loading...</Box></CardWrapper>
    if (error) return <CardWrapper borderRadius='15px'><Box>Error</Box></CardWrapper>
    if (!cityPhoto || cityPhoto.photos.length === 0) return <CardWrapper borderRadius='15px'><Box>No data</Box></CardWrapper>

    return (
        <CardWrapper borderRadius='15px' padding='0 !important'>
            <Box component='img' loading='lazy' sx={{ height: '100%', width: '100%', objectFit: 'cover' }} src={ cityPhoto.photos[0].src.large } alt={ cityPhoto.photos[0].alt } />
        </CardWrapper>
    )
}
