import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions/index";
export class Posts extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <ul>
        {this.props.info.map(el => (
  <li key={el.id}>{el.title}</li>
        ))}
        {console.log("el",this.props)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
   console.log("state",state)
  return {
    info: state.info.slice(0, 10)
  };
}
export default connect(
  mapStateToProps,
  { getData}
)(Posts);



// functional
 import React, { useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { getData } from "../redux/actions/index";

 export default function Posts() {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getData());
  }, []);
  const users = useSelector(state => state.data.slice(0, 10))
     return (
   <ul>
    {users.map(el => (
     <li key={el.id}>{el.address.geo.lng}</li>
    ))}
   </ul>
     );
 }