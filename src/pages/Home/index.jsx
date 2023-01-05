import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react'
import {MainContext} from '../../context/ContextProvider'

const Home = () => {
    const {users, setUsers} = useContext(MainContext)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    const [val, setVal] = useState("")
    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    if (error) return "Error";


    return (
        <>
            <input
                style={{width: "50%", margin: 20}}
                type="text"
                placeholder="Search..."
                  onChange={(e) => setVal(e.target.value)}
            />

            {loading ? (<h1>Loading...</h1>) : <>
                <table>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                   {users && 
                   users
                    .filter(item =>{
                    return val.trim().toLowerCase() === "" ? item : 
                    item.name.toLowerCase().includes(val) ||
                    item.username.toLowerCase().includes(val)
                   })
                   .map(d =>(
                    <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.username}</td>
                    <td>{d.email}</td>
                  </tr>
                   ))
                   }
                    </tbody>
                </table>
            </>}

        </>
    )
}

export default Home
