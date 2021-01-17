import React from 'react';

export function NameList({ nameList, onItemClick }) {

    return (
        <ul>
        {nameList.map((entry) => (
          <li className={entry.sex} key={entry.id}>
            <button onClick={() => onItemClick(entry.id)}> {entry.name}</button>
          </li>
        ))}
     </ul>
    )
}