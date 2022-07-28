import React from 'react';
import './CSS/CategoryBar.css';

function CategoryBar({filterItem, CategoryList}) {
    return (
        <>
            <nav className="categorybar sticky-top">
                <div className="btn-group">
                    {
                        // iterating over each element of uniqueList(i.e passes via CategoryList)
                        CategoryList.map((curElem) => {
                            return (
                                //onclick filter list by current category
                                <button className="btn-group__item" onClick={() => filterItem(curElem)}>
                                    {curElem}
                                </button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default CategoryBar