import React, {Component} from 'react';
import './App.css';
import SideBar from '../components/SidBar/SideBar';
import TopRowArray from '../components/AllContent/TopRowArray';
import Navbar from '../components/TopNavbar/Navbar';
import CollButton from '../components/CollButton';
import AllContent from '../components/AllContent/AllContent';
import getData from '../components/Charts/dataArray';
import BarChart from '../components/Charts/BarChart';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageArray: TopRowArray,
      data: getData(),
      value: '',
      cTitle: ''
    }
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        data: getData()
      })
    }, 5000)
  }

  onChangeDataValue = (event) => {
    console.log(event)
    this.setState({ dataArray: event })
    
  }

  onItemClick = (event) => {
    this.setState ({ cTitle : event })
  }
  
  render(){
    const targetPage = this.state.pageArray.filter(page => {
      return page.name.toLocaleLowerCase().includes(this.state.cTitle.toLocaleLowerCase())
    })
    
    return (
      <div className="wrapper main-page font-body">
        <SideBar onItemClick={this.onItemClick} />
        <div id="content">
          <Navbar />
          <CollButton />
          <AllContent 
            pageArray={targetPage} 
            onChangeDataValue={this.onChangeDataValue}
          />
          <BarChart
            data={this.state.data}
            title={this.state.title}
          />
          {/* <ChartScript 
            pageArray={targetPage} 
            onChangeDataValue={this.onChangeDataValue}
            dataLabels = {dataLabels}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
