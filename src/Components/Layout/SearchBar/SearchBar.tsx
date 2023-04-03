import axios from "axios";
import { useEffect, useState } from "react";
import { StateModel } from "../../Models/StateModel";
import "./SearchBar.css";

function SearchBar(): JSX.Element {
    const[states,setStates] = useState<StateModel[]>([]);
    const [searchTerm,setSearchTerm]= useState<string>("")
    useEffect(() => {
        axios.get<StateModel[]>('https://restcountries.com/v2/all ')
        .then(res =>{setStates(res.data)})
        .catch(err => {console.log(err)})
    },[])
    return (
        <div className="SearchBar">
			<input type ="text" placeholder="state?" onChange={event=>{setSearchTerm(event.target.value)}}/>
            <div className="StatesFilter">
            {states.filter((val)=>{
                if (searchTerm===""){
                    return val
                }
                else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            })
            .map(s =><p key={'state'+ s.name}>{s.name}</p>)}
            </div>
        </div>
    );
}

export default SearchBar;
