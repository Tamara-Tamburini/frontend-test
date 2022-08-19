async function sendRequest(method, endpoint, params, payload) {
  const url =
    "https://front-test-api.herokuapp.com" + endpoint;
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const fetchResult = await fetch(url, {
    method: method,
    headers: headers,
    body: payload ? JSON.stringify(payload) : undefined,
  });

  const json = await fetchResult.text();
  const result = JSON.parse(json);

  return unwrapResult(result, fetchResult.status);
}

function unwrapResult(json, status) {
  if (!json) {
    throw new Error("Server sent an invalid answer. Error code: " + status);
  }
  const result = json;
  if (result && status >= 200 && status <= 300) {
    return result;
  }

  throw new Error(
    "unexpected error: " + JSON.stringify(result) + ". Error code: " + status
  );
}

export async function get(endpoint, params) {
  return sendRequest("GET", endpoint, params);
}
