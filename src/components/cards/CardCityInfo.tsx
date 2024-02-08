import { useSelector } from 'react-redux'
import { CardWrapper } from './CardWrapper'
import { Box, Divider, Skeleton, Typography } from '@mui/material'
import { selectCityInfo } from '../../redux/slices/cityInfoSlice'

export const CardCityInfo = () => {

    const cityInfoState = useSelector(selectCityInfo)
    const { data: currentCity, isLoading, error } = cityInfoState

    if (isLoading) return (
        <CardWrapper borderRadius='15px'>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%', gap: 1, minHeight: '130px'}}>
                <Skeleton animation={false}/>

                <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                    <Skeleton animation="wave" sx={{width: '100%'}}/>
                </Box>
                <Divider/>
                <Box component='div' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Skeleton animation="wave" sx={{width: '100%'}}/>
                    <Skeleton animation="wave" sx={{width: '100%'}}/>
                </Box>
            </Box>
        </CardWrapper>
    )

    if (error) return (
        <CardWrapper borderRadius='15px'>
            <Typography variant="h6">Ciudad</Typography>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' gap={1} sx={{minHeight: '130px'}}>
                <Typography variant="h6" textAlign='center'>Información no disponible</Typography>
            </Box>
        </CardWrapper>
    )

    if (!currentCity || currentCity.features.length === 0) return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' gap={1} sx={{minHeight: '130px'}}>
                <Typography variant="h6" textAlign='center'>Ciudad no encontrada</Typography>
            </Box>
        </CardWrapper>
    )

    const [{ properties }] = currentCity.features

    return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1} sx={{minHeight: '130px'}}>
                <Box component='div' display='flex' alignItems='center' justifyContent='center' gap={2}>
                    <Typography variant="h6">{ properties.context.country.name }</Typography>
                    <Box component='img' src={`https://flagsapi.com/${ properties.context.country.country_code }/flat/32.png`} alt={ properties.context.country.country_code } width='20px' height='20px'/>
                </Box>
                <Divider/>
                <Box component='div' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                    <Typography variant="h6">{ properties.context?.region?.name ? properties.context.region.name : properties.context?.locality?.name }</Typography>
                    <Typography variant="h6">{ properties.context?.place?.name } { properties.context?.region?.region_code ? ` | ${ properties.context.region.region_code}` : '' }</Typography>
                </Box>
            </Box>
        </CardWrapper>
    )
}
