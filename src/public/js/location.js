const API = "https://archive-book.luxal.dev/";

function httpRequest(url, method, body, callBack) {
  fetch(url, {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: body ? body : {},
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
  fetch(API + `location/${idLocation}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });
}
