import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import styles from "./Header.module.scss";

import settingsLogo from "../../assets/menu.svg";
import avatar from "../../assets/Default.jpg";
// import notificationLogo from "../../assets/direct-normal.svg";
// import smslogo from "../../assets/sms-notification.svg";
import logoutLogo from "../../assets/logout-2-svgrepo-com.svg";

import { useUser } from "../../UserContext";

export default function Header() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/start"); 
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  return (
    <div>
      <div className={styles.root}>
        <img src={settingsLogo} alt="" />
        <div className={styles.avatarGroup}>
          <img src={avatar} alt="avatar" />
          <p>
            Привет!
            <br />
            {user ? user.displayName : "Guest"}
          </p>
        </div>
        <div className={styles.notificationGroup}>
          {/* <img src={notificationLogo} alt="direct" /> */}
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <img src={logoutLogo} alt="logout" />
          </button>
        </div>
      </div>
    </div>
  );
}
