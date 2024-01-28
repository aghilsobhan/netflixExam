import React from "react";
import Layout from "../layout/Layout";
import { Input } from "../componnents/UsedInput";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
function Login(props) {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-10 flex flex-col justify-center items-center ">
        <div className="w-full 2xl:w-2/5 sm:p-14  gap-8 flex flex-col justify-center items-center p-14 md:w-3/5 bg-dry rounded-lg border ">
          <img
            src="/images/logo.png"
            alt="login image"
            className="w-full h-12 object-contain"
          />
          <Input
            lable="Email"
            placeholder="netflix@gmail.com"
            type="email"
            bg={true}
          />
          <Input
            lable="Password"
            placeholder="*******"
            type="password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain transition hover:bg-main flex flex-row justify-center items-center gap-4 text-white p-4 rounded-lg w-full "
          >
            <IoIosLogIn /> Sign in{" "}
          </Link>
          <p className="text-center text-border">
            Dont have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
