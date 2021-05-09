import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';

class Test extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        this.setState({loading: false})
    }

    render(){
        let content = this.state.loading ? <Spinner /> : cars.map((c, i) => <div key={i}>{c.name}</div>)

        return (
            <div>{content}</div>
        )
    }
}