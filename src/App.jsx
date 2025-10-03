import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Attendance from './components/Attendance'
import DailyLesson from './components/DailyLesson'
import Schedule from './components/Schedule'

function App() {
  return (
    <div>
      <Header />
      <h1>📚 Ilm Minar App</h1>
      <Attendance />
      <DailyLesson />
      <Schedule />
      <Footer />
    </div>
  )
}

export default App