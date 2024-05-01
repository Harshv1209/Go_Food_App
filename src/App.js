import "./App.css"
import Home from "./screens/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./screens/Login"
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import SignUp from "./screens/SignUp.js"
import { CartProvider } from "./components/ContextReducer.js"
import MyOrder from "./screens/MyOrder.js"

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<SignUp />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
