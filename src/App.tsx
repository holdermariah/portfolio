import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProjectDetailPage from './components/ProjectDetailPage'
import './App.css'

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/portfolio' : '/'

  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-[#798dc6]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
