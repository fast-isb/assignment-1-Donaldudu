import React, { useEffect } from 'react'
import '../style/DeleteDish.css'
import axios from 'axios'
import { useState } from 'react'

let x=0;

const DeleteDish = () => {
    const [allDishes, setDish] = useState([{}]);
    const [n,setN]=useState(0);
    const options = {
        url: "http://localhost:3001/api/getDishes",
        method: "POST",
    };
    useEffect(()=>{
        
        axios(options)
        .then((response) => {
            const a = response.data;
            setDish(a);
            // setN();
            console.log("kaksaks",x);
        })
        .catch((err) => {
            console.log(err);
        });

    },x)
        
    function Show(obj) {
        return <OneDish name={obj.name} ipath={obj.ipath} price={obj.price} des={obj.des} />;
    }

    return (
        <>
            <h1 id='title'>Delete Dish</h1>
            <div className="box">
                <table className='table table-striped'>
                    <thead>
                        <th>Pic</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Delete Action</th>
                    </thead>

                    <tbody>
                        {allDishes.map(Show)}
                    </tbody>
                </table>

            </div>

        </>
    )
}


const OneDish = (props) => {
    
    const delHandel = () => {

        x++;
        console.log(x);
        const request = {
            url: "http://localhost:3001/api/deleteDish",
            method: "POST",
            data: props
        };

        axios(request).then((response) => {
        console.log(response)
        }).catch((err) => {
        console.log(err)
        })

        
    }
        
    return (
        <>
            <tr>
                <td><img src={"no Image"} alt="no img" /></td>
                <td>{props.name}</td>
                <td>{props.price}</td>
                <td>{props.des}</td>
                <td><button className='dellbutt' onClick={delHandel}>delete</button></td>
            </tr>
        </>
    )
}

export default DeleteDish