import reducer from "./auth";
import * as actionTypes from "../../actions/index";

describe("auth reducer", () => {
  it("should return the initialState", () => {
    expect(reducer(undefined, {})).toEqual({
      tokenId: null,
      userId: null,
      username: null,
      email: null,
      error: null,
      loading: false
    });
  });
  //
  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          tokenId: null,
          userId: null,
          username: null,
          email: null,
          error: null,
          loading: false
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          tokenId: "some-token",
          userId: "some-user-id"
        }
      )
    ).toEqual({
      tokenId: "some-token",
      userId: "some-user-id",
      username: undefined,
      email: undefined,
      error: null,
      loading: false
    });
  });
  //
});
