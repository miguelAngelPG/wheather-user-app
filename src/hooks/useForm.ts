import { useSelector, useDispatch } from 'react-redux'
import { changeValue, resetUser, selectCurrentUser } from '../redux/slices/currentUserSlice'
import { ChangeEvent } from 'react'
import { addUser } from '../redux/slices/usersSlice'

interface IUserState {
    name: string
    lat: number
    long: number
}

// eslint-disable-next-line
export const useForm = (): [ IUserState, ({ target }: ChangeEvent<HTMLInputElement>) => void, () => void, () => void ] => {

    const state: IUserState = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        dispatch(changeValue({ name: name as keyof IUserState, value }))
    }

    const handleSubmit = () => {
        dispatch(addUser(state))
    }

    const reset = () => {
        dispatch(resetUser())
    }

    return [ state, handleChange, handleSubmit, reset ]
}
