import { useMemo } from 'react'
import { DataGrid, GridColDef, GridEventListener, GridRenderCellParams, GridRowParams } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonActions } from '../components/ButtonActions'
import { selectUsers } from '../redux/slices/usersSlice'

export function Table() {
    const navigate = useNavigate()
    const users = useSelector(selectUsers)

    const handleRowClick: GridEventListener<'rowClick'> = (params: GridRowParams) => {
        console.log(params.row)
    }
    const handleRowDoubleClick: GridEventListener<'rowClick'> = (params: GridRowParams) => {
        return navigate(`/users/${params.row.id}`)
    }

    const columns: GridColDef[] = useMemo(() => [
        {
            field: 'id',
            headerName: 'ID',
            width: 130,
            sortable: false,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params: GridRenderCellParams) => {
                return params.api.getRowIndexRelativeToVisibleRows(params.id) + 1
            }
         },
        { field: 'name', headerName: 'Nombre', width: 200, sortable: false, align: 'center', headerAlign: 'center'  },
        { field: 'lat', headerName: 'Lat.', type: 'number', width: 170, sortable: false, align: 'center', headerAlign: 'center'  },
        { field: 'long', headerName: 'Long.', type: 'number', width: 170, sortable: false, align: 'center', headerAlign: 'center' },
        {
            field: 'action',
            headerName: 'Actions',
            sortable: false,
            width: 250,
            headerAlign: 'center',
            type: 'actions',
            align: 'center',
            renderCell: (params: GridRenderCellParams) => {
                return <ButtonActions params={params}/>
            },
        }
    ], [])

    return (
        <DataGrid
            onRowClick={handleRowClick}
            onRowDoubleClick={handleRowDoubleClick}
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