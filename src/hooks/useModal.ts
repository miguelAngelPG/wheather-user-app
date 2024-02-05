import { close, openAdd, openEdit, selectModal } from '../redux/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../types/@types'
import { resetUser } from '../redux/slices/currentUserSlice'

interface IState {
    isOpen: boolean
    title: string
    mode: string
    buttonText: string
}

export const useModal = (mode: string = types.new): { stateModal: IState, openModal: () => void, closeModal: () => void } => {
    const dispatch = useDispatch()

    const stateModal = useSelector(selectModal)

    const openModal = () => dispatch(mode === types.new ? openAdd() : openEdit())

    const closeModal = () => {
        dispatch(resetUser())
        dispatch(close())
    }

    return { stateModal, openModal, closeModal }
}
