
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
  fetch(API + `mark/${idLocation}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
}


function getValueByID(id) {
  return document.getElementById(id).value;
}
