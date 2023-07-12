import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterNow } from "./Components/RegisterNow";
import SignIn from "./Components/SignIn";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<RegisterNow />}/>
        <Route path="/login" element={<SignIn />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
