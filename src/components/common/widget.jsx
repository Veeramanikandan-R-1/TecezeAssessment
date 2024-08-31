import "./index.scss";
import logoImg from "../../assets/logo.png";

export const CustomButton = ({label, ...props}) => {
    return <div className="button-container">
        <button {...props}>{label}</button>
    </div>
}

export const Logo = () => {
    return <div>
        <img src={logoImg} alt="logo" className="logo-img" />
    </div>
}