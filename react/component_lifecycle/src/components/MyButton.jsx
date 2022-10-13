import React from "react";

export default class MyButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count : 1
        }

        //function untuk increment state count
        this.increment = ()=>{
            this.setState({
                count : this.state.count + 1
            })
        }
    }


    //component did mount
    componentDidMount(){
        console.info("MyButton Mounting ke Halaman Browser")
    }

    //component did update
    componentDidUpdate(){
        console.info("MyButton diupdate", this.state.count)
    }

    //component will unMount
    componentWillUnmount(){
        console.info("My Button di Destroy !")
    }

    render(){
        return(
            <button onClick={this.increment}> Button {this.state.count}</button>
        )
    }


}