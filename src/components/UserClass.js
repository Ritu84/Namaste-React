import React from "react";
class  UserClass extends React.Component{
    constructor(props){
        super(props);//a method used to call the constructor of the parent class ie,React.component and passes props to it.
        //  it allows the parent class to initialize and set up any necessary properties or methods based on the passed props.
    }
    render(){
        const {name, location}=this.props;
        return(
            <div className='user-card'>
            <h1>Name: {name}</h1>
            <h1>location: {location} </h1>
            <h1>contact: @ritu84</h1>
        </div>
        );
     }
}
export default UserClass;
