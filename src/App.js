import './App.css';
import { data } from './resources/tweetData';
import Post from './components/facebookPost/post';

import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter count={ 0 } />
      {/* {
        data.map((tweet, i) => {
          return <Post 
            key={ tweet.username + i }
            avatarImage={ tweet.avatar } 
            text={ tweet.text } 
            name={ tweet.username } 
            time={ tweet.timeStamp.toLocaleDateString() }
            commentCount={ tweet.comments.length }
            likes={ tweet.likes }
          />
        })
      } */}
    </div>
  );
}

export default App;
