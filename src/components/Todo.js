import React, { useState } from 'react'
import img from "../img/img.svg";

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [Data, setData] = useState([]);

    const addData = () => {
        setInputData("");
        if (!inputData) {

        } else {
            setData([...Data, inputData]);
        }
    }

    const deleteData = (id) => {
        // alert(id);
        const newData = Data.filter((elem, key) => {
            return key !== id;
        })

        setData(newData);
    }

    const removeAll = () => {
        setData([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={img} alt="todoImg" />
                        <figcaption>Add Your List Here 🤞</figcaption>
                    </figure>

                    <div className="add-items">
                        <input type="text" placeholder="Add Item" value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addData}></i>
                    </div>

                    <div className="show-items">
                        {
                            Data.map((element, key) => {
                                return (
                                    <div className="each-item">
                                        <h3>{element}</h3>
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => { return deleteData(key) }}></i>
                                    </div>
                                );
                            })
                        }


                    </div>

                    <div className="show-items">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
