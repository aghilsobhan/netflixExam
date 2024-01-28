import React from "react";
import SideBar from "./SideBar";
import Uploader from "../../componnents/Uploader";
import { Input } from "../../componnents/UsedInput";

function Password(props) {
  return (
    <SideBar>
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold">Change Password</h2>
      <Input
        lable="Previus Password"
        placeholder="********"
        type="password"
        bg={true}
      />
      <Input
        lable="New Password"
        placeholder="********"
        type="password"
        bg={true}
      />
            <Input
        lable="Confirm Password"
        placeholder="********"
        type="password"
        bg={true}
      />
      <div className="flex justify-end items-center my-4 ">
        <button className="font-medium bg-main transition hover:bg-subMain border border-subMain text-white py-2 px-5 rounded w-full sm:w-auto">
          Password Update
        </button>
      </div>
    </div>
  </SideBar>
  );
}

export default Password;
