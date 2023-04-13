



import './styles.css'

export default function App() {
  
  const title = "TODO-List"
  
  return ( 
<>
  <form className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>New Item</label>
      <input type='text' id="item"/>
    </div>
    <button className='btn'>Add</button>
    </form>
    <h1>{title}</h1>
  
  <ul className='list'>
    <li>
      <label>
        <input type="checkbox" />
        item 1
      </label>
      <button className='btn btn-danger'>DELETE</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        item 2
      </label>
      <button className='btn btn-danger'>DELETE</button>
    </li>
  </ul>
  </>
  )
}


