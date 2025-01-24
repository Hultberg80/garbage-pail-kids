import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home"
import CardInfo from "./pages/CardInfo"

export default function App() {

  return <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/card/:cardId" element={<CardInfo />} />
      </Route>
    </Routes>
    </BrowserRouter>
}