const API = "http://localhost:8080/";


function show(elementId) {
  document.getElementById(elementId).style.display = "block";
}

function hide(elementId) {
  document.getElementById(elementId).style.display = "none";
}

function showHideCollapse(elementId, arrowIcon) {
  const element = document.getElementById(elementId);
  const arrow = document.getElementById(arrowIcon);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
    arrow.style.transform = "rotate(-90deg)";
  } else {
    element.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }

}

function setValueToInput(elementId, formId, models) {

  show(elementId);
  const form = document.getElementById(formId);
  for (const model of models) {
    if (model.name.toLowerCase().includes("date")) {
      const date = new Date(model.value);
      form[model.name].value = `${JSON.stringify(date.getUTCFullYear())}-${date.getMonth() + 1 < 10 ? `${0 + JSON.stringify(date.getMonth() + 1)}` : `${JSON.stringify(date.getMonth() + 1)}`}-${JSON.stringify(date.getDate())}`;
    } else {
      form[model.name].value = model.value;
    }
  }
}

async function httpRequest(url, method, body, callBack) {
  return await fetch(url, {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: body ? body : {},
  }).then((response) => {
    if (callBack) {
      callBack();
    }
    return response;
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

function validate(event) {
  console.log(event);
  if (event.value === "") {
    event.style.webkitTransition = ".5s linear";
    event.style.border = "1px solid red";
  } else {

    event.style.webkitTransition = ".5s linear";
    event.style.border = "1px solid black";
  }
}

function formatDate(date) {
  date = new Date(date);
  return (`${JSON.stringify(date.getUTCDate())}+'-'+${date.getMonth() + 1 < 10 ? `${0 + JSON.stringify(date.getMonth() + 1)}` : `${JSON.stringify(date.getMonth() + 1)}`}+${JSON.stringify(date.getDate())}`);
}
