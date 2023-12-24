import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State variable to toggle password visibility

  const handleSubmit = function () {
    navigate('/dashboard/home');
  };

  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Sign-in Form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
        <div className="text-center mb-8">
          <Typography variant="h2" className="font-bold mb-4">
            Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form className="mx-auto w-80 max-w-screen-lg">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Password
              </Typography>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  placeholder="********"
                  className="pr-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <i
                  className={`absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer text-xl ${showPassword ? 'text-green-700' : 'text-gray-700'}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </i>
              </div>
            </div>

          </div>
          <Button className="mt-6 bg-green-700" fullWidth onClick={handleSubmit}>
            Sign In
          </Button>

          <Typography variant="small" className="mt-10 text-center text-gray-900">
            <a href="/auth/forgot-password">Forgot your Password?</a>
          </Typography>

          <hr className="my-2 mt-6 border-t border-gray-300" />

          <div className="text-center">
            <Typography
              variant="small"
              color="gray"
              className="flex items-center justify-center font-medium"
            >
              Not registered?
              <Link to="#" className="text-green-300 ml-1 font-normal">
                Request a Demo
              </Link>
            </Typography>
          </div>
        </form>
      </div>

      {/* Logo with Green Background (hidden on small screens) */}
      <div className="hidden md:block w-1/2">
        <img
          src="/img/logo.png"
          className="h-full w-full object-cover"
          alt="Logo"
        />
      </div>
    </section>
  );
}

export default SignIn;
