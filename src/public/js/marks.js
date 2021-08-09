function httpRequest(url, method, body, callBack) {
  fetch(url, {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body,
  }).then(() => {
    callBack();
  });
};

function updateMark() {
  httpRequest(API + "mark", "PUT", JSON.stringify({
    id: getValueByID("idMark"),
    name: getValueByID("editMarkName"),
    idLocation: { id: getValueByID("editIdLocation") },
  }), () => {
    alert("Successfully updated");
  });

}

function addMark() {
  httpRequest(API + "mark", "POST", JSON.stringify(
    {
      name: document.getElementById("markName").value,
      idLocation: { id: getValueByID("idLocation") },
    },
  ), () => {
    alert("Successfully created");
  });
}

function deleteMark(idMark) {
  httpRequest(API + `mark/${idMark}`, "DELETE");
}


function getValueByID(id) {
  return document.getElementById(id).value;
}
