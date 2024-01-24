/* eslint-disable react/prop-types */
import "./core-concept.css";
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
export default CoreConcept;
