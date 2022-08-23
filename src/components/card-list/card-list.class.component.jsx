import { Component } from "react";
import Card from "../card/card.component";

import './card-list.styles.css'

//when props are changed, render is called again
class CardList extends Component{
    render(){
        const {monsters} = this.props;
        return (
            <div className='card-list'>
            {monsters.map((monster)=>{
                return(
                    <Card
                        monster = {monster}
                    />
                )})}
            </div>
        )
    }
}
export default CardList;


// render(){
//     const {monsters} = this.props;
//     return (
//         <div className='card-list'>
//             {monsters.map((monster)=>(
                


//                 <div className='card-container' key={monster.id}>
//                     <img 
//                         src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} 
//                         alt={`monster ${monster.name}`} />
//                     <h2>{monster.name}</h2>
//                     <p>{monster.email}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }