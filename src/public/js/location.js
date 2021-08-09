const API = "http://localhost:8080/";

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

function update() {
  httpRequest(API + "location", "PUT", JSON.stringify({
    id: document.getElementById("idLocation").value,
    name: document.getElementById("editLocationName").value,
  }), () => {
    alert("Successfully updated");
  });

}

function addLocation() {
  httpRequest(API + "location", "POST", JSON.stringify({ name: document.getElementById("locationName").value }), () => {
    alert("Successfully created");
  });
}

function deleteLocation(idLocation) {
  httpRequest(API + `location/${idLocation}`, "DELETE", {}, () => {
    alert("Successfully deleted");
  });

}
