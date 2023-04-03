import { useEffect, useState } from "react";
import { StateModel } from "../../Models/StateModel";
import "./States.css";
import axios from "axios";
import StateCard from "../StateCard/StateCard";
import SearchBar from "../../Layout/SearchBar/SearchBar";
function States(): JSX.Element {
    const[states,setStates] = useState<StateModel[]>([]);
    const [searchTerm,setSearchTerm]= useState<string>("")
    useEffect(() => {
        axios.get<StateModel[]>('https://restcountries.com/v2/all ')
        .then(res =>{setStates(res.data)})
        .catch(err => {console.log(err)})
    },[])
    return (
        <div className="States">
		<h1>States</h1>	
        <input type ="text" placeholder="state?" onChange={event=>{setSearchTerm(event.target.value)}}/>
{/* {states.map(s =><p key={'state'+ s.name}>{s.name},{s.capital},{s.population},{s.flag}</p>)} */}
{states.filter((val)=>{
                if (searchTerm===""){
                    return 
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            })
.map(s=><StateCard key={'state' + s.name} state={s}/>)}
        </div>
    );
}

export default States;
