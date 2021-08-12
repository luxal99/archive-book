async function addOrUpdateLocation() {
  const locationForm = document.getElementById("location-form");
  if (!locationForm.id.value) {
    await httpRequest(API + "location", "POST", JSON.stringify({ name: locationForm.name.value }), async () => {
      alert("Successfully created");
      await refreshData();
    });
  } else {
    await httpRequest(API + "location", "PUT", JSON.stringify(
      {
        id: locationForm.id.value,
        name: locationForm.name.value,
      }), async () => {
      alert("Successfully updated");
      await refreshData();
    });
  }
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
