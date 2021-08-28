import React,{useState} from 'react'
import "./Search.css"
import SearchIcon from "@material-ui/icons/Search"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import { actionTypes } from '../reducer'
import {useStateValue} from "../StateProvider.js"

function Search({hideButtons=false}) {

    const [{},dispatch]=useStateValue( );

    const [input, setInput] = useState('')
    const history=useHistory();


const search=(e)=>{

    e.preventDefault();
    dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        term: input
    })

    if(input){

    history.push('/search')
    }

}
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input value={input} onChange={e=>setInput(e.target.value)}/> 
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined" onClick={search}>DevGO Search</Button>
                    <Button variant="outlined">You're Lucky ✨</Button>
                </div>

            ) : (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" variant="outlined" onClick={search}>DevGO Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">You're Lucky ✨</Button>
                </div>
            )}
            
        </form>
    )
}

export default Search
