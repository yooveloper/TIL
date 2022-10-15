// function: login -> succes, fail

type SuccessState2 = {
  result: "success";
  response: {
    body: string;
  };
};
type FailState2 = {
  result: "fail";
  reason: string;
};
type LoginState2 = SuccessState2 | FailState2;

function login(id: string, pwd: string): LoginState2 {
  return {
    result: "success",
    response: {
      body: "logged in",
    },
  };
}

// printLoginState(state: LoginState)
// success -> body
// fail -> reason

function printLoginState(state: LoginState2) {
  if (state.result === "success") {
    console.log(`👏 ${state.response.body}`);
  } else {
    console.log(`☠️ ${state.reason}`);
  }
}
