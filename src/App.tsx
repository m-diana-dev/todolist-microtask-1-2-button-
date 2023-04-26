import React, {useState} from 'react';

function App() {
    const MyFirstSubscriber = () => {
        console.log('I\'am Vasya');
    }
    const MySecondSubscriber = () => {
        console.log('I\'am Petya');
    }
    return (
       <div>
           {/*<button onClick={(event)=>{console.log('1')}}>MyYoutubeChanel-1</button>*/}
           <button onClick={MyFirstSubscriber}>MyYoutubeChanel-1</button>
           <button onClick={MySecondSubscriber}>MyYoutubeChanel-1</button>
       </div>
    );
}

export default App;