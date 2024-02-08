import { useDispatch, useSelector } from 'react-redux'

import { close, openAdd, openEdit, selectModal } from '@/redux/slices/modalSlice'
import { resetUser } from '@/redux/slices/currentUserSlice'
import { Mode } from '@/types/@types'

interface IState {
    isOpen: boolean
    title: string
    mode: string
    buttonText: string
}

export const useModal = (mode: string = Mode.New): { stateModal: IState, openModal: () => void, closeModal: () => void } => {
    const dispatch = useDispatch()

    const stateModal = useSelector(selectModal)

    const openModal = () => dispatch(mode === Mode.New ? openAdd() : openEdit())

    const closeModal = () => {
        dispatch(resetUser())
        dispatch(close())
    }

    return { stateModal, openModal, closeModal }
}
