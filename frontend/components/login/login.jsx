import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.baseContainer} ref={this.props.containerRef}>
        <div className={styles.header}>Login</div>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src="/next.svg" alt="login image" width={50} height={50} />
          </div>
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="username">username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.btn}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
