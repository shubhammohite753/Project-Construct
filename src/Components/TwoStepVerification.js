import React, { useEffect, useState } from 'react';

const TwoStepVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleResetOTP = () => {
    // TODO: Implement your reset OTP logic here
    console.log('Resetting OTP...');
    // Reset the verification code
    setVerificationCode('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle verification code submission logic
    console.log('Verification code submitted:', verificationCode);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/two-steps.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="kt_body" className="app-blank">
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              <div className="w-lg-500px p-10">
                <form
                  className="form w-100 mb-13"
                  noValidate="novalidate"
                  data-kt-redirect-url="/dashboard"
                  id="kt_sing_in_two_steps_form"
                  action="#"
                  onSubmit={handleFormSubmit}
                >
                  <div className="text-center mb-5">
                    <img
                      alt="Logo"
                      className="mh-100px"
                      src="assets/media/svg/misc/smartphone-2.svg"
                    />
                  </div>
                  <div className="text-center mb-10">
                    <h1 className="text-dark mb-3">Two Step Verification</h1>
                    <div className="text-muted fw-semibold fs-5 mb-5">
                      Enter the verification code we sent to
                    </div>
                    <div className="fw-bold text-dark fs-3">******9735</div>
                  </div>
                  <div className="mb-10">
                    <div className="fw-bold text-start text-dark fs-6 mb-1 ms-1">
                      Type your 6-digit security code
                    </div>
                    <div className="d-flex flex-wrap flex-stack">
                      {Array.from({ length: 6 }, (_, index) => (
                        <input
                          key={index}
                          type="text"
                          name={`code_${index + 1}`}
                          maxLength="1"
                          className="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                          value={verificationCode[index] || ''}
                          onChange={handleCodeChange}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="d-flex flex-center">
                    <button
                      type="submit"
                      id="kt_sing_in_two_steps_submit"
                      className="btn btn-lg btn-dark fw-bold"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                </form>
                <div className="text-center fw-semibold fs-5">
                  <span className="text-muted me-1">Didn’t get the code?</span>
                  <a
                    href="#"
                    className="link-primary fs-5 me-1"
                    onClick={handleResetOTP}
                  >
                    Resend OTP
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
            style={{ backgroundImage: "url(assets/media/misc/login-cover.jpg)" }}
          >
            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
              <a href="#" className="mb-0 mb-lg-12">
                <img
                  alt="Logo"
                  src="assets/media/logos/logo-img.png"
                  className="h-50px h-lg-65px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
