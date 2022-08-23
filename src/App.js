//functional (no constructor)

//pure function always return the same value
//impure functions returns different values
  //also if it creates a side effect outside its bounds (c changing)

import {useState,useEffect} from "react";

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () =>{

  const [searchField,setSearchField] = useState(''); // [value,setValue] it calls render when searchField value changes
  const [monsters,setMonsters]=useState([]);
  const [filteredMonsters,setFilterMonsters]=useState(monsters);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  },[monsters,searchField]) //it means, only render when monsters or searchField changes


  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return(
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox
        searchClassName = {'monsters-search-box'}
        onChangeHandler ={onSearchChange}
        searchPlaceholder ={'Search monsters'}
      />

      <CardList  
        monsters={filteredMonsters}
      />
  </div>
  )


}

export default App;