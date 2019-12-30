import React, { Component } from 'react';
import {getMessages} from '../redux/actions'
import { connect } from 'react-redux';

class Inbox extends Component {
    componentDidMount() {
        this.props.dispatch(getMessages())
    };
    render() {
        return (

            <div style={{overflowY:"scroll",height:"735px"}}>
             
                 <h1>Inbox:</h1>
                 {console.log("ps",this.props.messages)}
                 {this.props.messages.map((message) => (
                     <div key={message.id}>
                     <i key={message.id}>
                         {message.title}
                     </i>
                     <br/>
                     <i key={message.id}>
                         {message.body}
                     </i>
                     <hr/>
                     </div>
                 ))}
             </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Inbox);