import { useEffect, useState } from 'react'
import AddStudents from './AddStudents'
import { students } from '../../Types'
import axios from 'axios';



const Students = () => {

  const [students, setStudents] = useState<students[]>([]);

  useEffect(() => {
    axios
      .get<students[]>(`http://${import.meta.env.VITE_BACKEND}:3000/api/v1/students`)
      .then((res) => {
        const student = res.data;
        setStudents(student);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>

      <div className='flex flex-col items-center justify-center m-5 sm:flex-row'>
        <div>
          <h1 className='text-3xl text-black'>Students and Their Preferences</h1>

          <table className='w-full mt-2 text-[20px] sm:w-[700px]'>
            <thead>
              <tr className='text-black'>
                <th>Name</th>
                <th>Crime</th>
                <th>Mystery</th>
                <th>Thriller</th>
                <th>Time</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            {students.map((stud) => {
              return (
                <tbody key={stud.student_id}>
                  <tr className='relative left-10' >
                    <td>{stud.student_name}</td>
                    <td>{stud.g_crime}</td>
                    <td>{stud.g_mystery}</td>
                    <td>{stud.g_thriller}</td>
                    <td>{stud.a_time}</td>
                    <td>{stud.d_level}</td>
                  </tr>
                </tbody>

              )
            })}
          </table>
        </div>

        <div className='flex flex-row h-[100px] m-5 relative'>
          <AddStudents />
        </div>
      </div>
    </>
  )
}

export default Students