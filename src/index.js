import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: "tehran",
    country: "iran"
};

/*ReactDOM.render(
    React.createElement("div", null,
        React.createElement("ul", null,
            React.createElement("li", null, "item_1"),
            React.createElement("li", null, "item_2 > "+ city.name),
            React.createElement("li", null, "item_3 > "+ city.country),
            React.createElement("li", null, "item_4")),
        React.createElement("h1", {style: {color: 'red'}}, "Hello Omidashouri")),
    document.getElementById('root')
);*/


//choose one above or bellow

/*ReactDOM.render(
    <ul>
        <li>item_1</li>
        <li id="heading">item_2 {city.name}</li>
        <li className="cool-text">item_3 {city.country}</li>
        <li>item_4</li>
    </ul>,
    document.getElementById('root')
);*/


// -------------------------------------------------------

/*function MyTag({myInput}){
    return (<p>{myInput}</p>);
}

function Hello(myProperties){
    return (
        <div>
            <h1>Welcome omid Ashouri</h1>
            <p>{myProperties.name}</p>
            <MyTag myInput="how do you do?"/>
            <MyTag myInput={100}/>
            <p>this is very cool</p>
        </div>
    );
}

ReactDOM.render(
    <Hello name="omid"/>,
    document.getElementById('root')
);*/


//----------------------------------------------


/*let myArray = ["myArray_item_1", "myArray_item_2", "myArray_item_3"];

function MyT(myIn) {
    return (
        <div>
            <ul>
                {myIn.myArg.map(el => (<li>{el}</li>))}
            </ul>
        </div>
    );
}

ReactDOM.render(
    <MyT myArg={myArray}/>,
    document.getElementById('root')
);*/


//----------------------------------------------


/*let myArrayObj = [
    {id:"1",name:"omid_1",message:"message_1"},
    {id:"2",name:"omid_2",message:"message_2"},
    {id:"3",name:"omid_3",message:"message_3"}

];

function MyT(myIn) {
    return (
        <div>
            <ul>
                {myIn.myArg.map(el => (<li key={el.id+el.name}>{el.id} | {el.name} | {el.message}</li>))}
            </ul>
        </div>
    );
}

ReactDOM.render(
    <MyT myArg={myArrayObj}/>,
    document.getElementById('root')
);*/


//----------------------------------------------


/*
function MyTagFunc1(myInTag) {
    return (
        <div>
            <h1>inside tag function 1, argument is: {myInTag.myTagFuncArg}</h1>
        </div>
    );
}

function MyTagFunc2(myInTag) {
    return (
        <div>
            <h1>inside tag function 2, argument is: {myInTag.myTagFuncArg}</h1>
        </div>
    );
}


function MyT(myIn) {
    if (myIn.myTArg === "fun1"){
        return <MyTagFunc1 myTagFuncArg="function_1 argument"/>
    }
    return <MyTagFunc2 myTagFuncArg="function_2 argument"/>
}

ReactDOM.render(
    //or: myTArg="fun2"
    <MyT myTArg="fun2"/>,
    document.getElementById('root')
);*/


//----------------------------------------------


/*
function MyTagFunc1() {
    return (
        <div>
            <h1>inside tag function 1</h1>
        </div>
    );
}

function MyTagFunc2() {
    return (
        <div>
            <h1>inside tag function 2</h1>
        </div>
    );
}


function MyTagFunc1_2() {
    return (
        //or <div>
        <React.Fragment>
            <MyTagFunc1/>
            <MyTagFunc2/>
        </React.Fragment>
        //or</div>
    );
}

ReactDOM.render(
    <MyTagFunc1_2/>,
    document.getElementById('root')
);

const [first,second,third]=[
    "firstItem", "secondItem", "thirdItem"
];

console.log(first);
console.log(second);
console.log(third);
*/


//----------------------------------------------


/*function MyApp() {
    //useState is built in function for setting initial state
    const [myStatus, setMyStatus] = useState("open");
    const [manager, setManager] = useState("omid");
    const [year, setYear] = useState(2020);
    return (
        <div>
            <div>
                <h1>year is:{year}</h1>
                <button onClick={()=>setYear(year+1)}>add year</button>
            </div>
            <div>
                <h1>manager on duty: {manager}</h1>
                <button onClick={() => setManager("omid ashouri")}>new manager</button>
            </div>
            <div>
                <h1>Status: {myStatus}</h1>
                <button onClick={() => setMyStatus("close")}>Close</button>
                <button onClick={() => setMyStatus("back in 5 min")}>Break</button>
                <button onClick={() => setMyStatus("open")}>Open</button>
            </div>
        </div>
    );
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);*/



//----------------------------------------------


/*function MyCheckBox() {
    const[checked,setChecked] = useState(false);
    useEffect(()=>{
        alert(`checkbox:${checked.toString()}`);
    });

    return(
        <div>
            <input type="checkbox" value={checked}
            onChange={()=>setChecked(checked=>!checked)}
            ></input>
            {checked ? "checked" : "not checked"}
        </div>
    );
}

ReactDOM.render(
    <MyCheckBox/>,
    document.getElementById('root')
);*/


//----------------------------------------------


function MyApp() {
    const[val1,setVal1] = useState("");
    const[val2,setVal2] = useState("");

    useEffect(()=>{
        console.log(`value 1 is :${val1}`);
    },[val1]);

    useEffect(()=>{
        console.log(`value 2 is :${val2}`);
    },[val1,val2]);

    return(
        <div>
            <label>Label1</label>
            <input value={val1} onChange={e=>setVal1(e.target.value)}/>
            <br/>
            <label>Label2</label>
            <input value={val2} onChange={e=>setVal2(e.target.value)}/>
        </div>
    );
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);