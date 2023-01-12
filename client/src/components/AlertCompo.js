import Alert from "react-bootstrap/Alert";

const AlertCompo = () => {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default AlertCompo;
