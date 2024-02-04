import { createSlice } from '@reduxjs/toolkit'

interface IState {
    isOpen: boolean
    title: string
}

interface IModalState { modalState: IState}

const initialState: IState = {
    isOpen: false,
    title: '',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalTitle: (state, action) => {
            state.isOpen = true
            state.title = action.payload
        },
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
})

export const { closeModal, openModal } = modalSlice.actions
export const selectModal = (state: IModalState): boolean => state.modalState.isOpen
export default modalSlice.reducer
