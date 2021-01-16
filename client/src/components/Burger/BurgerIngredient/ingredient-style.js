const style = {
  BreadBottom: {
    height: "13%",
    width: "80%",
    background: "linear-gradient(#F08E4A, #e27b36)",
    borderRadius: "0 0 30px 30px",
    boxShadow: "rgb(193, 87, 17) -15px 0px 8px 13px inset",
    margin: "0.3% auto"
  },
  BreadTop: {
    height: "20%",
    width: "80%",
    background: "linear-gradient(#bc581e, #e27b36)",
    borderRadius: "50% 50% 0 0",
    boxShadow: "rgb(193, 87, 17) -15px 0px 7px 13px inset",
    margin: "0.3% auto",
    position: "relative"
  },
  Seeds1: {
    width: "10%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "30%",
    top: "50%",
    borderRadius: "40%",
    transform: "rotate(-20deg)",
    boxShadow: "inset -2px -3px #c9c9c9",
    ":after": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "-170%",
      top: "-260%",
      borderRadius: "40%",
      transform: "rotate(60deg)",
      boxShadow: "inset -1px 2px #c9c9c9"
    },
    ":before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "180%",
      top: "-50%",
      borderRadius: "40%",
      transform: "rotate(60deg)",
      boxShadow: "inset -1px -3px #c9c9c9"
    }
  },

  Seeds2: {
    width: "10%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "64%",
    top: "50%",
    borderRadius: "40%",
    transform: "rotate(10deg)",
    boxShadow: "inset -3px 0 #c9c9c9",
    ":before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "150%",
      top: "-130%",
      borderRadius: "40%",
      transform: "rotate(90deg)",
      boxShadow: "inset 1px 3px #c9c9c9"
    }
  },
  Seeds3: {
    width: "8%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "83%",
    top: "50%",
    borderRadius: "40%",
    transform: "rotate(20deg)",
    boxShadow: "inset -3px 0 #c9c9c9",
    ":before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "120%",
      top: "-130%",
      borderRadius: "40%",
      transform: "rotate(90deg)",
      boxShadow: "inset 1px 3px #c9c9c9"
    }
  },
  Seeds4: {
    width: "6%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "18%",
    top: "50%",
    borderRadius: "50%",
    transform: "rotate(40deg)",
    boxShadow: "inset -3px 0 #c9c9c9",
    ":before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "120%",
      top: "-130%",
      borderRadius: "40%",
      transform: "rotate(90deg)",
      boxShadow: "inset 1px 3px #c9c9c9"
    }
  },
  Seeds5: {
    width: "10%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "3%",
    top: "50%",
    borderRadius: "40%",
    transform: "rotate(165deg)",
    boxShadow: "inset -3px 0 #c9c9c9",
    ":before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "120%",
      top: "-130%",
      borderRadius: "40%",
      transform: "rotate(90deg)",
      boxShadow: "inset 1px 3px #c9c9c9"
    }
  },
  Seeds6: {
    width: "6%",
    height: "15%",
    position: "absolute",
    backgroundColor: "white",
    left: "48%",
    top: "50%",
    borderRadius: "50%",
    transform: "rotate(40deg)",
    boxShadow: "inset -3px 0 #c9c9c9",
    ":before": {
      content: "",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      left: "120%",
      top: "-130%",
      borderRadius: "40%",
      transform: "rotate(90deg)",
      boxShadow: "inset 1px 3px #c9c9c9"
    }
  },

  Meat: {
    width: "80%",
    height: "8%",
    background: "linear-gradient(#7f3608, #702e05)",
    margin: "0.3% auto",
    borderRadius: "15px"
  },

  Cheese: {
    width: " 81.5%",
    height: "4.5%",
    margin: "0.3% auto",
    background: "linear-gradient(#f4d004, #d6bb22)",
    borderRadius: "20px"
  },

  Salad: {
    width: "81%",
    height: "7%",
    margin: "0.3% auto",
    background: "linear-gradient(#228c1d, #91ce50)",
    borderRadius: "20px"
  },

  Bacon: {
    width: "80%",
    height: "3%",
    background: "linear-gradient(#bf3813, #c45e38)",
    margin: "0.3% auto"
  }
};
//inset -15px 0 #c15711
export default style;
