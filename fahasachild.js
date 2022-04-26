var url_string = "" + window.location.href;
var url = new URL(url_string);
var idBook = url.searchParams.get("id");
console.log(idBook);

function Detail() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this);
        let data = JSON.parse(this.responseText);
        console.log(data);


        $('#demo2').append(
            `<img width="100%" height="100%" style="object-fit: contain;" src="http://books.google.com/books/content?id=${idBook}&printsec=frontcover&img=1&zoom=1&source=gbs_api">`
        )
        $('#title').append(
            `<h5 id="_tensach">${data.volumeInfo.title}</h5>`
        )
        if (!data.saleInfo.listPrice) {
            $('#price').append(
                `         
                    <h2 class="text-danger">${data.saleInfo.saleability} </h2>
                    `
            )
        } else {
            $('#price').append(
                `
                      
                <h2 class="text-danger">
                ${data.saleInfo.listPrice.amount} Đ</h2>
                `
            )
        }



    }
    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes/${idBook}`);
    xhttp.send();
}
function Add() {
    let dongia = 0;
    let tongtien = 0;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        console.log(this);
        let data = JSON.parse(this.responseText);
        let hinhanh = `http://books.google.com/books/content?id=${idBook}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
        let tensach = data.volumeInfo.title;
        let soluong = $('#_soluong')[0].value;

        console.log(hinhanh);
        console.log(tensach);
        console.log(soluong);
        if (!data.saleInfo.listPrice) {
            dongia = 0;
        } else {
            dongia = data.saleInfo.listPrice.amount;
        }
        console.log(dongia);
        if (!data.saleInfo.listPrice) {
            tongtien = 0;
        } else {
            tongtien = data.saleInfo.listPrice.amount * soluong;
        }
        console.log(tongtien);

        let giohang = JSON.parse(localStorage.getItem('mycart'));
        if (!giohang) {
            giohang = [];
        }
        let vitri;
        vitri = giohang.findIndex((sach) => { return sach.tensach == tensach })
        if (vitri == -1) {
            giohang.push({ hinhanh: hinhanh, tensach: tensach, soluong: soluong, dongia: dongia, tongtien: tongtien });
        } else {
            giohang[vitri].soluong = giohang[vitri].soluong * 1 + soluong * 1;
        }

        localStorage.setItem('mycart', JSON.stringify(giohang));
        // let dem=0;
        // giohang.forEach(sach => {
        //     dem++;    
        // });
        // document.querySelector('input[id="demGioHang"]').value=dem;
    }

    xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes/${idBook}`);
    xhttp.send();
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }
function DemGioHang() {
    let dem = 0;
    let giohang = JSON.parse(localStorage.getItem('mycart'));
    giohang.forEach(sach => {
        dem++;
    });
    localStorage.setItem('mycart', JSON.stringify(giohang));
    document.querySelector('input[id="demGioHang"]').value = dem;
    
}


// function Add() {
//     const xhttp=new XMLHttpRequest();
//     xhttp.onload=function(){
//         console.log(this);
//         let data=JSON.parse(this.responseText);
//         console.log(data);
//     }
//     let tensach = $('#_tensp')[0].value;
//     let soluong = $('#_soluong')[0].value;
//     let hinhanh;
//    let giohang = JSON.parse(localStorage.getItem('mycart'));
//     if (!giohang) {
//         giohang = [];
//     }
//     let vitri=-1;
//     vitri = giohang.findIndex((sp) => { return sp.tensach == tensach })
//     if (vitri = -1) {
//         giohang.push({tensp:tensp,soluong:soluong});
//     } else {
//         giohang[vitri].soluong += soluong * 1;
//     }
//     localStorage.setItem('mycart',JSON.stringify(giohang));
//     console.log('mycart', giohang);
//     $('#list-cart').empty();
//     giohang.forEach((sp, i) => {
//         $("#list-cart").append(`<div>${sp.tensp}
//         <input type='number' id="input-soluong" value='${sp.soluong}' onchange="UpdateQuantity('${sp.tensp}',this.value)">
//         <button onclick="Remove(${i})">REMOVE</button></div>`)
//     }
// }
//
// 