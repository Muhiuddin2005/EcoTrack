import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <img src={user.photoURL || "https://avatar.iran.liara.run/public"} />
      <p>{user.displayName || "Anonymous"}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default MyProfile;
