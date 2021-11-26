import React from 'react';
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
);