import './App.css';

import { Container } from './styled components/container';
import Header from './components/header';
import { FloatingButton } from './styled components/button';
import Main from './components/main';
import {AddSong,EditSong} from './components/forms'
import { useState } from 'react';


function App() {

  const [isVisible, setIsVisible] = useState(false);
  const [musicToPlay, setmusicToPlay] = useState({});
  const [iseditVisible,seteditVisible]=useState(false)
  const [searchString, setsearchString] = useState('');

  const handleAddButton=()=>{
    setIsVisible(true)
  }
  return (
    <div className="App">
      <Container>
        <Header musicToPlay={musicToPlay} setmusicToPlay={setmusicToPlay} seteditVisible={seteditVisible} setsearchString={setsearchString}/>
          <Main  setmusicToPlay={setmusicToPlay} searchString={searchString}/>
          <AddSong isVisible={isVisible} setIsVisible={setIsVisible}></AddSong>
          <EditSong musicToPlay={musicToPlay} iseditVisible={iseditVisible} seteditVisible={seteditVisible} setmusicToPlay={setmusicToPlay} ></EditSong>
        <FloatingButton onClick={handleAddButton}>Add Song</FloatingButton>
      </Container>
    </div>
  );
}

export default App;
