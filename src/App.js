import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterNow } from "./Components/RegisterNow";
import SignIn from "./Components/SignIn";
import { useEffect } from "react";
import TwoStepVerification from "./Components/TwoStepVerification";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<RegisterNow />}/>
        <Route path="/" element={<SignIn />}/>
        <Route path="/otp-verification" element={<TwoStepVerification/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
