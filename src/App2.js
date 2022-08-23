//not optimized
import {Component} from 'react';

//import logo from './logo.svg';
import './App.css';

// first constructor
// second render
// third componentDidMount (mount initialState in the UI)
// 
class App extends Component {

  constructor(){
    console.log("constructor");
    super();
    
    this.state = {
      monsters:[
        // {
        //   id:'12e123',
        //   name:'Linda'
        // },
        // {
        //   id:'12e124',
        //   name:'Frank'
        // },
        // {
        //   id:'12e125',
        //   name:'Jacky'
        // },
        // {
        //   id:'12e126',
        //   name:'Andrei'
        // },
      ],
      searchField:'',
    };
  }

  componentDidMount(){ //onInit
    console.log("didMount");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>this.setState(()=>{
        return{monsters:users}
      },
      ()=>{
        console.log(this.state);
      }
      ));
  }

  render(){
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });


    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event)=>{
            const searchField = event.target.value.toLocaleLowerCase();

            // const filteredMonsters = this.state.monsters.filter((monster)=>{
            //   return monster.name.toLocaleLowerCase().includes(searchString);
            // });

            this.setState(()=>{
              return{searchField};
            });

        }}/>
        {
          // this.state.monsters.map((monster)=>{
            filteredMonsters.map((monster)=>{
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        
        
        /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName} I work at {this.state.company}</p>
          <button onClick={()=>{
            // this.setState({name:{firstName:'Juan',lastName:'Ticona'}});
            this.setState((state,props)=>{
              return{
                name:{firstName:'Juan',lastName:'Ticona'}
              }
            },
            ()=>
            {
              console.log(this.state); //subscription, callback
            });
          }}>Change Name</button>
        </header> */
        
        }
      </div>
    );
  }
}

export default App;
