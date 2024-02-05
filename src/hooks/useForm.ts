import { useSelector, useDispatch } from 'react-redux'
import { changeValue, resetUser, selectCurrentUser } from '../redux/slices/currentUserSlice'
import { ChangeEvent } from 'react'
import { addUser, removeUser } from '../redux/slices/usersSlice'

interface IUserState {
    name: string
    lat: number
    long: number
}

// eslint-disable-next-line
export const useForm = (): { userState: IUserState, handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void, handleAddUser: () => void, handleResetUser: () => void, handleRemoveUser: (id: string) => void } => {

    const userState: IUserState = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        dispatch(changeValue({ name: name as keyof IUserState, value }))
    }

    const handleAddUser = () => {
        dispatch(addUser(userState))
    }

    const handleResetUser = () => {
        dispatch(resetUser())
    }

    const handleRemoveUser = (id: string) => {
        dispatch(removeUser(id))
    }

    return { userState, handleChange, handleAddUser, handleResetUser, handleRemoveUser }
}
