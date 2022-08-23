import Card from '../card/card.component';
import { Monster } from '../../model/monster.model';

import './card-list.styles.css';

type CardListProps = {
    monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
    //const {monsters} = props; because is only one element
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />;
        })}
    </div>
); //implicit return without the return
export default CardList;
