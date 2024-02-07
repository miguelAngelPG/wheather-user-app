import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectUserById } from '../redux/slices/usersSlice'
import { PageWrapper } from '../components/PageWrapper'
import { ArrowBack } from '@mui/icons-material'
import { Box, Divider, IconButton, Tooltip } from '@mui/material'
// import Grid2 from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'

export const Users = () => {

  const { id } = useParams()
  const user = useSelector((state) => selectUserById(state, id))
  const navigate = useNavigate()

  const handleBackPage = () => navigate('/')

  return (
    <PageWrapper>
      <Box component='header' justifyContent='start' alignItems='center' flexDirection='row' width='100%' display='flex'>
        <Tooltip title="Back home">
            <IconButton onClick={ handleBackPage}>
              <ArrowBack/>
            </IconButton>
        </Tooltip>
      </Box>
      <Divider/>

    </PageWrapper>
  )
}
