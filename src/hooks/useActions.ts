import { useDispatch, useSelector } from 'react-redux'
import { loadUser, resetUser, selectCurrentUser } from '../redux/slices/currentUserSlice'
import { addUser, removeUser, updateUser } from '../redux/slices/usersSlice'

interface IUserState {
    id: string
    name: string
    lat: string
    long: string
}

// eslint-disable-next-line
export const useActions = (): { handleAddUser: () => void, handleEditUser: () => void, handleResetUser: () => void, handleRemoveUser: (id: string) => void, handelLoadUser: (user: IUserState) => void } => {

        const userState: IUserState = useSelector(selectCurrentUser)

        const dispatch = useDispatch()

        const handleAddUser = () => {
            dispatch(addUser(userState))
        }

        const handleEditUser = () => {
            dispatch(updateUser(userState))
        }

        const handleResetUser = () => {
            dispatch(resetUser())
        }

        const handleRemoveUser = (id: string) => {
            dispatch(removeUser(id))
        }

        const handelLoadUser = (user: IUserState) => {
            dispatch(loadUser(user))
        }

        return { handleAddUser, handleEditUser, handleResetUser, handleRemoveUser, handelLoadUser }
}
