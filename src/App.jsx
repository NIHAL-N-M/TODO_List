import { useEffect } from 'react'
import './App.css'
import Home from './Home'

function App() {
  useEffect(() => {
    document.title = 'React Todo List';
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
