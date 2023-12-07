import React from 'react'
import AddStudents from './AddStudents'


const Students = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[calc(100vh-64px)]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex relative flex-row h-[100px] gap-10 left-[300px] bottom-[300px]'>
        <AddStudents />
      </div>
      </div>
    </div>
  )
}

export default Students