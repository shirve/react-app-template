import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element />
        </Routes>
      </main>
    </Router>
  )
}

export default App
