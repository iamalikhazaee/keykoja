import { Login, Register } from "@/components/login/index";
import React from "react";
import styles from '@/styles/test.module.scss';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginActive: true,
        }
    }

    changeState() {
        const { isLoginActive } = this.state;
        if (isLoginActive) {
            this.rightSide.classList.remove(styles.right);
            this.rightSide.classList.add(styles.left);
        } else {
            this.rightSide.classList.remove(styles.left);
            this.rightSide.classList.add(styles.right);
        }

        this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }))
    }

    render() {
        const { isLoginActive } = this.state;
        const current = isLoginActive ? "Register" : "Login"
        const currentActive = isLoginActive ? "login" : "register"
        return (
            <div className={styles.App}>
                <div className={styles.login}>
                    <div className={styles.container}>
                        {isLoginActive && <Login containerRef={(ref) => this.current = ref} />}
                        {!isLoginActive && <Register containerRef={(ref) => this.current = ref} />}
                    </div>
                    <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
                </div>
            </div>
        )
    }
}

const RightSide = props => {
    return <div className={`${styles.rightSide} ${props.current === 'Register' ? styles.right : styles.left}`} ref={props.containerRef} onClick={props.onClick}>
        <div className={styles.innerContainer}>
            <div className={styles.text}>{props.current}</div>
        </div>
    </div>
}

export default LoginPage;