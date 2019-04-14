// JavaScript Document
var arr = [
			{ code : "A0123",
			  name : "GRODY TSHIRT UPGRADE – BLACK",
			  price : 280000 ,
			  img : "ao1.jpg",
			  size : "S",
			  des :" Made in Viet Nam<br> Thành phần vải bao gồm: 100% cotton<br> Vải thun được nhập khẩu hoan toàn từ ThaiLand , có độ dày vừa và thấm hút mồ hôi cao<br>Tay áo trong được làm vải bo cao cấp, giúp ôm tay người mặc nhưng không gấy khó chịu<br>",
			},
			{ code : "A0123",
			  name : "HEXAGON TSHIRT – BLACK",
			  price : 280000 ,
			  img : "ao2.jpg",
			  size : "S",
			  des :"Made in Viet Nam<br>Thành phần vải bao gồm: 100% cotton<br>Vải thun được nhập khẩu hoan toàn từ ThaiLand , có độ dày vừa và thấm hút mồ hôi cao<br>Form áo nâng cấp từ áo Fine Knit Tshirt , lượt bỏ và thêm nhưng điểm nhấn mới . ",
			 },
			{ code : "A0123",
			  name : "FREDDY LONG SLEEVES T-SHIRT",
			  price : 290000 ,
			  img : "ao3.jpg",
			  size : "S",
			  des :"Made in Viet Nam<br>Thành phần vải bao gồm: 100% elastane"
			},
			{ code : "A0123",
			  name : "SIMON SWEATER BLACK",
			  price : 420000 ,
			  img : "ao4.jpg",
			  size : "S",
			  des :"Made in Viet Nam<br>Thành phần vải bao gồm: 80% fine knit cotton , 20% spandex"
			},
			{ code : "A0123",
			  name : "ALEX SWEATER BLACK",
			  price : 420000 ,
			  img : "ao5.jpg",
			  size : "S",
			  des :" Made in Viet Nam<br> Thành phần vải bao gồm: 80% fine knit cotton , 20% spandex",
			},
		];
		
		
function searchProduct(tenanh){
	var j = tenanh.lastIndexOf("/");
	var ten=tenanh.substring(j+1);//lay ra ten ao trong tenanh
	for (var i=0 ; i< arr.length ;i++)
	{
		if(arr[i].img==ten)
		return i;
	}
	return -1;

}
function show(){
	var the = window.event.target; //lay the div vua bam ra
	var the_anh=the.src;//lay cai ten hinh trong the div
	var vitri = searchProduct(the_anh);

	if(vitri>=0)
	{
		var theanh=document.getElementById('anh');
		theanh.src=arr[vitri].img;
		var the_div = document.getElementById("infor");
		the_div.innerHTML ="Code:" + arr[vitri].code +"<br/>"+"Name:" + arr[vitri].name +"<br/>" +"Gia :"+ arr[vitri].price +"<br/>";	
		var the_div2 =document.getElementById("des");
		the_div2.innerHTML = arr[vitri].des;
		var the_div_detail = document.getElementById("showdetail");
		the_div_detail.style.display= "block";
	}
} 
function closeDetail(){
	var theshow = document.getElementById('showdetail');
	theshow.style.display="none";	
}
function check()
{
	var t1 = document.getElementById('box1');
	var t2 = document.getElementById('box2');
	var t3 = document.getElementById('box3');
	var t4 = document.getElementById('box4');
	if (t1.value =="")
	{
		alert("You must enter name!");
		t1.focus(); //
		return false;
	}
	else if (t2.value =="" )
	{
		alert("You must enter Email!");
		t2.focus();
		return false;
	}else if (t3.value ==""|| t3.value.match("^[SE][0-9]{3}$")==null)
	{
		alert("Please enter true phone!!!");
		t3.focus();
		return false;
	}else if (t4.value =="")
	{
		alert("You must enter message!!!");
		t4.focus();
		return false;
	}
	else {
	alert("Your message was sent.Thanks you!!");
	window.open("Contact.html","_top");
	return true;
	}
}
function added(){
	alert ("Your product is added!");
}