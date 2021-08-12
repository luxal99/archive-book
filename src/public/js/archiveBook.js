async function create() {
  const archiveBookForm = document.getElementById("archive-book-form").elements;

  const body = {
    title: archiveBookForm.title.value,
    idLocation: { id: archiveBookForm.idLocation.value },
    idMark: { id: archiveBookForm.idMark.value },
    note: archiveBookForm.note.value,
    shelfNo: archiveBookForm.shelfNo.value,
    startYear: archiveBookForm.startYear.value,
    endYear: archiveBookForm.endYear.value,
    expirationDate: archiveBookForm.expirationDate.value,
  };


  if (isArchiveBookFormValid(Object.entries(body).map((entry) => (entry[0])), archiveBookForm)) {
    const response = await fetch(API + "archive-book", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const savedArchiveBook = await response.json();
    await uploadDocuments(savedArchiveBook.id, () => {
      location.reload();
    });
    rememberTab();
    location.reload();
  } else {
    alert("Fill all required fields");
  }
}

async function uploadDocuments(idArchiveBook, callBack) {
  let progress = 0;
  let increment = 0;
  const files = document.getElementById("document-upload").files;
  for (const file of files) {
    const formData = new FormData();
    formData.append("document", file);

    await fetch(API + `document/${idArchiveBook}`, {
      method: "POST",
      body: formData,
    });

    increment++;
    progress = (increment / files.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;

    if (progress === 100) {
      callBack();
    }
  }
}

async function completeUpload() {
  await refreshOverviewData();
}

function openArchiveBookOverview(archiveBookID) {
  rememberTab();
  location.href = `http://localhost:8080/overview/${archiveBookID}`;
}

async function deleteDocument(idDocument) {
  await fetch(API + `document/${idDocument}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  }).then(async () => {
    await refreshOverviewData();
  });
}

async function deleteArchive(idArchive) {
  await fetch(API + `archive-book/${idArchive}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: null,
  }).then(async () => {
    await refreshData();
    location.reload();
  });
}

async function closeArchive(idArchive) {
  const response = await fetch(API + `archive-book/close/${idArchive}`, {
    method: "PUT",
  });
  if (response.status === 406) {
    const messageResponse = await response.json();
    alert(messageResponse.message);
  }
}

function isArchiveBookFormValid(archiveBookFormNames, archiveBookForm) {
  let isValid = true;
  for (const formControl of archiveBookFormNames) {
    if (archiveBookForm[formControl].value === "") {
      isValid = false;
    }
    return isValid;
  }

}
