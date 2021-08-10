function update() {
  httpRequest(API + "location", "PUT", JSON.stringify({
    id: document.getElementById("idLocation").value,
    name: document.getElementById("editLocationName").value,
  }), () => {
    alert("Successfully updated");
  });

}

async function addLocation() {
  await httpRequest(API + "location", "POST", JSON.stringify({ name: document.getElementById("locationName").value }), async () => {
    alert("Successfully created");
    await refreshData();
  });
}

async function deleteLocation(idLocation) {
  await fetch(API + `location/${idLocation}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  });

  await refreshData();
}
