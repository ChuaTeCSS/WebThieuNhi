
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this);
        let data = JSON.parse(this.responseText);
        console.log(data);
        data.items.forEach(sach => {
            $('#demo').append(`<div>${sach.id}</div>
            <div><img src="http://books.google.com/books/content?id=${sach.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api"" /></div>`);
        });
        
    }
    xhttp.open("GET", "https://www.googleapis.com/books/v1/volumes?q=e");
    xhttp.send();

}



