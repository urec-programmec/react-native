import React from "react"; 
import Container from "./components/Container";

class App extends React.Component {


  width = undefined;
  height = undefined;
  data = [];
  ddata = [];

    constructor(props) {
      super(props);
      
      this.height = Math.max(
        document.documentElement["clientHeight"],
        document.body["scrollHeight"],
        document.documentElement["scrollHeight"],
        document.body["offsetHeight"],
        document.documentElement["offsetHeight"]
      );

      this.height = (this.height - this.height % 30) / 30
      this.width = Math.max(
        document.documentElement["clientWidth"],
        document.body["offsetWidth"],
        document.documentElement["offsetWidth"]
      );
      this.width = (this.width - this.width % 30) / 30
    }

    createData(){
      let s = [];
      let ss = [];
      for (let i = 0; i < this.height; i++){
        s = [];
        ss = [];
        for (let j = 0; j < this.width; j++){
          s.push(document.getElementById(i + " " + j));
          ss.push('unlive');
        }
        this.data.push(s);
        this.ddata.push(ss);
      }

      for (let i = 0; i < this.height; i++){
        for (let j = 0; j < this.width; j++){
          if(Math.random() < 0.3){
            this.data[i][j].classList.add("live");
            this.ddata[i][j] = 'live';
          }
        }
      }
    }

    updateField(){

      setInterval(() => {
        for (let i = 0; i < this.height; i++){
          for (let j = 0; j < this.width; j++){
            let owns = [];
            if (i !== 0)
              owns.push(this.data[i - 1][j])
            if (i !== this.height - 1)
              owns.push(this.data[i + 1][j])
            if (j !== 0)
              owns.push(this.data[i][j - 1])
            if (j !== this.width - 1)
              owns.push(this.data[i][j + 1])

            if (i !== 0 && j !== 0)
              owns.push(this.data[i - 1][j - 1])

            if (i !== 0 && j !== this.width - 1)
              owns.push(this.data[i - 1][j + 1])

            if (i !== this.height - 1 && j !== 0)
              owns.push(this.data[i + 1][j - 1])

            if (i !== this.height - 1 && j !== this.width - 1)
              owns.push(this.data[i + 1][j + 1])

            let cnt = owns.filter(x => x.classList.contains('live')).length;
              // console.log(cnt);

            
            if (this.data[i][j].classList.contains("live") && (cnt < 2 || cnt > 3)){
              this.ddata[i][j] = 'unlive';
            }
            else if (!this.data[i][j].classList.contains("live") && cnt === 3){
              this.ddata[i][j] = 'live';
            }
          }
        }

        console.log(this.ddata);
        for (let i = 0; i < this.height; i++){
          for (let j = 0; j < this.width; j++){
            if (this.ddata[i][j] === 'live')
              this.data[i][j].classList.add("live");
            else
              this.data[i][j].classList.remove("live");
          }
        }
      }, 300);
    }

      // 

      componentDidMount(){

        this.createData();

        setTimeout(() => {
          this.updateField(); 
        }, 0);
      }

  render(){
    return (
      <div>
        <Container height={this.height} width={this.width}></Container>
      </div>
    );
  }
}

export default App;
