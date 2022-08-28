
import './App.css';
import { faker } from "@faker-js/faker";

function App () {
  return (
    <div className="ui container comments">
      <div className='comments'>
        <a href='/' className=' '>
          <img alt="avatar" src='image' />
        </a>
        <div className='content '>
          <a href='/' className='autor'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'> Today at 6:00PM</span>
          </div>
          <div className='text'> Nice blog post!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
