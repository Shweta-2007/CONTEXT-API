import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h3>Please login</h3>;

  return <h1>Welcome {user.username}</h1>;
};

export default Profile;
