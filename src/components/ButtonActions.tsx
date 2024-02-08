import { Delete, Edit, Preview } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { MouseEvent } from 'react'
import { useModal } from '../hooks/useModal'
import { types } from '../types/@types'
import { useActions } from '../hooks/actions'

export const ButtonActions = ({params}: { params: GridRenderCellParams}) => {
    const navigate = useNavigate()

    const { openModal }  = useModal(types.edit)
    const { handleRemoveUser, handelLoadUser } = useActions()

    const handleOpenModal = (e: MouseEvent) => {
        e.stopPropagation()
        handelLoadUser(params.row)
        openModal()
    }

    const handleDelete = (e: MouseEvent) => {
        e.stopPropagation()
        handleRemoveUser(params.id as string)
    }

    return (
        <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
        >
            <Tooltip title="View Details">
                <IconButton onClick={() => (navigate(`/users/${params.row.id}`))}>
                    <Preview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
                <IconButton onClick={ handleOpenModal }>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={ handleDelete }>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
}
