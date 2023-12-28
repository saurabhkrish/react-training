import React, {Component} from "react";
import './Header.css';
import Logo from '../../assets/logo512.png'
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {name: "Krish"}
        this.title = props.title;
        this.handleClick = this.handleClick.bind();
    }
    
    handleClick = () => {
        // alert("Hello Class");
        this.setState({name: "Krish Technolabs"})
    }

    render() {
        const {title} =this.props;
        return(
            <>
            <h4>
                {title}
            </h4>
            <button type="button" onClick={this.handleClick}>Click Me</button>
            <h5>{this.state.name}</h5>
            </>
        )
    }
}
 
export default Search;