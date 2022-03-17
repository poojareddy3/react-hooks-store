
function HomePage(props) {
    return(
        <div>
            <h1>My Hardware Store</h1>
            

            <span>Currently On Sale: {props.saleItem} </span>

            <span><button onClick={props.toggleEditSaleItem}> {props.editable ? 'Hide' : 'Edit Sale Item' }
             </button></span>
            
            { props.editable ? <div> <input type="text" 
              value={props.saleItem} 
              onChange={props.handleItemCurrentlyOnSaleChange}/> </div> : null}
        </div>
    )
}

export default HomePage