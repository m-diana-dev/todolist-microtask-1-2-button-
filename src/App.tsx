import React, {MouseEvent} from 'react';

function App() {
    // const MyFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('I\'am Vasya');
    // }
    // const MySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('I\'am Petya');
    // }
    // const OnClickHandler = (name: string) => {
    //     console.log(name);
    // }

    const foo1 = () => {
        //ничего не передавать, 100200 в консоли
        console.log('100200');
    }
    const foo2 = (number: number) => {
        //передать 100200
        console.log(number);
    }
    return (
       <div>
           {/*<button onClick={(event)=>{console.log('1')}}>MyYoutubeChanel-1</button>*/}
           {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => OnClickHandler('Vasya')}>MyYoutubeChanel-1</button>*/}
           {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => OnClickHandler('Ivan')}>MyYoutubeChanel-1</button>*/}

           <button onClick={foo1}>1</button>
           <button onClick={(event) =>foo2(100200)}>2</button>
       </div>
    );
}

export default App;