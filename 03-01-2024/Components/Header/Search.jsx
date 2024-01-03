import React, {Component} from "react";
import './Header.css';
import Logo from '../../assets/logo512.png'
class Search extends Component {
    constructor(props){
        console.log("1 - Construtor")
        super(props);
        this.state = {name: "Krish"}
        this.title = props.title;
        this.handleClick = this.handleClick.bind();
    }
    
    static getDerivedStateFromProps() {
        console.log("2 - getDerivedStateFromProps")
    }

    handleClick = () => {
        // alert("Hello Class");
        this.setState({name: "Krish Technolabs"})
    }
    componentDidMount() {
        this.setState({name: "Krish Technolabs"})
        console.log("4 - componentDidMount")
        fetch("get", "url")
        .then((data) => JSON.parse(data))
        .then(data =>  this.setState({data: data}))
    }
    shouldComponentUpdate() {
        console.log("4 - shouldComponentUpdate")
        return true;
      }
      getSnapshotBeforeUpdate(prevProps, prevState){
        if(this.state.name !== prevState.name){
            console.log("State Change")
        }
        console.log({prevProps, prevState})
        console.log(this.props, this.state)
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate(prevProps, prevState, snapshot)");
        console.log({prevProps, prevState, snapshot})
      }

      componentWillUnmount(){
        alert("componentWillUnmount()")
      }

      renderTableRows(data) {
        data.map((cols, index) => {
            return (
                <tr>
                    <td>{cols.name}</td>
                    <td>{cols.email}</td>
                </tr>
            )
        })
      }
    render() {
        console.log("3 - render")
        const {title} =this.props;
        return(
            <>
            <h4>
                {title}
            </h4>
            <button type="button" onClick={this.handleClick}>Click Me</button>
            <h5>{this.state.name}</h5>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows(this.state.data)}
                </tbody>
            </table>
            {/* {this.renderTableRows} */}
            </>
        )
    }
}
 
export default Search;