import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState('')
  const [user, setUser] = useState('')
  const select = useSelector(store => store)
  const dispatch = useDispatch()
  console.log(select.countCArd.card);


  function SendUser(){
    dispatch({type: 'add_user', payload: {url: url, user: user}})
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="d-flex">
          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "plus" })}
          >
            Plus
          </button>
          <h1 className="mx-4">{select.counDAta.count}</h1>
          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "minus" })}
          >
            Minus
          </button>
        </div> */}

        <div className="row">
          <div className="col-4">
            <input onInput={(val) => setUrl(val.target.value)} placeholder="Url" className="form-control" />
          </div>
          <div className="col-4">
            <input onInput={(val) => setUser(val.target.value)} placeholder="Name" className="form-control" />
          </div>
          <div className='col-4'>
            <button className='btn btn-success' onClick={SendUser}>Sent Message</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
