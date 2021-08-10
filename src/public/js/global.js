const API = "http://localhost:8080/";
if (localStorage.getItem("lastActiveTab")) {
  setTimeout(() => {
    console.log(localStorage.getItem("lastActiveTab"));
    document.getElementById(localStorage.getItem("lastActiveTab")).click();
  }, 200);
}

function show(elementId) {
  document.getElementById(elementId).style.display = "block";
}

function hide(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function setValueToInput(elementId, models) {
  show(elementId);
  for (const model of models) {
    document.getElementById(model.name).value = model.value;
  }
}

async function httpRequest(url, method, body, callBack) {
  fetch(url, {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: body ? body : {},
  }).then(async () => {
    callBack();
  });
};

async function refreshData() {
  const response = await fetch(API, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.getElementById("body").innerHTML = await response.text();
}

async function refreshOverviewData() {
  const response = await fetch(document.URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.getElementById("body").innerHTML = await response.text();
}

function rememberTab() {
  const element = document.querySelectorAll(".active");
  localStorage.setItem("lastActiveTab", element[0].id);
}
