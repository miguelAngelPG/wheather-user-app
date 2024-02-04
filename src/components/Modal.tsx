import { Backdrop, Box, Fade, Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, selectModal } from '../redux/slices/modalSlice'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export function TransitionsModal() {

    const isOpen = useSelector(selectModal)
    const dispatch = useDispatch()

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ isOpen }
                onClose={ handleCloseModal }
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={ isOpen }>
                <Box sx={style}>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
}
