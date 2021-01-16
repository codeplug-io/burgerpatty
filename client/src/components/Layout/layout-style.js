// .content {
//   margin-top: 160px;
// }
// .Content:hover {
//   color: red;
// }
// h3 {
//   color: green;
// }
// .blue {
//   color: blue;
// }
// .container {
//   position: relative;
//   margin: auto;
//   width: 100%;
// }
// @media (min-width: 700px) {
//   .container {
//     background-color: purple;
//     text-align: center;
//   }
// }

const style = {
  content: {
    marginTop: "62px"
  },
  toolbar: {
    color: "blue",
    ":hover": {
      color: "red"
    }
  },
  bold: {
    fontWeight: "bold"
  },
  query: {
    "@media (max-width: 500px )": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      textAlign: "center"
    }
  }
};

export default style;
