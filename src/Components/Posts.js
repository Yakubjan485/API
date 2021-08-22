import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
const Posts = () => {

     const [data, setData] = useState([])

     useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
               console.log(res);
               setData(res.data)
          })

     }, [])


     return (
          <div className="container posts mt-5">
               <div className="row">
                    <div className="col-12 mb-5">
                         <p className="text-center info">
                              All Back-end information were token from 
                              <a className="text-decoration-none" href="https://jsonplaceholder.typicode.com/" target="_blank"> here</a>
                         </p>
                    </div>
                    {data.map((item) => {
                         const {id, title} = item
                         return(
                              <div key={id} className="col-lg-4 col-sm-6 col-12 mb-5">
                         <div className="card">
                              <div className="card-header text-center">
                                   <h5>Post title</h5>
                              </div>
                              <div className="card border-0">
                                   <div className="card-body text-center">
                                        <h6>{title}</h6>
                                   </div>
                              </div>
                              <div className="card-footer bg-white text-center">
                                   <Link to={"/posts/" + item.id} className="text-decoration-none">View Post</Link>


                              </div>
                         </div>
                    </div>
                         )
                    })}
               </div>
               
               
          </div>
     )
}

export default Posts
