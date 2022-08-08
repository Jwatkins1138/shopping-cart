import React, { useState, useEffect } from "react";

const SideBar = (props) => {
  const [search, setSearch] = useState(false);

  const showSearch = () => {
    setSearch(true);
  }

  const hideSearch = () => {
    setSearch(false);
  }

  return (
    <aside className="side-bar">
      
      <>
      {search === true ? (
      <>
      <div className="side-title"><h3>search</h3><button className="minus" onClick={hideSearch}></button></div>
      <div className="side-item"><h4>type</h4></div>
      <div className="side-item"><label htlmfor="rock">rock</label><input id="rock" type="radio" name="type-search" onChange={props.sideProps.tSearch("rock")}/></div>
      <div className="side-item"><label htlmfor="apparel">apparel</label><input id="apparel" type="radio" name="type-search" onChange={props.sideProps.tSearch("apparel")}/></div>
      <div className="side-item"><label htlmfor="decor">decor</label><input id="decor" type="radio" name="type-search" onChange={props.sideProps.tSearch("decor")}/></div>
      <div className="side-item"><label htlmfor="accessory">accessories</label><input id="accessory" type="radio" name="type-search" onChange={props.sideProps.tSearch("accessory")}/></div>
      <div className="side-item"><label htlmfor="clear">clear</label><input id="clear" type="radio" name="type-search" onChange={props.sideProps.tSearch("")}/></div>
      <div className="side-item"><h3>price</h3></div>
      <div className="side-item"><label htlmfor="<=5">under $5</label><input id="<=5" type="radio" name="price-search" onChange={props.sideProps.pSearch([0,5])}/></div>
      <div className="side-item"><label htlmfor="5-25">$5-$25</label><input id="5-25" type="radio" name="price-search" onChange={props.sideProps.pSearch([5,25])}/></div>
      <div className="side-item"><label htlmfor="25-50">$25-$50</label><input id="25-50" type="radio" name="price-search" onChange={props.sideProps.pSearch([25,50])}/></div>
      <div className="side-item"><label htlmfor="50-100">$50-$100</label><input id="50-100" type="radio" name="price-search" onChange={props.sideProps.pSearch([50,100])}/></div>
      <div className="side-item"><label htlmfor="100-1000">$100-$1,000</label><input id="100-1000" type="radio" name="price-search" onChange={props.sideProps.pSearch([100,1000])}/></div>
      <div className="side-item"><label htlmfor=">1000">over $1,000</label><input id=">1000" type="radio" name="price-search" onChange={props.sideProps.pSearch([1000,10000000])}/></div>
      <div className="side-item"><label htlmfor="clear">clear</label><input id="clear" type="radio" name="price-search" onChange={props.sideProps.pSearch([])}/></div>
      </>
          ) : (
            <div className="side-title"><h3>search</h3><button className="plus" onClick={showSearch}></button></div>
          )}
      </>
      
    </aside>
  )
}

export default SideBar;