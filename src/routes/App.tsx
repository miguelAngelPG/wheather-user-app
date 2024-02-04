import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount, selectCounter } from '../redux/slices/counterSlice'
import { Container, Grid } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { ButtonActions } from '../components/ButtonActions'

export function App() {
  const counter = useSelector(selectCounter)

  const dispatch = useDispatch()
  const increment = () => {
    dispatch(incrementByAmount(3))
  }

  const decrement = (): void => {
    dispatch(incrementByAmount(-1))
  }

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

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70, sortable: false },
    { field: 'name', headerName: 'Nombre', width: 130, sortable: false },
    { field: 'lat', headerName: 'Lat.', type: 'number', width: 100, sortable: false },
    { field: 'long', headerName: 'Long.', type: 'number', width: 100, sortable: false},
    {
      field: 'action',
      headerName: 'Actions',
      sortable: false,
      width: 150,
      align: 'center',
      renderCell: (params: GridRenderCellParams) => {
        // const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        //   e.stopPropagation()
        //   console.log(params.row)
        //   rows.push({ id: 10, name: 'Roxie', lat: 73, long: 65 })
        // }
        return (
          <ButtonActions params={params}/>
        )
      }
    }
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ]

  return (
    <Container>
      <Grid item xs={12}>
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
          pageSizeOptions={[5]}
          // checkboxSelection
        />

    </Grid>
    </Container>
  )

  return (
    <div>
      { counter }
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}