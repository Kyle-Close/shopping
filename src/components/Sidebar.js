import React from "react";

import "../styles/Sidebar.css"

import categories from "../data/Categories";
import tee from "../img/tee.svg"
import expandArrow from '../img/expand-arrow.svg'

function Sidebar(){
    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleClick(){
        setIsExpanded(prev => !prev)
      }

    const categoryList = categories.map((category, key) => {
      if(!category.children){
        return <Category key={key} category={category} />
      }else{
        return <CategoryWithChildren handleClick={handleClick} key={key} category={category} isExpanded={isExpanded} />
      }
    })
  
    return (
      <div className="sidebar">
        {categoryList}
      </div>
    )
  }

function Category({ category }) {
    return (
      <div className="category">
        <img src={tee} width={"30px"}/>
        <h1>{category.name}</h1>
      </div>
    )
  }
  
  function ChildCategory({ childName }) {
    return (
      <div className="child-category">
        <img src={tee} width={"25px"} />
        <h5>{childName}</h5>
      </div>
    )
  }
  
  function CategoryWithChildren({ category, isExpanded, handleClick }) {
    return (
      <div className="category category-children">
        <div onClick={handleClick} className="expand-section">
          <img src={expandArrow} width={"30px"}/>
          <h1>{category.name}</h1>
        </div>
        {isExpanded && category.children.map((childName, key) => <ChildCategory key={key} childName={childName} />)}
      </div>
    )
  }

export default Sidebar