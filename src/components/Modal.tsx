import { Backdrop, Box, Fade, Modal, TextField, Button, Typography, Container, Grid, FormControl, InputLabel, OutlinedInput, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import { useForm } from '../hooks/useForm'
import { useModal } from '../hooks/useModal'
import { FormEvent, useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { useDebounce } from '../hooks/useDebounce'
import { Mode } from '../types/@types'
import { useActions } from '../hooks/useActions'
import { IPlace } from '../types/placeInterface'
import { urlSearchPlaces } from '@/utils/getUrls'

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

    const { stateModal, closeModal }  = useModal()
    const { isOpen, title, buttonText, mode } = stateModal
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [places, setPlaces] = useState([])
    const [ debaunceSearch, resetDebounce ] = useDebounce(search, 1000)

    const { userState, handleChange: handelInputChange, handleInputChangeValue } = useForm()
    const { handleAddUser, handleResetUser, handleEditUser } = useActions()
    const { name, lat, long } = userState
    const [ error, setError ] = useState({
        isThereName: false,
        isThereLat: false,
        isThereLong: false
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (name.trim() === '' || lat.trim() === '' || long.trim() === '') {
            setError({ ...error, isThereName: name.trim() === '', isThereLat: lat.trim() === '', isThereLong: long.trim() === ''})
            return
        }

        mode === Mode.New ? handleAddUser() : handleEditUser()
        handleResetUser()
        closeModal()

    }

    useEffect(() => {
        const loadPlaces = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(urlSearchPlaces(debaunceSearch, import.meta.env.VITE_MAPBOX_API_KEY))
                if (!response.ok) {
                    setIsLoading(false)
                    throw new Error('No se pudo cargar la información')
                }

                const data = await response.json()
                setIsLoading(false)
                setPlaces(data.features)

            } catch (error) {
                setIsLoading(false)
                throw error
            }
        }

        loadPlaces()
    }, [debaunceSearch])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ isOpen }
                onClose={ closeModal }
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
                                                color='info'
                                                label="Nombre"
                                                name="name"
                                                autoComplete="Nombre"
                                                onChange={ handelInputChange }
                                                value={name}
                                                // helperText="Incorrect entry."
                                                error={error.isThereName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} position='relative'>
                                            <FormControl variant="outlined" sx={{ width: '100%' }}>
                                                <InputLabel htmlFor="outlined-adornment-password">Buscar lugar</InputLabel>
                                                <OutlinedInput
                                                    sx={{ pr: 1 }}
                                                    id="outlined-adornment-password"
                                                    type='text'
                                                    endAdornment={
                                                        <Search />
                                                    }
                                                    onChange={ (e) => setSearch(e.target.value) }
                                                    value={search}
                                                    label="Buscar lugar"
                                                />
                                            </FormControl>
                                            {
                                                debaunceSearch && (
                                                    <List sx={{position: 'absolute', background: '#fff', zIndex: 10, width: '94%', border: 'solid 1px', maxHeight: '300px', overflowY: 'scroll'}}>
                                                        {isLoading ? (
                                                            <ListItem>Loading...</ListItem>
                                                        ) : places.length === 0 ? (
                                                            <ListItem>No hay resultados</ListItem>
                                                        ) : (
                                                            places.map((place: IPlace) => (
                                                                <ListItem disablePadding key={place.id}>
                                                                    <ListItemButton onClick={() => {
                                                                        // setSearch('')
                                                                        resetDebounce()
                                                                        handleInputChangeValue('lat', place.center[1].toString())
                                                                        handleInputChangeValue('long', place.center[0].toString())
                                                                        setPlaces([])
                                                                    }}>
                                                                        <ListItemText primary={place.place_name} />
                                                                    </ListItemButton>
                                                                </ListItem>
                                                            ))
                                                        )}
                                                    </List>
                                                )
                                            }
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="lat"
                                                required
                                                fullWidth
                                                color='info'
                                                label="Latitud"
                                                autoFocus
                                                onChange={ handelInputChange }
                                                value={ lat }
                                                error={error.isThereLat}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                color='primary'
                                                label="Longitud"
                                                name="long"
                                                autoComplete="family-name"
                                                onChange={ handelInputChange }
                                                value={ long }
                                                error={error.isThereLong}
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
