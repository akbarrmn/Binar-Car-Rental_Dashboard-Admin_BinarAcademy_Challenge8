import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='text-center' style={{ marginTop:'15rem' }}>
        <h1 style={{ fontSize:'50px' }}>Loading</h1>
        <Spinner animation="border" variant="primary" style={{ height:'4rem', width:'4rem' }}/>
    </div>
  )
}

export default Loading