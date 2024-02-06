import React from "react";
import ReactDOM from "react-dom/client";

    // const heading= React.createElement(
    //     "h1",//heading
    //     {id:"heading", xyz:"abc"},//attributes
    //     "hello world from react"//children
    //     );//core react, this simply returns an object


    //     // nested divs
    //     const parent= React.createElement("div",{id:"parent"},[
    //      React.createElement("div",{id:"child"},
    //      [React.createElement("h1",{},"i'm a h1 tag"),
    //      React.createElement("h2",{},"i'm h2 tag")]//can create array if want to make more than one childrens inside same div
    //      ),
    //      React.createElement("div",{id:"child2 "},
    //      [React.createElement("h1",{},"i'm a h1 tag"),
    //      React.createElement("h2",{},"i'm h2 tag")]//can create array if want to make more than one childrens inside same div
    //      )]
    //      );
    
    // const root= ReactDOM.createRoot(document.getElementById("root"));//dom react

    // root.render(parent);//render will take the heading obj and put it inside root in html: take the obj(heading) and create a h1 tag and put it inside root in div

    const heading=React.createElement(
    "h1",
    {id:"heading"},
    "i'm ritu sharma");//creates an object

    const elem= <span>this is another element</span>
    //react element 
    const jsxheading= (
        <h1 id="heading" className="ritu" tabIndex={3} >
        {elem}
         this is jsx</h1>
        );

    // normal fn. component
    const Title = function() { 
    return (
    <h1 id="heading" className="ritu" tabIndex={3} >
        this is jsx
        
    </h1>
    );
    };

    // functional component: some js that returns jsx element, below both are same for one line
    // component composition: one comp in another comp
    // in arrow fn. we dont need to return, but in noraml fn. we need to return the fn.
    const Headingcomp = ()=>(
    <div> 
       <h2> {200+300}</h2>
        {/* <Title/>  */ jsxheading} 
        <Title/>
        <Title></Title>
        {Title()}
        <h1>this is functional component</h1>
      </div>
);
//     const Headingcomp3= function()
// {    return  
//      (<div> 
//         <Title/>
//         <h1>this is functional component</h1>
//       </div>
//      );
// };
    
    const Headingcomp2 = ()=>(<h1>this is functional component2</h1>);
    
    
    const root= ReactDOM.createRoot(document.getElementById("root"));

    root.render(jsxheading);//render will take the obj in heading and will display in root in html
    root.render(<Headingcomp/>);
    // root.render(<Title/>);
    // root.render(<Headingcomp2/>);
