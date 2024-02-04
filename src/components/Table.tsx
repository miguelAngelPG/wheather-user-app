import { useMemo } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'

import { ButtonActions } from '../components/ButtonActions'
import { selectUsers } from '../redux/slices/usersSlice'

export function Table() {

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
    )
}