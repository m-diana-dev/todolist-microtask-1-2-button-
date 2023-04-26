import React, {MouseEvent} from 'react';
import {Button} from "./components/Button";

function App() {
    const Button1foo = (subscriber: string) =>{
        console.log(subscriber)
    }
    const Button2foo = (subscriber: string) =>{
        console.log(subscriber)
    }
    return (
       <div>
           <Button name={'MyYoutubeChanel-1'} callBack={()=>Button1foo('I\'m Vasya')}/>
           <Button name={'MyYoutubeChanel-2'} callBack={()=>Button2foo('I\'m Ivan')}/>
       </div>
    );
}

export default App;