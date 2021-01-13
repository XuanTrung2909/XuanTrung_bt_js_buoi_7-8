var listNumber = [];

function getEle(id){
     var getEle = document.getElementById(id);
     return getEle;
};

getEle("luuMang").addEventListener("click", themso);

function themso(){
    var number = getEle("number").value;
    if(number){
        number = parseInt(number);
        listNumber.push(number);
    }else{
        return alert("phải nhập giá trị")
    }
};

//Tổng các số dương trong mảng

getEle("tongSoDuong").addEventListener("click", function(){
    kiemTraMangRong();
    var tongSoDuong = 0;
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            tongSoDuong += listNumber[i];
        }
    }

    getEle("footer").innerHTML = "Mảng: [" + listNumber + "] </br>" + "Tổng các số dương: " + tongSoDuong; 
});

//đếm số dương có trong mảng

getEle("demSoDuong").addEventListener("click", function(){
    var dem = 0;
    kiemTraMangRong();
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            dem++;
        }
    }
    getEle("footer").innerHTML = "Mảng: [" + listNumber + "] </br>" + "Số dương có trong mảng: " + dem; 
});

//Số nguyên duong nhỏ nhất trong mảng

getEle("soDuongNhoNhat").addEventListener("click", function(){
    var soDuongMin = 0;
    var viTri = 0;
    kiemTraMangRong();
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            soDuongMin = listNumber[i];
            viTri = i;
            break;
        }
    }
    for(var j = viTri + 1; j < listNumber.length; j++){
        if(soDuongMin > listNumber[j] && listNumber[j] > 0){
            soDuongMin = listNumber[j];
        }
    }

    getEle("footer").innerHTML = "Mảng: [" + listNumber + "] </br>" + "Số dương nhỏ nhất: " + soDuongMin; 
});

// Tìm số nhỏ nhất trong mảng

getEle("soNhoNhat").addEventListener("click", function(){
    kiemTraMangRong();
    var soMin = listNumber[0];
    for(var i = 1; i < listNumber.length; i++){
        if(soMin > listNumber[i]){
            soMin = listNumber[i];
        }
    } 
    getEle("footer").innerHTML = "Mảng: [" + listNumber + "] </br>" + "Số nhỏ nhất: " + soMin; 
});

// Tìm số chẵn cuối cùng trong mảng

getEle("soChanCuoi").addEventListener("click", function(){
    var soChanCuoi = -1;

    kiemTraMangRong();

    for(var i = listNumber.length - 1; i >= 0; i--){
        if(listNumber[i] % 2 == 0){
            soChanCuoi = listNumber[i];
            break;
        }
    }

    getEle("footer").innerHTML = "Mảng: [" + listNumber + "] </br>" + "Số Chẵn cuối: " + soChanCuoi; 
});

getEle("sapXepTang").addEventListener("click", function(){

    kiemTraMangRong();
    var tam = 0;
    var mangNhap = listNumber;
    for(var i = 0; i < listNumber.length - 1; i++){
        for(var j = i + 1; j < listNumber.length; j++){
            if(listNumber[i] > listNumber[j]){
                tam = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = tam;
            }
        }
    }
    getEle("footer").innerHTML = "Mảng: [" + mangNhap + "] </br>" + "Mảng sắp xếp tăng: [" + listNumber + "]"; 
});

getEle("doiViTri").addEventListener("click", function(){
    var viTri1 = getEle("viTri1").value;
    viTri1 = parseInt(viTri1);
    var viTri2 = getEle("viTri2").value;
    viTri2 = parseInt(viTri2);

    kiemTraMangRong();
    var mangNhapbd = listNumber; 
    if(viTri1 >=0 && viTri1 < listNumber.length && viTri2 >= 0 && viTri2 < listNumber.length){
        var tam = listNumber[viTri1];
        listNumber[viTri1] = listNumber[viTri2];
        listNumber[viTri2] = tam;
    }else{
        return alert("Nhập vị trí đổi chỗ phải lớn hơn hoặc bằng 0 và nhỏ hơn độ dài của mảng");
    }
    getEle("footer").innerHTML = "Mảng: [" + mangNhapbd + "] </br>" + "Mảng sau khi đổi chỗ: [" + listNumber + "]";
});

function kiemTraMangRong(){
    if(listNumber.length <= 0){
        alert("Phải nhập số vào trong mảng");
        return;
    }
}