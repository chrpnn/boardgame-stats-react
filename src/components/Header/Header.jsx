import React from "react";
import styles from "./Header.module.scss";

import settingsLogo from "../../assets/menu.svg";
import avatar from "../../assets/Default.jpg";
import notificationLogo from "../../assets/direct-normal.svg";
import smslogo from "../../assets/sms-notification.svg";

export default function Header() {
  return (
    <div>
      <div className={styles.root}>
        <img src={settingsLogo} alt="" />
        <div className={styles.avatarGroup}>
          <img src={avatar} alt="avatar" />
          <p>
            HELLO!
            <br />
            Daniela!
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
