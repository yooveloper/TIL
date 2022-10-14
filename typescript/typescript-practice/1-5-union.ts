/**
 * Union Types: OR
 */

type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(direction);
}

move("right");
move("jump"); // error

type TileSize = 8 | 16 | 32;
const tile1: TileSize = 8;
const tile2: TileSize = 6; // error

// function: login -> succes, fail

type SuccessState = {
  response: {
    body: string;
  };
};
type FailState = {
  reason: string;
};
type LoginState = SuccessState | FailState;

function login(id: string, pwd: string): LoginState {
  return {
    response: {
      body: "logged in",
    },
  };
}

// printLoginState(state: LoginState)
// success -> body
// fail -> reason

function printLoginState(state: LoginState) {
  if ("response" in state) {
    console.log(`👏 ${state.response.body}`);
  } else {
    console.log(`☠️ ${state.reason}`);
  }
}
