import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./button.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  strech?: boolean;
}

const PrimaryButton = ({ text, strech, ...rest }: Props) => {
  return (
    <button
      className={`${styles.primary} ${strech && styles.strech}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
