import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import Comment from "./Comment"


const View = () => {

     const [people, setPeople] = useState([])

     const removeItem = (id) => {
          const newPeople = people.filter((people) => people.id !== id)
          setPeople(newPeople)

     }

     useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
               setPeople(res.data)
          })

     }, [])


     return (

          <div className="container view mt-5">
               <div className="row">
                    {people.map((item) => {
                         const {id, body} = item
                         
                         return(
                              <div className="col-sm-6 col-12 mb-5" key={id}>
                                   <div className="card">
                                        <div className="card-body">
                                             <p>
                                                  {body}
                                             </p>
                                             <Link to={"/"} className="text-decoration-none text-warning">
                                                  Back to main page
                                             </Link>

                                        </div>
                                        {/*  */}
                                        <div className="card-footer">
                                             <button type="button" className="btn btn-danger" onClick={()=> removeItem(id)}>Delete</button>
                                             <Comment />
                                        </div>
                                   </div>
                              </div>
                         )
                    })}
               </div>
               
          </div>
     )
}

export default View
