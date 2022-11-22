import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from ".";

interface Props {
  starColor?: string;
  length?: number;
  backgroundColor?: string;
}

const StarsProgress = (props: Props) => {
  const {
    starColor = "#E6B91E",
    backgroundColor = "white",
    length = 5,
  } = props;
  return (
    <ProgressBar
      progress={10}
      length={length}
      progressColor={starColor}
      backgroundColor={backgroundColor}
      progressIcon={<FontAwesomeIcon icon={faStar} />}
    />
  );
};

export default StarsProgress;
