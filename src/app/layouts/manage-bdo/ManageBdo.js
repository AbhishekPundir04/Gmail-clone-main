import React, { useEffect, useState } from 'react'
import ManageBdoTable from './ManageBdoTable'
import ManageBdoHeader from './ManageBdoHeader'
import { useDispatch, useSelector } from 'react-redux'
import { manageBdoAction } from '../../redux/action/manage_bdo_action/ManageBdoAction'


const ManageBdo = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(()=>{
    dispatch(manageBdoAction(venPayload));
  },[dispatch,page,  ])

   const venPayload ={
    size: rowsPerPage,
    page: page,
   }

   const bdoData = useSelector((store) => store.manageBdoReducer);

   console.log(" data",bdoData)

  return (
    <div>
        <ManageBdoHeader/>
        <ManageBdoTable
        rows={bdoData?.bdoData?.list ?? []}
        count={bdoData?.count ?? 0}
        page={page}
        rowsPerPage={rowsPerPage}

        />
    </div>
  )
}

export default ManageBdo