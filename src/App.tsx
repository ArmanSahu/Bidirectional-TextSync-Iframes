import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/dashboard"
import { FrameA } from "./pages/frameA"
import { FrameB } from "./pages/frameB"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/frameA" element={<FrameA />} />
        <Route path="/frameB" element={<FrameB />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
