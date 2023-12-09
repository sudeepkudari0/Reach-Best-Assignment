import { useEffect, useState } from 'react'
import AddBooks from './AddBooks'
import { books } from '../../Types'
import axios from 'axios';



const Students = () => {

  const [books, setBooks] = useState<books[]>([]);

  useEffect(() => {
    axios
      .get<books[]>(`http://localhost:3000/api/v1/books`)
      .then((res) => {
        const book = res.data;
        setBooks(book);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>

      <div className='flex flex-row items-center justify-center m-5 sm:w-full flex-col '>
        <div>
          <h1 className='text-3xl text-black ml-10'>Books List</h1>

          <table className='w-[700px] mt-2 text-[20px]'>
            <thead>
              <tr className='text-black'>
                <th>Book Name</th>
                <th>Crime</th>
                <th>Mystery</th>
                <th>Thriller</th>
                <th>Time</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            {books.map((book) => {
              return (
                <tbody key={book.book_id}>
                  <tr className='relative left-10' >
                    <td>{book.book_name}</td>
                    <td>{book.g_crime}</td>
                    <td>{book.g_mystery}</td>
                    <td>{book.g_thriller}</td>
                    <td>{book.a_time}</td>
                    <td>{book.d_level}</td>
                  </tr>
                </tbody>

              )
            })}
          </table>
        </div>

        <div className='flex flex-row h-[100px] m-5 relative bottom-14 sm:bottom-0'>
          <AddBooks />
        </div>
      </div>
    </>
  )
}

export default Students
