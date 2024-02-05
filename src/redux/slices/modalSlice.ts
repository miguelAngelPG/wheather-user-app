import { createSlice } from '@reduxjs/toolkit'

interface IState {
    isOpen: boolean
    title: string
    mode: string
    buttonText: string
}

interface IModalState { modalState: IState}

const initialState: IState = {
    isOpen: false,
    title: '',
    mode: '',
    buttonText: '',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalAdd: (state) => {
            state.isOpen = true
            state.title = 'Registro de usuario'
            state.mode = 'new'
            state.buttonText = 'Guardar'
        },
        openModalEdit: (state) => {
            state.isOpen = true
            state.title = 'Editar usuario'
            state.mode = 'edit'
            state.buttonText = 'Editar'
        },
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
    },
})

export const { closeModal, openModal, openModalAdd, openModalEdit } = modalSlice.actions
export const selectModal = (state: IModalState): IState => state.modalState
export default modalSlice.reducer
