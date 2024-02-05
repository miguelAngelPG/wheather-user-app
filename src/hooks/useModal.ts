import { closeModal, openModalAdd, openModalEdit, selectModal } from '../redux/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { types } from '../types/@types'

interface IState {
    isOpen: boolean
    title: string
    mode: string
    buttonText: string
}

export const useModal = (mode: string): [IState, () => void, () => void ] => {
    const dispatch = useDispatch()

    const isOpen = useSelector(selectModal)

    const open = () => dispatch(mode === types.new ? openModalAdd() : openModalEdit())
    const close = () => dispatch(closeModal())

    return [ isOpen, open, close ]
}
