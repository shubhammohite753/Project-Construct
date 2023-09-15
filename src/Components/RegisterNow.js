import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

export const RegisterNow = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().required('Mobile number is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      ),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Repeat Password is required'),
    toc: Yup.boolean().oneOf([true], 'You must accept the Terms & Conditions'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleRegistration = (data) => {
    console.log('Registration submitted:', data);
    Swal.fire({
      text: 'You have successfully registered!',
      icon: 'success',
      confirmButtonText: 'Ok, got it!',
      customClass: {
        confirmButton: 'btn btn-primary',
      },
    });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="d-flex flex-column flex-root" id="kt_app_root">
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            <div className="w-lg-500px p-10">
              <form className="form w-100" noValidate onSubmit={handleSubmit(handleRegistration)}>
                <div className="separator separator-content my-14">
                  <h1 className="w-300px text-dark-800 fw-semibold fs-0">Register Now</h1>
                </div>
                <div className="fv-row mb-8">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    {...register('first name')}
                    className={`form-control bg-transparent ${errors.name ? 'is-invalid' : ''}`}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="fv-row mb-8">
                  <input
                    type="text"
                    placeholder="Email*"
                    {...register('email')}
                    className={`form-control bg-transparent ${errors.email ? 'is-invalid' : ''}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="fv-row mb-8">
                  <input
                    type="numbers"
                    placeholder="Mobile Number*"
                    {...register('mobile')}
                    className={`form-control bg-transparent ${errors.mobile ? 'is-invalid' : ''}`}
                  />
                  {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
                </div>

                <div className="fv-row mb-8">
                  <div className="position-relative mb-3">
                    <input
                      className={`form-control bg-transparent ${errors.password ? 'is-invalid' : ''}`}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password*"
                      name="password"
                      autoComplete="off"
                      {...register('password')}
                    />
                    <span
                      className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                      onClick={handleTogglePasswordVisibility}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} fs-2`} />
                    </span>
                  </div>
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>

                <div className="fv-row mb-8">
                  <input
                    placeholder="Repeat Password*"
                    name="confirm-password"
                    type="password"
                    autoComplete="off"
                    {...register('repeatPassword')}
                    className={`form-control bg-transparent ${errors.repeatPassword ? 'is-invalid' : ''}`}
                  />
                  {errors.repeatPassword && <div className="invalid-feedback">{errors.repeatPassword.message}</div>}
                </div>

                <div className="fv-row mb-8">
                  <label className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="toc" value="1" {...register('toc')} />
                    <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                      I Accept the{' '}
                      <Link to="/termsandconditions" className="ms-1 link-primary">
                        Terms & Conditions
                      </Link>
                    </span>
                  </label>
                  {errors.toc && <div className="invalid-feedback">{errors.toc.message}</div>}
                </div>

                <div className="d-grid mb-10">
                  <button type="submit" id="kt_sign_up_submit" className="btn btn-dark">
                    <span className="indicator-label">Sign up</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>
                </div>

                <div className="text-gray-500 text-center fw-semibold fs-6">
                  Already have an Account?
                  <Link to="/" className="link-primary fw-semibold">
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
          style={{ backgroundImage: 'url(assets/media/misc/login-cover.jpg)' }}
        >
          <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
            <a href=" " className="mb-0 mb-lg-12">
              <img alt="Logo" src="assets/media/logos/logo-img.png" className="h-60px h-lg-65px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

