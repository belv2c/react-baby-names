import React from 'react';
import { NameList } from './name-list';
import { useNames } from '../providers/names';

export function NamePicker({ searchValue, shortList, setShortList }) {
    const names = useNames();

    const filteredNames = names
    .filter((entry) => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(entry => !shortList.includes(entry.id));
    
    function addToShortList(id) {
        setShortList([...shortList, id]);
    }

    return (
       <NameList nameList={filteredNames} onItemClick={addToShortList} />
    );
}