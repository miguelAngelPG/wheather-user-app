import { Mode } from '../../types/@types'
import { createSlice } from '@reduxjs/toolkit'

interface IState {
    isOpen: boolean
    title: string
    mode: Mode
    buttonText: string
}

interface IModalState { modalState: IState}

const initialState: IState = {
    isOpen: false,
    title: '',
    mode: Mode.WithoutStatus,
    buttonText: '',
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openAdd: (state) => {
            state.isOpen = true
            state.title = 'Registro de usuario'
            state.mode = Mode.New
            state.buttonText = 'Guardar'
        },
        openEdit: (state) => {
            state.isOpen = true
            state.title = 'Editar usuario'
            state.mode = Mode.Edit
            state.buttonText = 'Editar'
        },
        close: (state) => {
            state.isOpen = false
            state.title = ''
            state.mode = Mode.WithoutStatus
            state.buttonText = ''
        },
    },
})

export const { close, openAdd, openEdit } = modalSlice.actions
export const selectModal = (state: IModalState): IState => state.modalState
export default modalSlice.reducer
