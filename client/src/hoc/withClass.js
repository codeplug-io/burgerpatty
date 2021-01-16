import React from "react";

const withClass = (WrappedComponent, className) => {
  //
  return class extends component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
  //
};

export default withClass;
