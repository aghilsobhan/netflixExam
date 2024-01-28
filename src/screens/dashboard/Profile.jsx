import React from "react";
import SideBar from "./SideBar";
import Uploader from "../../componnents/Uploader";
import { Input } from "../../componnents/UsedInput";
function Profile(props) {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold"></h2>
        <Uploader />
        <Input
          lable="FullName"
          placeholder="netflix React Tailwind"
          type="text"
          bg={true}
        />
        <Input
          lable="Email"
          placeholder="netflix@gmail.com"
          type="email"
          bg={true}
        />
        <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center  my-4">
          <button className="font-medium bg-subMain transition hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="font-medium bg-main transition hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Profile Update
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Profile;
