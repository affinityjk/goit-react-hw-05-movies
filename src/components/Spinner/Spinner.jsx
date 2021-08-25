import Loader from "react-loader-spinner";
import { LoaderContainer } from "components/Spinner/Spinner.styled";

function Spinner() {
  return (
    <LoaderContainer>
      <Loader
        type="Audio"
        color="#9966cc"
        height={120}
        width={120}
        timeout={5000}
      />
    </LoaderContainer>
  );
}

export default Spinner;
