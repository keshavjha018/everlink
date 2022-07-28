import React from 'react';
import './CSS/CategoryBar.css';

function CategoryBar({filterItem, CategoryList}) {
    return (
        <>
            <div className="categorybar sticky-top">
                <div className="btn-group">
                    {
                        // iterating over each element of uniqueList(i.e passes via CategoryList)
                        CategoryList.map((curElem, idx) => {
                            return (
                                //onclick filter list by current category
                                <button key={idx} className="btn-group__item" onClick={() => filterItem(curElem)}>
                                    {curElem}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryBar