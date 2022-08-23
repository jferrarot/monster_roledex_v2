import Card from "../card/card.component";

import './card-list.styles.css'

const CardList = ({monsters}) =>(
    //const {monsters} = props; because is only one element
    <div className='card-list'>
        {monsters.map((monster)=>{
            return<Card key={monster.id} monster = {monster}/>
        })}
    </div>
); //implicit return without the return
export default CardList;           