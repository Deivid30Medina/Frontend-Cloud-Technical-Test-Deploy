import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaskList from './pages/TaskList';
import CreateTask from './pages/CreateTask';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-color-font w-screen h-auto border-2 py-8 px-12">
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          
          <Route path="/tasks" element={<TaskList />} />
          
          <Route path="/tasks/new" element={<CreateTask />} />
          
          <Route path="*" element={<div className="p-4">404: Página no encontrada</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
