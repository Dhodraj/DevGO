import React,{useEffect,useState} from 'react'
import API_KEY from './keys'
import { useStateValue } from './StateProvider';

const CONTEXT_KEY ="be645135e872d5746";

const useGoogleSearch=()=> {
    const [{term},dispatch]=useStateValue();
    const [data, setData] = useState()

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response=> response.json())
            .then(result=>{
                setData(result)
            })
        }
        fetchData();
    }, [term])

    return {data}
};

export default useGoogleSearch
