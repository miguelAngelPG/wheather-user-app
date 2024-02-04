import { closeModal, openModal, selectModal } from '../redux/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

export const useModal = (): [boolean, () => void, () => void ] => {
    const dispatch = useDispatch()

    const isOpen = useSelector(selectModal)

    const open = () => dispatch(openModal())
    const close = () => dispatch(closeModal())

    return [ isOpen, open, close ]
}
