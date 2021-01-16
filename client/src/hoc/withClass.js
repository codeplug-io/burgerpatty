import React, { Component } from "react";

const withClass = (WrappedComponent, className) => {
  // return props => (
  //   <div className={className}>
  //     {" "}
  //     <WrappedComponent {...props}/>
  //   </div>
  // );
  //you can also return a component as a function body
  //incase you wanna reach  out to the web or get access to the Component method
  return class extends Component {
    //
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
    //
  };
};
export default withClass;
//withClass is equal to a function that returns a function with props as an argument
//is not a component
//use in another component as: 1.import 2.export default withClass(componentName, className)
