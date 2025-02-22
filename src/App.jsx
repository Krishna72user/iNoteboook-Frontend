import NoteState from './context/NoteState.jsx';
import './App.css'
import Home from './components/Home'
import About from "./components/About";
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
    <NoteState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </NoteState>
    </>
  )
}

export default App
