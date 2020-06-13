import React, {useState} from 'react';


function Room() {
    let [isLit, setLit] = useState(true);
    let [age , setAge] = useState(24);

    return (
    <div>
        This Room is {isLit? 'Lit': 'dark'}
        <br />
        Age: {age}
        <br/>
        <button onClick={() => setLit(!isLit)} >Toggle Light</button>
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge(++age);
                        }}>
            Increase Age
        </button>

    </div>
    
    
  );
}

export default Room;
