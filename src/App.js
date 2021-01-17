import React , { Fragment, useState } from 'react';
import './css/styles.css';

import { NamePicker } from './components/name-picker';
import { Search } from './components/search';
import { ShortList } from './components/short-list';
import { ResetSearch } from './components/reset-search';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);

   return (
    <Fragment>
      <Search 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />
      <ShortList 
        shortList={shortList} 
        setShortList={setShortList} 
      />
      <NamePicker 
        searchValue={searchValue} 
        shortList={shortList} 
        setShortList={setShortList} 
      />
      <ResetSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
   </Fragment>
   )
}

export default App;
