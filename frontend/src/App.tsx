import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Analysis from './Components/Analysis'
import Students from './Components/Students/Students'
import Books from './Components/Books/Books'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Analysis />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/students' element={<Students />} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </Router>
  )
}

export default App
