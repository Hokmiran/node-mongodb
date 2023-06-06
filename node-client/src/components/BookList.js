import React, { useEffect, useState } from 'react';
import axios from "axios";
import moment from "moment"

function BookList() {
    const [data, setData] = useState([]);
    const getData = () => {
        axios.get("http://localhost:3001/api/books")
            .then((res) => {
                setData(res.data);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Publish Date</th>
                    <th>Add Date</th>

                </tr>
            </thead>
            {data && data.map((item, index) => (
                <>  
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{`${moment(item.publishDate).format("MMM Do Y")}`}</td>
                            <td>{`${moment(item.addDate).format("MMM Do Y")}`}</td>
                        </tr>         
                </>
            ))}

        </table>
    )
}

export default BookList