import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./button.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

const MenuButton = ({ text, ...rest }: Props) => {
  return (
    <button className={styles.menuButton} {...rest}>
      {text}
    </button>
  );
};

export default MenuButton;
