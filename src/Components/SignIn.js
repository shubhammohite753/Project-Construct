// import React, { useState } from 'react';
// const SignIn=() => {
//     const [email, setEmail] =useState("");
//     const [pass, setPass] =useState("");

//     const [allEntry,setAllEntry] = useState([]);
//     const submitForm = (e) => {
//         e.preventDefault()

//         const newEntry = { id: new Date().toString, email, pass};

//         setAllEntry([...allEntry, newEntry]);
//         console.log(allEntry);

//         setEmail("");
//         setPass("");
//     }
//     return ( 
//         <>
//         <form action='' onSubmit={submitForm}>
//             <div>
//                 <input type="email" placeholder='Email' name='email' id='email' autoComplete='off'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}/>
//             </div>
//             <div>
//                 <input type="password" placeholder='Password' name='password' id='password' autoComplete='off' 
//                 value={pass}
//                 onChange={(e) => setPass(e.target.value)}/>
//             </div>
//             <button type='submit'>Login</button>
//         </form>
//         {/* for demo the data showing */}
//         <div>
//             {
//                 allEntry.map((curElem) => {
                
//                     return (
//                         <div className="showDataStyle" key={curElem.id}>
//                             <p>{curElem.email}</p>
//                             <p>{curElem.pass}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//         </>
//      );
// }

// export default SignIn;


import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntries, setAllEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = { email, password };
    setAllEntries([...allEntries, newEntry]);

    setEmail('');
    setPassword('');
  };

  return (
    <div id="kt_body" className="app-blank">
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-lg-500px p-10">
                <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="otp-verification.html" onSubmit={handleSubmit}>
                  <div className="text-center mb-11">
                    <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                  </div>
                  <div className="separator separator-content my-14">
                    <span className="w-250px text-gray-500 fw-semibold fs-7">Login to your account</span>
                  </div>
                  <div className="fv-row mb-8">
                    <input
                      type="text"
                      placeholder="Email*"
                      name="email"
                      autoComplete="off"
                      className="form-control bg-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="fv-row mb-3">
                    <input
                      type="password"
                      placeholder="Password*"
                      name="password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <a href="#" className="link-primary">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="d-grid mb-10">
                    <button type="submit" id="kt_sign_in_submit" className="btn btn-dark">
                      <span className="indicator-label">Sign In</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not yet registered? <a href="sign-up.html" className="link-primary">Sign up</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)" }}>
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
              <a href="#" className="mb-0 mb-lg-12">
                <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-50px h-lg-65px" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <script>var hostUrl = "assets/";</script>
      <script src="assets/plugins/global/plugins.bundle.js"></script>
      <script src="assets/js/scripts.bundle.js"></script>
      <script src="assets/js/custom/authentication/sign-in/general.js"></script>
    </div>
  );
};

export default SignIn;
