import Form from "./Form";
const Days = ({ id, title }) => {
  return (
    <div className="day-div" id={id}>
      <h2>{title}</h2>
      <Form />
    </div>
  );
};

export default Days;
