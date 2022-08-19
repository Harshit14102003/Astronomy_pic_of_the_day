import React, { Component } from 'react'
let today = new Date()
let yyyy = today.getFullYear();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let result = yyyy + '-' + mm + '-' + dd;
class Pic extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      imageTitle: null,
      imageUrl: null,
      explanation:null
    }
     this.getNewPrevDate = this.getNewPrevDate.bind(this);
     this.getNewForwardDate = this.getNewForwardDate.bind(this);
  }
  getNewPrevDate(){
    let recent=today
    today=new Date(recent)
    today.setDate(today.getDate() - 1)
     yyyy = today.getFullYear();
 dd = String(today.getDate()).padStart(2, '0');
 mm = String(today.getMonth() + 1).padStart(2, '0');
 result = yyyy + '-' + mm + '-' + dd;
  }
  getNewForwardDate(){
    let recent=today
    today=new Date(recent)
    today.setDate(today.getDate() + 1)
     yyyy = today.getFullYear();
 dd = String(today.getDate()).padStart(2, '0');
 mm = String(today.getMonth() + 1).padStart(2, '0');
 result = yyyy + '-' + mm + '-' + dd;
  }
  // uZddFwu88xpWSuIZb5BUl4DzlVlHZcYt3F2ibJ9H
  // https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
  async componentDidMount(){
    let url=`https://api.nasa.gov/planetary/apod?api_key=uZddFwu88xpWSuIZb5BUl4DzlVlHZcYt3F2ibJ9H&date=${result}`
  let data=await fetch(url)
  let parsedData=await data.json()
  this.setState({imageTitle:parsedData.title,imageUrl:parsedData.url,explanation:parsedData.explanation,dater:today})
  }

  render() {
    return (
      <div>
        <h3 className="fs-3 fst-italic text-warning">{result}</h3>
        <h3 className='mt-4'>{this.state.imageTitle}</h3>
        <img className="img-thumbnail m-5" src={this.state.imageUrl} alt=" "/>
      <p className='m-4'>{this.state.explanation}</p>
      <div className='yo'>
   <nav aria-label="Page navigation example" className='mt-4'>
  <ul className="pagination">
    <li className="page-item"><button onClick={() =>{
this.getNewPrevDate()
this.componentDidMount()
    }}className="page-link" id='prev' href="#">Previous</button></li>
    <li className="page-item"><button button onClick={(e) =>{
      let roo=new Date()
      let rro=new Date(roo)
    rro.setDate(rro.getDate() - 1)
      if(today>rro){
       e.preventDefault();
      }
      else{
      this.getNewForwardDate()
this.componentDidMount()}}} className="page-link" id='next' href="#">Next</button></li>
  </ul>
</nav>
</div>
      </div>
    )
  }
}

export default Pic