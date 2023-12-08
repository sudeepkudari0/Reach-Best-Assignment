import StudentsAnalysis from './Students/StudentsSelection'
import BooksSelection from './Books/BooksSelection'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';
import axios from 'axios';
import { books, students } from '../Types';
import React from 'react';
const Analysis = () => {

  const [books, setBooks] = React.useState<books[]>([
    {
      book_id: "",
      book_name: "",
      g_crime: 0,
      g_mystery: 0,
      g_thriller: 0,
      a_time: 0,
      d_level: 0
    }
  ])
  const [students, setStudents] = React.useState<students[]>([
    {
      student_id: "",
      student_name: "",
      g_crime: "",
      g_mystery: "",
      g_thriller: "",
      a_time: "",
      d_level: ""
    }
  ])
  const [bookID, setBookID] = React.useState("")
  const [studentID, setStudentID] = React.useState("")
  const handleBookSelect = (bookId: string) => {
    setBookID(bookId)
    console.log("Selected book_id:", bookId)
  }

  const handleStudentSelect = (studentId: string) => {
    setStudentID(studentId)
    console.log("Selected student_id:", studentId)
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/books/${bookID}`)
      .then((res) => {
        const book = res.data;
        setBooks(book);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });

      axios
      .get<students[]>(`http://localhost:3000/api/v1/students/${studentID}`)
      .then((res) => {
        const student = res.data;
        setStudents(student);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });    
  }, [bookID, studentID])

  const data = [
    {
      name: 'Crime',
      book: books[0].g_crime,
      student: students[0].g_crime,
      amt: 2400,
    },
    {
      name: 'Mystery',
      book: books[0].g_mystery,
      student: students[0].g_mystery,
      amt: 2210,
    },
    {
      name: 'Thriller',
      book: books[0].g_thriller,
      student: students[0].g_thriller,
      amt: 2290,
    },
    {
      name: 'Time',
      book: books[0].a_time,
      student: students[0].a_time,
      amt: 2000,
    },
    {
      name: 'Dificulty',
      book: books[0].d_level,
      student: students[0].d_level,
      amt: 2181,
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center w-full h-[calc(100vh-64px)]'>
      <div className='flex flex-col justify-center w-full items-center h-full'>
        <div className='flex relative flex-row h-[100px] gap-10'>
          <div>
          <StudentsAnalysis onStudentSelect={handleStudentSelect}/>
          </div>
          <div>
          <BooksSelection onBookSelect={handleBookSelect} />
          </div>
        </div>
        <div className='flex flex-row w-full sm:w-[1000px] h-[300px]'>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="book" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="student" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Analysis