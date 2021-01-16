const style = {
  BuildControl: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px 0",
    " Button": {
      display: "block",
      font: "inherit",
      padding: "5px",
      margin: "0 5px",
      width: "80px",
      border: "1px solid #AA6817",
      cursor: "pointer",
      outline: "none",
      ":disabled": {
        backgroundColor: "#AC9980",
        border: "1px solid #7E7365",
        color: "#ccc",
        cursor: "default"
      },
      ":hover:disabled": {
        backgroundColor: "#AC9980",
        color: "#ccc",
        cursor: "not-allowed"
      }
    }
  },
  Less: {
    backgroundColor: "#D39952",
    color: "white",
    ":hover": {
      backgroundColor: "#DAA972",
      color: "white"
    },
    ":active": {
      backgroundColor: "#DAA972",
      color: "white"
    }
  },
  More: {
    backgroundColor: "#8F5E1E",
    color: "white",
    ":hover": {
      backgroundColor: "#99703F",
      color: "white"
    },
    ":active": {
      backgroundColor: "#99703F",
      color: "white"
    }
  },
  Label: {
    padding: "10px",
    fontWeight: "bold",
    width: "80px"
  }

  //
};

export default style;
