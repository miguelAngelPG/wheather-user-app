import { Box, Button, Stack } from '@mui/material'
import { PersonAdd } from '@mui/icons-material'

import { Wrapper } from '../components/Wrapper'
import { Table } from '../components/Table'

export function App() {

  return (
    <Wrapper>
        <Stack spacing={2} width={'100%'} justifyContent={'end'} direction="row" padding={2}>
          <Button variant="contained" startIcon={<PersonAdd/>} color='info' >Agregar usuario</Button>
        </Stack>
        <Box
          width="100%"
          height={400}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Table/>
        </Box>
    </Wrapper>

  )
}