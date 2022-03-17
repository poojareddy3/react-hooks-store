import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';


function App() {

  const [itemCurrentlyOnSale, setItemCurrentlyOnSale] = useState('A Brush')
  //since we want to toggle a text-input, we will need a kind of boolen variable on our state to store this
  const [editable, setEditable] = useState(true)

  //we just set up a flag on the state of our component, deciding when to display our input field can be accomplished via if-stmts or ternary's
  //we will hide our text input when the editable is true

 const toggleEditSaleItem = event => setEditable(!editable)

 //Everytime the input text changes, we want the corresponding value on our state to update as well
 const handleItemCurrentlyOnSaleChange = (event) => {
   const itemOnSale = event.target.value
   setItemCurrentlyOnSale(itemOnSale)
 }
 
  return (
    <div className="App">
     <HomePage 
        saleItem={itemCurrentlyOnSale} 
        editable = {editable}
        toggleEditSaleItem = {toggleEditSaleItem}
        handleItemCurrentlyOnSaleChange={handleItemCurrentlyOnSaleChange}
     />
    </div>
  )
}

export default App;
