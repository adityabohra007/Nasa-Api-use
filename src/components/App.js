import React,{ Component } from 'react';
import "./styles/App.css";

import Nasa from "../Nasa";

import ImageView from "./ImageView";
import TitleView from "./TitleView";
import DateSelector from "./DateSelector";
import CopyRight from "./CopyRight";
import ExplainView from "./ExplainView";

class App extends Component{

    constructor(){
        super();
        this.state={ nasa:{} }
        this.handleSearchButton=this.handleSearchButton.bind(this)

    }

    handleSearchButton(){
        let date_selected = document.getElementById("date-selector").value;
        let url=``;
        if (date_selected.length){
            url = `https://api.nasa.gov/planetary/apod?date=`+date_selected+`&api_key=wvL74OQm4qWLDhNf1MMnNZtGTWhReMZsKwjQrqCB`
        }
        else{
        url = `https://api.nasa.gov/planetary/apod?api_key=wvL74OQm4qWLDhNf1MMnNZtGTWhReMZsKwjQrqCB`
        }
         fetch(url)
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             var nasa = new Nasa(data);
             console.log(nasa.title);
             this.setState({nasa})
             console.log(this.state)
    }).catch(err => console.log(err));

    }

    render()    {
        return(
            <div className="App">
            <ImageView url= { this.state.nasa.url }/>
           <div className="Title">
            <TitleView title={ this.state.nasa.title } />
            <DateSelector handleSearchButton ={this.handleSearchButton} />
            <ExplainView explanation= { this.state.nasa.explanation }/>
            <CopyRight copyright = { this.state.nasa.copyright }/>
            </div>
            </div>
        )
    }

}
export default App;
