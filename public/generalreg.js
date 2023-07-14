// "use strict";var KTSignupGeneral=function(){var e,t,a,r;var s=function(){return r.getScore() ===100;};return{init:function(){e=document.querySelector("#kt_sign_up_form"),t=document.querySelector("#kt_sign_up_submit"),r=KTPasswordMeter.getInstance(e.querySelector('[data-kt-password-meter="true"]')),a=FormValidation.formValidation(e,{fields:{"first-name":{validators:{notEmpty:{message:"First Name is required"}}},"last-name":{validators:{notEmpty:{message:"Last Name is required"}}},email:{validators:{regexp:{regexp:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"The value is not a valid email address"},notEmpty:{message:"Email address is required"}}},password:{validators:{notEmpty:{message:"The password is required"},callback:{message:"Please enter valid password",callback:function(e){if(e.value.length>0)return s()}}}},"confirm-password":{validators:{notEmpty:{message:"The password confirmation is required"},identical:{compare:function(){return e.querySelector('[name="password"]').value},message:"The password and its confirm are not the same"}}},toc:{validators:{notEmpty:{message:"You must accept the terms and conditions"}}}},plugins:{trigger:new FormValidation.plugins.Trigger({event:{password:!1}}),bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),t.addEventListener("click",(function(s){s.preventDefault(),a.revalidateField("password"),a.validate().then((function(a){"Valid"==a?(t.setAttribute("data-kt-indicator","on"),t.disabled=!0,setTimeout((function(){t.removeAttribute("data-kt-indicator"),t.disabled=!1,Swal.fire({text:"You have successfully reset your password!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(t){if(t.isConfirmed){e.reset(),r.reset();var a=e.getAttribute("data-kt-redirect-url");a&&(location.href=a)}}))}),1500)):Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}})}))})),e.querySelector('input[name="password"]').addEventListener("input",(function(){this.value.length>0&&a.updateFieldStatus("password","NotValidated");}))},};}();KTUtil.onDOMContentLoaded(function(){KTSignupGeneral.init();});
"use strict";

var e = document.querySelector("#kt_sign_up_form");
var r = KTPasswordMeter.getInstance(e.querySelector('[data-kt-password-meter="true"]'));

var KTSignupGeneral = function () {
  var t, a;

  var s = function () {
    return r.getScore() === 100;
  };

  return {
    init: function () {
      t = document.querySelector("#kt_sign_up_submit");
      a = FormValidation.formValidation(e, {
        fields: {
          "first-name": {
            validators: {
              notEmpty: {
                message: "First Name is required",
              },
            },
          },
          "last-name": {
            validators: {
              notEmpty: {
                message: "Last Name is required",
              },
            },
          },
          email: {
            validators: {
              regexp: {
                regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "The value is not a valid email address",
              },
              notEmpty: {
                message: "Email address is required",
              },
            },
          },
          password: {
            validators: {
              notEmpty: {
                message: "The password is required",
              },
              callback: {
                message: "Please enter a valid password",
                callback: function (e) {
                  if (e.value.length > 0) return s();
                },
              },
            },
          },
          "confirm-password": {
            validators: {
              notEmpty: {
                message: "The password confirmation is required",
              },
              identical: {
                compare: function () {
                  return e.querySelector('[name="password"]').value;
                },
                message: "The password and its confirm are not the same",
              },
            },
          },
          toc: {
            validators: {
              notEmpty: {
                message: "You must accept the terms and conditions",
              },
            },
          },
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger({
            event: {
              password: false,
            },
          }),
          bootstrap: new FormValidation.plugins.Bootstrap5({
            rowSelector: ".fv-row",
            eleInvalidClass: "",
            eleValidClass: "",
          }),
        },
      });

      t.addEventListener("click", function (s) {
        s.preventDefault();
        a.revalidateField("password");
        a.validate().then(function (result) {
          if (result === "Valid") {
            t.setAttribute("data-kt-indicator", "on");
            t.disabled = true;
            setTimeout(function () {
              t.removeAttribute("data-kt-indicator");
              t.disabled = false;
              Swal.fire({
                text: "You have successfully reset your password!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(function (result) {
                if (result.isConfirmed) {
                  e.reset();
                  r.reset();
                  var redirectUrl = e.getAttribute("data-kt-redirect-url");
                  if (redirectUrl) {
                    location.href = redirectUrl;
                  }
                }
              });
            }, 1500);
          } else {
            Swal.fire({
              text: "Sorry, looks like there are some errors detected, please try again.",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          }
        });
      });

      e.querySelector('input[name="password"]').addEventListener("input", function () {
        this.value.length > 0 && a.updateFieldStatus("password", "NotValidated");
      });
    },
  };
}();

KTUtil.onDOMContentLoaded(function () {
  KTSignupGeneral.init();
});
