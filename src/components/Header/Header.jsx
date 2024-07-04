import React from "react";
import styles from "./Header.module.scss";

import settingsLogo from "../../assets/menu.svg";
import avatar from "../../assets/Default.jpg";
import notificationLogo from "../../assets/direct-normal.svg";
import smslogo from "../../assets/sms-notification.svg";

import { useUser } from "../../UserContext";

export default function Header() {
  const { user } = useUser();

  return (
    <div>
      <div className={styles.root}>
        <img src={settingsLogo} alt="" />
        <div className={styles.avatarGroup}>
          <img src={avatar} alt="avatar" />
          <p>
            HELLO!
            <br />
            {user ? user.displayName : "Guest"}
          </p>
        </div>
        <div className={styles.notificationGroup}>
          <img src={notificationLogo} alt="direct" />
          <img src={smslogo} alt="sms" />
        </div>
      </div>
    </div>
  );
}
