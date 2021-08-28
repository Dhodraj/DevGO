import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import "./SearchPage.css"
import devgologo from "../assets/devgologo.png"
import Response from '../Response';
import SearchIcon from "@material-ui/icons/Search"
import Search from "../components/Search"

function SearchPage() {
    const [{term},dispatch]=useStateValue();
    const {data}=useGoogleSearch(term);
    // const data=Response
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src={devgologo} alt="" />
                </Link>
            

            <div className="searchPage__headerBody">
                <Search hideButtons/>
            </div>

            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage_resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) in  for {term}
                    </p>

                    {data?.items.map(item=>(
                        <div className="searchPage__result">
                          <a href={item.link} className="itislink">
                              {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src &&(
                                  <img className="searchPage__resultImage" src={
                                      item.pagemap?.cse_image?.length>0 &&
                                        item.pagemap?.cse_image[0]?.src
                                  } />
                              )}
                              
                              
                               {item.displayLink}  </a> 
                          <a href={item.link} className="searchPage__resultTitle"><h2>{item.title}</h2></a>
                          <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}


                </div>
            )}
            
        </div>
    )
}

export default SearchPage
