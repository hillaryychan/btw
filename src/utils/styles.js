const Brand = {
  fontStyle: "italic",
  fontWeight: "bold"
};

const Center = {
  left: "50%",
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)"
};

const CenterHorizontal = {
  display: "flex",
  justifyContent: "center"
};

const CenterText = {
  textAlign: "center"
};

const Faded = {
  color: "gray"
};

const Form = window.matchMedia("(max-width: 500px)").matches
  ? {}
  : {margin: "0 auto", maxWidth: "500px"};

const ReqInput = {
  color: "red"
};

const Username = {
  color: "white"
};

const styles = {
  Brand,
  Center,
  CenterHorizontal,
  CenterText,
  Faded,
  Form,
  ReqInput,
  Username
};

export default styles;
