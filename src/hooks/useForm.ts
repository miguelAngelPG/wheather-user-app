import { useSelector, useDispatch } from 'react-redux'
import { changeValue, selectCurrentUser } from '../redux/slices/currentUserSlice'
import { ChangeEvent } from 'react'

interface IUserState {
    id: string
    name: string
    lat: string
    long: string
}

// eslint-disable-next-line
export const useForm = (): { userState: IUserState, handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void, handleInputChangeValue: (name: string, value: string) => void } => {

    const userState: IUserState = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        dispatch(changeValue({ name: name as keyof IUserState, value }))
    }

    const handleInputChangeValue = (name: string, value: string) => {
        dispatch(changeValue({ name: name as keyof IUserState, value }))
    }

    return { userState, handleChange, handleInputChangeValue }
}
