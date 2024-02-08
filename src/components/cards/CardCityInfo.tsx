import { useSelector } from 'react-redux'
import { CardWrapper } from './CardWrapper'
import { Box, Divider, Skeleton, Typography } from '@mui/material'
import { selectCityInfo } from '../../redux/slices/cityInfoSlice'

export const CardCityInfo = () => {

    const cityInfoState = useSelector(selectCityInfo)
    const { data: currentCity, isLoading, error } = cityInfoState

    if (isLoading) return (
        <CardWrapper borderRadius='15px'>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%', gap: 1}}>
                <Skeleton/>
                <Skeleton animation="wave"/>
                <Divider/>
                <Skeleton animation="wave"/>
                <Skeleton animation={false}/>
                <Skeleton animation="wave"/>
            </Box>
        </CardWrapper>
    )

    if (error) return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1}>
                <Typography variant="h6">Error</Typography>
                <Typography variant="h6">City info not available</Typography>
            </Box>
        </CardWrapper>
    )

    if (!currentCity || currentCity.features.length === 0) return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1}>
                <Typography variant="h6">No data</Typography>
            </Box>
        </CardWrapper>
    )

    const [{ properties }] = currentCity.features

    return (
        <CardWrapper borderRadius='15px'>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='stretch' gap={1}>
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
