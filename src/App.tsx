import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import { Monster } from './model/monster.model';

import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState(''); // [value,setValue] it calls render when searchField value changes
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>(
                'https://jsonplaceholder.typicode.com/users'
            );
            setMonsters(users);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterMonsters(newFilteredMonsters);
    }, [monsters, searchField]); //it means, only render when monsters or searchField changes

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className='App'>
            <h1 className='app-title'>Monster Rolodex</h1>

            <SearchBox
                className={'monsters-search-box'}
                onChangeHandler={onSearchChange}
                placeholder={'Search monsters'}
            />

            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
