import "./StateCard.css";
import { StateModel } from "../../Models/StateModel";
interface StateCardProps{
    state:StateModel
}
function StateCard(props:StateCardProps): JSX.Element {
    return (
        <div className="StateCard">
		<p>name: {props.state.name}</p>	
        <p>capital: {props.state.capital}</p>
        <p>population: {props.state.population} people</p>
        <img className="flag" src={props.state.flag}/>
        </div>
    );
}

export default StateCard;
