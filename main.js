// Bài tập 1
function tinhLuong(){
var ngay = document.getElementById("txt-ngay").value;
var luong1Ngay = 100000;

var tongLuong = ngay*luong1Ngay;

document.getElementById("showTienLuong").innerHTML = "Tổng Lương : " + tongLuong , "vnd";
}

// Bài tập 2
function tinhTongTB(){
    var number1 = document.getElementById("number1").value*1;
    var number2 = document.getElementById("number2").value*1;
    var number3 = document.getElementById("number3").value*1;
    var number4 = document.getElementById("number4").value*1;
    var number5 = document.getElementById("number5").value*1;

    var tongTB = (number1 + number2 + number3 + number4 + number5) / 5;
    
    document.getElementById("showTongTB").innerHTML = "Tổng Trung Bình : " + tongTB;

}
// Bài tập 3
function doiTien(){
var usd = 23500;
var vnd = document.getElementById("txt-tien").value*1;
var thanhTien = usd * vnd;
var currenFormat = new Intl.NumberFormat("vn-VN");

document.getElementById("showTienViet").innerHTML = "VNĐ : " + currenFormat.format(thanhTien) + " VNĐ";

}
// Bài tập 4
function tinhTong(){
    var chieuDai = document.getElementById("chieuDai").value*1;
    var chieuRong = document.getElementById("chieuRong").value*1;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) / 2;
    var result = "<div>"
    result += "<p>Diện Tích : " + dienTich + "</p>"
    result += "<p>Chu Vi : " + chuVi + "</p>"
    result += "</div>"

    document.getElementById("showAll").innerHTML = result;
}
// Bài tập 5
function tinhKySo(){
    var kySo = document.getElementById("txt-kySo").value*1;

    var n = 19;
    var hangChuc = Math.floor(n%100/10);
    var hangDonVi = n%10;
    var tong = hangChuc + hangDonVi;

    var result = "<div>"
    result += "<p>Hàng Chục : " + hangChuc + "</p>";
    result += "<p>Hàng Đơn Vị : " + hangDonVi + "</p>";
    result += "<p>Tổng : " + tong + "</p>";
    result += "</div>"

    document.getElementById("showTong").innerHTML = result;

}