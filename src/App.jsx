import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Homepage.jsx'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App