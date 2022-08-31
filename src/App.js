import React,{useState} from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import Search from "./components/Search";
import FormInput from "./components/FormInput";
import TableList from "./components/TableList";
function App() {

  const [list, setList] = useState(BaseColaboradores);
  const [search, setSearch]= useState('');
  const [newList, setNewList]= useState(list)



  return (
    <div className="container">
      <header>
        <Search search={search} setSearch={setSearch} list={list} setNewList={setNewList}/>
      </header>
      <FormInput list={list} setList={setList} setSearch={setSearch}/>
      <hr/>
      <TableList list={search.length > 0? newList : list} />
    </div>
  );
}

export default App;
