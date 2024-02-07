import { Box, Button, Stack } from '@mui/material'
import { PersonAdd } from '@mui/icons-material'

import { PageWrapper } from '../components/PageWrapper'
import { Table } from '../components/Table'
import { TransitionsModal } from '../components/Modal'
import { useModal } from '../hooks/useModal'
import { types } from '../types/@types'

export function App() {

  const { openModal }  = useModal(types.new)

  return (
    <>
      <PageWrapper>
          <Stack spacing={2} width={'100%'} justifyContent={'end'} direction="row" padding={2}>
            <Button variant="contained" onClick={ openModal } startIcon={<PersonAdd/>} color='info' >Agregar usuario</Button>
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
      </PageWrapper>
      <TransitionsModal/>
    </>

  )
}