import { Backdrop, Box, Fade, Modal, TextField, Button, Typography, Container, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, selectModal } from '../redux/slices/modalSlice'
import { FormEvent } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
}

export function TransitionsModal() {

    const modalState = useSelector(selectModal)
    const { isOpen, title, buttonText } = modalState
    const dispatch = useDispatch()

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('submit')
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
                        <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    margin: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography component="h1" variant="h5">{ title }</Typography>
                                <Box component="form" noValidate onSubmit={ handleSubmit } sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                color='info'
                                                label="Nombre"
                                                name="email"
                                                autoComplete="Nombre"
                                                // helperText="Incorrect entry."
                                                error={false}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                color='info'
                                                id="firstName"
                                                label="Latitud"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                color='primary'
                                                id="lastName"
                                                label="Longitud"
                                                name="lastName"
                                                autoComplete="family-name"
                                            />
                                        </Grid>
                                    </Grid>
                                    {/* <LoadingButton
                                        size="small"
                                        color="secondary"
                                        onClick={handleClick}
                                        loading={loading}
                                        loadingPosition="start"
                                        startIcon={<SaveIcon />}
                                        variant="contained"
                                    >
                                        <span>Save</span>
                                    </LoadingButton> */}
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color='info'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        { buttonText }
                                    </Button>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
