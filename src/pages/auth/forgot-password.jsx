import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = function () {
    navigate('/dashboard/home');
  };

  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* Sign-in Form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
        <div className="text-center mb-8">
          <Typography variant="h2" className="font-bold mb-4">
            Forgot your Password?
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email to receive new password.
          </Typography>
        </div>
        <form className="mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
            Your email:
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              input="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6 bg-green-700" fullWidth onClick={handleSubmit}>
            SUBMIT
          </Button>
          <Typography variant="small" className="mt-10 text-center text-gray-900">
            Do you want to Cancel?
            <a href="/" className="text-green-300 ml-1 font-normal">YES</a>
          </Typography>
          
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

export default ForgotPassword;
