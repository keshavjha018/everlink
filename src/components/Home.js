import React, { useState } from 'react'
import CategoryBar from './CategoryBar'
import Card from './Card'
import LinksData from '../Data'
import Navbar from './Navbar';

//stores unique category to automate CategoryBar element creation
const uniqueList = [...new Set(LinksData.map((curElem) => {
  return curElem.category;
})), "All",];

function Home() {

  //for management of state
  const [ListData, setListData] = useState(LinksData);


  //for category bar
  const CategoryList = uniqueList;


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

  // For Searching
  const searchHandler = (searchTerm) => {

    console.log(searchTerm);

    // Filter Data based on search term
    const updatedList = LinksData.filter((curElem) => {

      // If no input: return the original
      if (searchTerm === '') {
        return curElem;
      }

      // Otherwise

      var matchesCategory = curElem.category.toLowerCase().includes(searchTerm);
      var matchesName = curElem.name.toLowerCase().includes(searchTerm);
      var matchesDesc = curElem.description.toLowerCase().includes(searchTerm);
      // var matchesLabelTags = curElem.LabelTags.toLowerCase().includes(searchTerm);

      return matchesName || matchesCategory || matchesDesc ;
    });

    //updates the List
    setListData(updatedList);
  }

  return (
    <>
      <Navbar searchHandler={searchHandler} />
      <CategoryBar filterItem={filterItem} CategoryList={CategoryList} />
      <Card ListData={ListData} />
    </>
  )
}

export default Home;