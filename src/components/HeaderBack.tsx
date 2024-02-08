import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const HeaderBack = () => {

    const navigate = useNavigate()
    const handleBackPage = () => navigate('/')

    return (
        <Box component='header' sx={{position: 'absolute', top: 0}} justifyContent='start' alignItems='center' flexDirection='row' width='100%' display='flex'>
            <Tooltip title="Back home">
                <IconButton onClick={ handleBackPage}>
                    <ArrowBack/>
                </IconButton>
            </Tooltip>
        </Box>
    )
}
