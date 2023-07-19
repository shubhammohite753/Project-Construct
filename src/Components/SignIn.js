import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// import Swal from 'sweetalert2';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSignIn = (data) => {
    console.log('Sign In submitted:', data);
        reset();
        window.location.href = '/otp-verification';
      };
  return (
    <div id="kt_body" className="app-blank">
      <div className="d-flex flex-column flex-root vh-100" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-lg-500px p-10">
                <form
                  className="form w-100"
                  noValidate="novalidate"
                  id="kt_sign_in_form"
                  data-kt-redirect-url="/otp-verification"
                  onSubmit={handleSubmit(handleSignIn)}
                >
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
                      className={`form-control bg-transparent ${errors.email ? 'is-invalid' : ''}`}
                      {...register('email')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                  <div className="fv-row mb-3">
                    <input
                      type="password"
                      placeholder="Password*"
                      name="password"
                      autoComplete="off"
                      className={`form-control bg-transparent ${errors.password ? 'is-invalid' : ''}`}
                      {...register('password')}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                  </div>
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <Link to="/forgotpassword" className="link-primary">
                      Forgot Password?
                    </Link>
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
                    Not yet registered? <Link to="/sign-up" className="link-primary">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)" }}>
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
              <a href=" " className="mb-0 mb-lg-12">
                <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-50px h-lg-65px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
   
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//       setEmail('');
//       setPassword('');
//   };
  
//   // -----------------------
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '/general.js';
//     script.async = true;
//     document.body.appendChild(script);

    
  
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
  
//   // ---------------------------
//   return (
//     <div id="kt_body" className="app-blank">
//       <div className="d-flex flex-column flex-root" id="kt_app_root">
//         <div className="d-flex flex-column flex-lg-row flex-column-fluid">
//           <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
//             <div className="d-flex flex-center flex-column flex-lg-row-fluid">
//               <div className="w-lg-500px p-10">
//                 <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="/otp-verification" onSubmit={handleSubmit}>
//                   <div className="text-center mb-11">
//                     <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
//                   </div>
//                   <div className="separator separator-content my-14">
//                     <span className="w-250px text-gray-500 fw-semibold fs-7">Login to your account</span>
//                   </div>
//                   <div className="fv-row mb-8">
//                     <input
//                       type="text"
//                       placeholder="Email*"
//                       name="email"
//                       autoComplete="off"
//                       className="form-control bg-transparent"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)} 
//                     />
//                   </div>
//                   <div className="fv-row mb-3">
//                     <input
//                       type="password"
//                       placeholder="Password*"
//                       name="password"
//                       autoComplete="off"
//                       className="form-control bg-transparent"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
//                     <div></div>
//                     <Link to="/forgotpassword" className="link-primary">
//                       Forgot Password?
//                     </Link>
//                   </div>
//                   <div className="d-grid mb-10">
//                     <button type="submit" id="kt_sign_in_submit" className="btn btn-dark">
//                       <span className="indicator-label">Sign In</span>
//                       <span className="indicator-progress">
//                         Please wait...
//                         <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//                       </span>
//                     </button>
                    
//                   </div>
//                   <div className="text-gray-500 text-center fw-semibold fs-6">
//                     Not yet registered? <Link to="/sign-up" className="link-primary">Sign up</Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)", height: "100vh" }}>
//             <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
//               <a href=" " className="mb-0 mb-lg-12">
//                 <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-50px h-lg-65px" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default SignIn;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SignIn = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     const form = document.querySelector('#kt_sign_in_form');

//     const validationSchema = Yup.object().shape({
//       email: Yup.string().email('The value is not a valid email address').required('Email address is required'),
//       password: Yup.string().required('Password is required'),
//     });

//     const handleSubmit = (values) => {
//       setIsSubmitting(true);

//       validationSchema
//         .validate(values, { abortEarly: false })
//         .then(() => {
//           // Form validation succeeded
//           setTimeout(() => {
//             form.querySelector('[name="email"]').value = '';
//             form.querySelector('[name="password"]').value = '';

//             const redirectUrl = form.getAttribute('data-kt-redirect-url');
//             if (redirectUrl) {
//               window.location.href = redirectUrl;
//             }

//             setIsSubmitting(false);
//           }, 1000);
//         })
//         .catch((error) => {
//           // Form validation failed
//           setIsSubmitting(false);
//         });
//     };

//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       handleSubmit({
//         email: form.querySelector('[name="email"]').value,
//         password: form.querySelector('[name="password"]').value,
//       });
//     });

//     return () => {
//       form.removeEventListener('submit', handleSubmit);
//     };
//   }, []);

//   return (
//     <div id="kt_body" className="app-blank">
//       <div className="d-flex flex-column flex-root" id="kt_app_root">
//         <div className="d-flex flex-column flex-lg-row flex-column-fluid">
//           <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
//             <div className="d-flex flex-center flex-column flex-lg-row-fluid">
//               <div className="w-lg-500px p-10">
//                 <Formik initialValues={{ email: '', password: '' }}>
//                   <Form className="form w-100" id="kt_sign_in_form" data-kt-redirect-url="/otp-verification">
//                     <div className="text-center mb-11">
//                       <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
//                     </div>
//                     <div className="separator separator-content my-14">
//                       <span className="w-250px text-gray-500 fw-semibold fs-7">Login to your account</span>
//                     </div>
//                     <div className="fv-row mb-8">
//                       <Field
//                         type="text"
//                         placeholder="Email*"
//                         name="email"
//                         autoComplete="off"
//                         className="form-control bg-transparent"
//                       />
//                       <ErrorMessage name="email" component="div" className="error" />
//                     </div>
//                     <div className="fv-row mb-3">
//                       <Field
//                         type="password"
//                         placeholder="Password*"
//                         name="password"
//                         autoComplete="off"
//                         className="form-control bg-transparent"
//                       />
//                       <ErrorMessage name="password" component="div" className="error" />
//                     </div>
//                     <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
//                       <div></div>
//                       <a href=" " className="link-primary">
//                         Forgot Password?
//                       </a>
//                     </div>
//                     <div className="d-grid mb-10">
//                       <button type="submit" id="kt_sign_in_submit" className="btn btn-dark" disabled={isSubmitting}>
//                         <span className="indicator-label">Sign In</span>
//                         {isSubmitting && (
//                           <span className="indicator-progress">
//                             Please wait...
//                             <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
//                           </span>
//                         )}
//                       </button>
//                     </div>
//                     <div className="text-gray-500 text-center fw-semibold fs-6">
//                       Not yet registered? <Link to="/sign-up" className="link-primary">Sign up</Link>
//                     </div>
//                   </Form>
//                 </Formik>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)" }}>
//             <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
//               <a href="#" className="mb-0 mb-lg-12">
//                 <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-50px h-lg-65px" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

