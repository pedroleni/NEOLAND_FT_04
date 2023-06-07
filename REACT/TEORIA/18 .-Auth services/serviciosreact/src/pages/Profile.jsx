import { useEffect, useState } from "react";
import "./Profile.css";
import FormProfile from "../components/FormProfile";
import ChangePassword from "../components/ChangePassword";
import useDeleteUser from "../hooks/useDeleteUser";
import { useAuth } from "../contexts/authContext";

const Profile = () => {
  const [changeRender, setChangeRender] = useState(true);
  const { user, setUser } = useAuth();
  console.log(user);

  return (
    <>
      <div className="containerNavProfile">
        <img
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125399/pngwing.com_npd5sa.png"
          alt="go to ChangePassword"
          className="iconNav"
          onClick={() => setChangeRender(false)}
        />
        <img
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686125391/Change_User_icon-icons.com_55946_lypx2c.png"
          alt="go to change data profile"
          className="iconNav iconChangeProfile"
          onClick={() => setChangeRender(true)}
        />
        <img
          src="https://res.cloudinary.com/dq186ej4c/image/upload/v1686140226/eliminar_user_rmwoeg.png"
          alt="user delete button"
          className="iconNav iconDeleteUser"
          onClick={() => useDeleteUser(setUser)}
        />
      </div>
      <div className="fluidContainerProfile">
        {changeRender ? <FormProfile /> : <ChangePassword />}
      </div>
    </>
  );
};

export default Profile;
