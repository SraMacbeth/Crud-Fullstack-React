import { BrowserRouter, Routes, Route } from "react-router-dom"
import Show from "../components/Show.jsx"
import Create from "../components/Create.jsx"
import Edit from "../components/Edit.jsx"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Show />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App