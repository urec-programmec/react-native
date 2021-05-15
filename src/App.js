import React from "react"; 
import Row from "./components/Row";
import Panel from "./components/Panel";

class App extends React.Component {

  data = undefined;
  interval = undefined;

  state = {
    count: undefined  
  }

    constructor(props) {
      super(props);
      this.state = {count: 10};
      this.data = [];
      this.interval = null;
    }

    setCount = (cnt) => {
      clearInterval(this.interval);
      this.setState({count: cnt});
    }
    setData = (data) => {
      this.data = data;
    }

    shuffle() {
      clearInterval(this.interval);
      var currentIndex = this.data.length, temporaryValue, randomIndex;
    
      while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.data[currentIndex];
        this.data[currentIndex] = this.data[randomIndex];
        this.data[randomIndex] = temporaryValue;
      }

      this.setState({data: this.data});
    }

    sort(){
      let i = 0;
      let j = 0;
      let t = 0;

      this.interval = setInterval(() => {
        if (i === this.data.length - 1){
          clearInterval(this.interval);
          setTimeout(() => {alert("that's all");}, 50)
        }
        
        if (this.data[j] > this.data[j + 1]){
          t = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = t;
        }

        while(this.data[j] <= this.data[j + 1]){
          j++;
          if (j === this.data.length - i - 1){
            i++;
            j = 0;
            if (i === this.data.length - 1){
              clearInterval(this.interval);
              setTimeout(() => {alert("that's all");}, 50)
              break;
            }
          }
        }
        this.setState({data: this.data}); 
      }, 500);
    }

  render(){
    return (
      <div className="items">
        <Panel setCount={this.setCount} shuffle={this.shuffle.bind(this)} sort={this.sort.bind(this)}></Panel>
        <Row count={this.state.count} data={this.data} setData={this.setData}/>
      </div>
    );
  }
}

export default App;
