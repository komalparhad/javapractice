import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
   render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
      />
          <Routes>
            <Route  exact path="/science"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}/>
            <Route exact path="/business"element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" />}/>
            <Route  exact path="/Entertainment"element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />}/>
            <Route exact path="/General"element={<News setProgress={this.setProgress} key="General" apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="General" />}/>
            <Route exact path="/Health"element={<News setProgress={this.setProgress} key="Health"apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="Health" />}/>
            <Route exact path="/Sports"element={<News setProgress={this.setProgress} key="Sports"apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="Sports" />}/>
            <Route exact path="/Technology"element={<News setProgress={this.setProgress} key="Technology"apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="Technology" />}/>
          </Routes>
        </Router>
      </div>
    );
  }
}