import { Box, Container } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { ButtonActions } from '../components/ButtonActions'
import { useMemo } from 'react'

export function App() {

  const rows = [
    { id: 1, name: 'Snow', lat: 76, long: 35 },
    { id: 2, name: 'Lannister', lat: 54, long: 42 },
    { id: 3, name: 'Lannister', lat: 76, long: 45 },
    { id: 4, name: 'Stark', lat: 12, long: 16 },
    { id: 5, name: 'Targaryen', lat: 93, long: 55 },
    { id: 6, name: 'Melisandre', lat: 24, long: 150 },
    { id: 7, name: 'Clifford', lat: 84, long: 44 },
    { id: 8, name: 'Frances', lat: 10, long: 36 },
    { id: 9, name: 'Roxie', lat: 73, long: 65 },
  ]

  const columns: GridColDef[] = useMemo(() => [
    { field: 'id', headerName: 'ID', width: 130, sortable: false, align: 'center' },
    { field: 'name', headerName: 'Nombre', width: 200, sortable: false, align: 'center' },
    { field: 'lat', headerName: 'Lat.', type: 'number', width: 170, sortable: false, align: 'center' },
    { field: 'long', headerName: 'Long.', type: 'number', width: 170, sortable: false, align: 'center'},
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 250,
      type: 'actions',
      align: 'center',
      renderCell: (params: GridRenderCellParams) => {
        return (
          <ButtonActions params={params}/>
        )
      }
    }
  ], [])

  return (
    <Container maxWidth='lg'>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          width="100%"
          height={400}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnMenu
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            hideFooterSelectedRowCount
            rowSelection={false}
            disableRowSelectionOnClick
            pageSizeOptions={[5, 10]}
          />
        </Box>

    </Box>
    </Container>
  )
}