async function create() {
  const archiveBookForm = document.getElementById("archive-book-form").elements;

  const body = {
    title: archiveBookForm.title.value,
    idLocation: { id: archiveBookForm.idLocation.value },
    idMark: { id: archiveBookForm.idMark.value },
    note: archiveBookForm.note.value,
    shelfNo: archiveBookForm.shelfNo.value,
  };

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
