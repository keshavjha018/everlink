import React, { useState } from 'react'
import CategoryBar from './CategoryBar'
import Card from './Card'
import LinksData from '../Api'

//stores unique category to automate CategoryBar element creation
const uniqueList = [...new Set(LinksData.map((curElem) => {
  return curElem.category;
})), "All",];

function Links() {

  //for management of state
  const [ListData, setListData] = useState(LinksData);


  //for category bar
  const [CategoryList, setCategoryList] = useState(uniqueList);


  // filter the type of Site => Educatioanl/Entertainment/ etc
  // category => argument 
  const filterItem = (category) => {

    // for "ALL" element of NAVBAR
    if (category === "All") {
      setListData(LinksData);
      return;
    }

    const updatedList = LinksData.filter((curElem) => {
      // return only those category from API which is = category argument
      return curElem.category === category;
    });

    
    //updates the ListData
    setListData(updatedList);
  }

  return (
    <>
      <CategoryBar filterItem={filterItem} CategoryList={CategoryList} />
      <Card ListData={ListData} />
    </>
  )
}

export default Links