import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectUserById } from '../redux/slices/usersSlice'
import { Wrapper } from '../components/Wrapper'
import { ArrowBack } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Users = () => {

  const { id } = useParams()
  const user = useSelector((state) => selectUserById(state, id))
  const navigate = useNavigate()

  const handleBackPage = () => navigate('/')

  return (
    <Wrapper>
      <Button variant="contained" color="primary" onClick={ handleBackPage }>
        <ArrowBack/>
      </Button>
      <div>Users { id }
        <div>{ user?.name }</div>
        <div>{ user?.long }</div>
        <div>{ user?.lat }</div>
      </div>
    </Wrapper>
  )
}
