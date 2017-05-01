import React, { Component } from 'react';
import Axios from 'axios';

import StoryList from './Components/StoryList/StoryList';
import './App.css';


class App extends Component {
  
  constructor() {

    super();

    this.state = {
      stories:[],
    };

        this.apiUrl = 'https://wt-<WEBTASK-ACCOUNT>-0.run.webtask.io/wt-mern-api/stories'
        this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    //fetch stories from api
    //update stories state
    Axios.get(this.apiUrl).then(({data}) => {
      this.setState({stories: data});
    })
  }