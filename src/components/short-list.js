import React, { Fragment } from 'react';
import { NameList } from './name-list';
import { useNames } from '../providers/names';

export function ShortList({ shortList, setShortList }) {
    const names = useNames();

    const shortListedNames = names.filter((entry) => 
        shortList.includes(entry.id)
);

function removeFromShortList(id) {
    setShortList(shortList.filter((i) => i !== id));
}

const hasNames = shortListedNames.length > 0 
return (
    <div className="short-list">
        <h2>{hasNames ? "Your names" : "Click on a name to add it to the list"}</h2>
        {hasNames && (
            <Fragment>
                <NameList 
                    nameList={shortListedNames} 
                    onItemClick={removeFromShortList} 
                />
            <hr />
            </Fragment>
        )}
    </div>
  );
}