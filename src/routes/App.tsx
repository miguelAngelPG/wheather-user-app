import { Box, Container } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { ButtonActions } from '../components/ButtonActions'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../redux/slices/usersSlice'

export function App() {

  const users = useSelector(selectUsers)

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
            rows={ users }
            columns={ columns }
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