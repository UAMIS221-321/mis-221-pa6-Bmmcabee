function handleOnLoad()
{
    populateList()
}

function handleOnChange()
{
    const selectedId = document.getElementById("selectListBox").value;
    bookList.forEach((book)=>
    {
        if(book.id == selectedId)
        {
            myBook = book;
        }
    })

    populateForm();
}

function handleEditClick()
{
    makeEditable();
    hideButtons();
    var buttonHtm1 = "<button class=\"btn btn-primary btn-1g\" onclick=\"handleEditSave("+myBook.id+")\">Save</button>"
    buttonHtm1 += "<button class=\"btn btn-warning btn-1g btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtm1;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleNewClick()
{
    makeEditable();
    hideButtons();
    blankFields();
    var buttonHtm1 = "<button class=\"btn btn-primary btn-1g\" onclick=\"handleNewSave()\">Save</button>"
    buttonHtm1 += "<button class=\"btn btn-warning btn-1g btn-cancle\" onclick=\"handleCancelSave()\">Cancel</button>"
    document.getElementById("saveButton").innerHTML = buttonHtm1;
    document.getElementById("saveButton").style.display = "inline-block";
}

function handleRentClick()
{
    myBook.numAvlb --;
    document.getElementById("bookAvailable").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleReturnClick()
{
    myBook.numAvlb ++;
    document.getElementById("bookAvailable").value = myBook.numAvlb;
    putBook(myBook.id);
}

function handleDeleteClick()
{
    deleteBook();
}

function handleCancelSave()
{
    populateForm();
    makeReadOnly();
    showButtons();
}

function handleEditSave(id)
{
    putBook(id);
    makeReadOnly();
    showButtons();
}

function handleNewSave()
{
    postBook();
    makeReadOnly();
    showButtons();
    blankFields();
}

function populateForm()
{
    document.getElementById("bookTitle").value = myBook.title;
    document.getElementById("bookAuthor").value = myBook.author;
    document.getElementById("bookGenre").value = myBook.genre;
    document.getElementById("bookAvailable").value = myBook.numAvlb;
    document.getElementById("bookISBN").value = myBook.isbn;
    document.getElementById("bookLength").value = myBook.length;
    document.getElementById("bookCover").value = myBook.cover;
    var html = "<img class = \"coverArt\" src = \"" + myBook.cover + "\"></img>";
    document.getElementById("picBox").innerHTML = html;
}

function hideButtons()
{
    document.getElementById("newButton").style.display = "none";
    document.getElementById("editButton").style.display = "none";
    document.getElementById("deleteButton").style.display = "none";
    document.getElementById("rentButton").style.display = "none";
    document.getElementById("returnButton").style.display = "none";
}

function showButtons()
{
    document.getElementById("newButton").style.display = "inline-block";
    document.getElementById("editButton").style.display = "inline-block";
    document.getElementById("deleteButton").style.display = "inline-block";
    document.getElementById("rentButton").style.display = "inline-block";
    document.getElementById("returnButton").style.display = "inline-block"; 
    document.getElementById("saveButton").style.display = "none";      
}

function makeEditable()
{
    document.getElementById("bookTitle").readOnly = false;
    document.getElementById("bookAuthor").readOnly = false;
    document.getElementById("bookGenre").readOnly = false;
    document.getElementById("bookAvailable").readOnly = false;
    document.getElementById("bookISBN").readOnly = false;
    document.getElementById("bookLength").readOnly = false;
    document.getElementById("bookCover").readOnly = false;
}

function blankFields()
{
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookGenre").value = "";
    document.getElementById("bookAvailable").value = "";
    document.getElementById("bookISBN").value = "";
    document.getElementById("bookLength").value = "";
    document.getElementById("bookCover").value = "";  
}

function makeReadOnly()
{
    document.getElementById("bookTitle").readOnly = true;
    document.getElementById("bookAuthor").readOnly = true;
    document.getElementById("bookGenre").readOnly = true;
    document.getElementById("bookAvailable").readOnly = true;
    document.getElementById("bookISBN").readOnly = true;
    document.getElementById("bookLength").readOnly = true;
    document.getElementById("bookCover").readOnly = true;
}