import { Delete, Edit, Preview } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'

export const ButtonActions = ({params}: { params: GridRenderCellParams}) => {
    return (
        <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            width="100%"
        >
            <Tooltip title="View Details">
                <IconButton onClick={() => console.log('hola', params.id)}>
                    <Preview />
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
                <IconButton onClick={() => console.log('hola', params.id)}>
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={() => console.log('hola', params.id)}>
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
}
