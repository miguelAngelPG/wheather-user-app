import { useSelector, useDispatch } from 'react-redux'
import { changeValue, selectCurrentUser } from '../redux/slices/currentUserSlice'
import { ChangeEvent } from 'react'

interface IUserState {
    name: string
    lat: number
    long: number
}
// eslint-disable-next-line
export const useForm = (): [ IUserState, ({ target }: ChangeEvent<HTMLInputElement>) => void ] => {

    const state: IUserState = useSelector(selectCurrentUser)

    const dispatch = useDispatch()

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target
        dispatch(changeValue({ name: name as keyof IUserState, value }))
    }

    return [ state, handleChange ]
}
