const fileUploadList = [];
const supportedFileExtensions = ["doc", "docx", "csv", "pdf", "xls", "xlsx"];

function addFiles() {
  const files = document.getElementById("document-upload").files;

  for (const file of files) {
    if (supportedFileExtensions.find((item) => item === getFileExtension(file.name)) !== undefined) {
      fileUploadList.push(file);
    } else {
      alert(`Type of ${file.name} file is not supported`);
    }
  }
  displayFileUploadList();
}

function displayFileUploadList() {
  const element = document.getElementById("fileUploadList");
  let output = "";
  for (const file of fileUploadList) {
    output += `<li>${file.name}</li>`;
  }
  element.innerHTML = output;
}

async function create() {
  const archiveBookForm = document.getElementById("archive-book-form").elements;

  const body = {
    id: archiveBookForm.id.value,
    title: archiveBookForm.title.value,
    idLocation: { id: archiveBookForm.idLocation.value },
    idMark: { id: archiveBookForm.idMark.value },
    note: archiveBookForm.note.value,
    shelfNo: archiveBookForm.shelfNo.value,
    startYear: archiveBookForm.startYear.value,
    endYear: archiveBookForm.endYear.value,
    expirationDate: archiveBookForm.expirationDate.value,
  };

  if (!body.id) {
    delete body.id;
  }
  if (isArchiveBookFormValid(Object.entries(body).map((entry) => (entry[0])).filter((item) => item !== "note")
    , archiveBookForm)) {
    await httpRequest(API + "archive-book", body.id ? "PUT" : "POST", JSON.stringify(body)).then(async (response) => {
      const savedArchiveBook = await response.json();
      await uploadDocuments(savedArchiveBook.id);
      rememberTab();
      location.reload();
    });
  } else {
    alert("Fill all required fields");
  }
}

async function uploadDocuments(idArchiveBook, callBack) {
  let progress = 0;
  let increment = 0;

  for (const file of fileUploadList) {
    const formData = new FormData();
    formData.append("document", file);

    await fetch(API + `document/${idArchiveBook}`, {
      method: "POST",
      body: formData,
    });

    increment++;
    progress = (increment / fileUploadList.length) * 100;
    document.getElementById("progress").style.width = `${progress}%`;

    if (progress === 100 && callBack !== undefined) {
      callBack();
    }
  }
}

async function completeUpload() {
  await refreshOverviewData();
}

function openArchiveBookOverview(archiveBookID) {
  rememberTab();
  location.href = `${API}overview/${archiveBookID}`;
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
  } else {
    alert("Successfully closed");
    location.href = API;
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

function getFileExtension(fileName) {
  return fileName.split(".")[1];
}
