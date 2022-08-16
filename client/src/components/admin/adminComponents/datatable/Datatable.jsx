import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns} from '../../../../datatablesource';
import { useSelector } from 'react-redux';

const Datatable = () => {
    const cars = useSelector((state) => state.carsData.cars)
    const row = []
    cars.map((item)=>{row.push({
      id: item.id,
      username: item.name,
      img: item.image,
      passengers: item.passengers,
      email: item.name,
      age: item.startRent,
      
    })})
    const actionColumn = [
      {
        field: "action", headerName:"Action", width: 200, renderCell:()=>{
          return(
            <div className="cellAction">
              <div className="viewButton">View</div>
              <div className="deleteButton">Delete</div>
            </div>
          )
        }
      }
    ]
  return (
    <div className='datatables'>
        <DataGrid
        rows={row}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[10]}
        checkboxSelection
        style={{ backgroundColor:'white' }}
      />
    </div>
  )
}

export default Datatable