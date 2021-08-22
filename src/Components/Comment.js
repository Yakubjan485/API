import React, { Component } from 'react'

export class Comment extends Component {

     constructor(props) {
          super(props)
          this.state = {
               text: "",
               todoList: [],
               selectedIndex: -1
          }
          
     }

    


     render() {
           const getText = (event) => {
                this.setState({
                     text:event.target.value
                })
           }
           const addComment = () => {
                if (this.state.text.length > 0) {
                     this.state.todoList.push(this.state.text)
                     this.setState({
                          todoList: this.state.todoList, text: ""
                     })
                }
               

               
               this.setState({
                    todoList: this.state.todoList, selectedIndex: -1, text: ""
               })
           }
           const deleteComment = (index) => {
                this.state.todoList.splice(index, 1)
                this.setState({
                     todoList: this.state.todoList
                })
           }
          



          return (
               <div className="mt-5 comment">
                    <input type="text" value={this.state.text} onChange={getText} className="form-control" placeholder="Type something" />
                    <button type="button" className="btn btn-success mt-3" onClick={addComment}>Add Comment</button>
                    {this.state.todoList.map((item, index) => {
                         return(
                              <div>
                             <p className="mt-3">{item}</p>
                             <div className="d-flex align-items-center justify-content-between">
                              <button type="button" className="btn btn-danger" onClick={()=> deleteComment(index)}>
                                   Delete
                              </button>
                              {/*  */}
                             </div>

                             

                              </div>
                             
                         )
                    })}
               </div>
          )
     }
}

export default Comment
