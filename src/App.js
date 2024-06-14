import TreeView from "./treeView";
import menu from './data.js'


function App() {
  return (
    <div className="App">
      <TreeView menu={menu}/>
    </div>
  );
}

export default App;
