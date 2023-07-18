import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterNow } from "./Components/RegisterNow";
import SignIn from "./Components/SignIn";
import { useEffect } from "react";
import TwoStepVerification from "./Components/TwoStepVerification";
import Dashboard from "./Components/Dashboard";
import ForgotPassword from "./Components/ForgotPassword";
import TermsAndConditions from "./Components/TermsAndConditions";
import Help from "./Components/Help";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<RegisterNow />}/>
        <Route path="/" element={<SignIn />}/>
        <Route path="/otp-verification" element={<TwoStepVerification/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
        <Route path="/help" element={<Help/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
