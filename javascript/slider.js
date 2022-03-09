//Slider
//Chỉ số của slide
var slideIndex=0;
//Cho biết đang ở slide nào
var currentSlideIndex=0;
//Mảng lưu các slide
var slideArray=[];
//Hàm tạo đối tượng slide bao gồm tiêu đề, hình ảnh, mô tả và id của slide
function Slide(title, detail, image){
    this.title=title;
    this.image=image;
    this.detail=detail;
    this.id="slide" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}
//Tạo các đối tượng slide
var homeBanner= new Slide(
    "",
    "",
    "./image/Slide/home-banner.jpg"
);

var banner= new Slide(
    "CHÀO MỪNG ĐẾN APUS TAROT SHOP",
    "",
    "./image/Slide/banner.jpg"
);

var openBanner= new Slide(
    "ĐẾN CỬA HÀNG APUS TAROT VÀ CẢM NHẬN",
    "32 ngách 31/14 Pháo Đài Láng, Láng Thượng, Đống Đa, Hà Nội",
    "./image/Slide/open-banner.jpg"
)
//Đưa vào source HTML
function buildSlider(){
    var myHTML;
    for(var i=0; i<slideArray.length;i++){
        if(slideArray[i].title==="CHÀO MỪNG ĐẾN APUS TAROT SHOP"){
            myHTML+=
                "<div id='" + 
                slideArray[i].id +
                "'class='singleSlide sliders' style='background-image:url("+
                slideArray[i].image + ");'>" +
                "<div class='slideOverlay'>" +
                "<h1 class='slide__title slide-sup'>" +
                slideArray[i].title+
                "</h1>" +
                "<h4 class='slide__detail'>" +
                slideArray[i].detail +
                "</h4>" +
                "</div>" +
                "</div>";
        }else{
            myHTML+=
                "<div id='" + 
                slideArray[i].id +
                "'class='singleSlide sliders' style='background-image:url("+
                slideArray[i].image + ");'>" +
                "<div class='slideOverlay'>" +
                "<h1 class='slide__title'>" +
                slideArray[i].title+
                "</h1>" +
                "<h4 class='slide__detail'>" +
                slideArray[i].detail +
                "</h4>" +
                "</div>" +
                "</div>";
        }
    }

    //Đưa HTML vừa tạo vào id #mySlider
    document.getElementById("mySlider").innerHTML=myHTML;

    //Hiển thị slide đầu tiên
    document.getElementById("slide" + currentSlideIndex).style.left=0;
}

buildSlider();
//Xử lý bấm nút chuyển slide trước
function prevSlide(){
    //Tìm slide trước
    var nextSlideIndex;
    if(currentSlideIndex === 0)
    {
        nextSlideIndex = slideArray.length - 1;
    }else{
        nextSlideIndex = currentSlideIndex - 1;
    }

    //Ẩn slide hiện tại, hiện slide "currentSlideIndex"
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    //Thêm class để chuyển slide có animation
    document.getElementById("slide" + nextSlideIndex)
    .setAttribute("class" , "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutRight");

    //Cập nhật giá trị slide hiện tại
    currentSlideIndex = nextSlideIndex;
}

//Xử lý bấm nút chuyển slide tiếp theo
function nextSlide(){
    var nextSlideIndex;
    if(currentSlideIndex === slideArray.length - 1){
        nextSlideIndex = 0;
    }else{
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex)
    .setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex)
    .setAttribute("class", "singleSlide slideOutLeft");

    currentSlideIndex = nextSlideIndex;
}

//Tự động chuyển Slide
document.addEventListener("DOMContentLoaded", function(){
    var button=document.getElementById('sliderNext');
    var buttons=document.querySelectorAll('.slideButton');
    //Tự động
    var interval;
    var timer=function(){
        interval = setInterval(function(){
            button.click();
        }, 9000);
    };
    timer();
})

//Slick Slider Product


//Slick Slider Feedback
$(document).ready(function(){
    $('.main-service__feedback-slide').slick({
    });
});

$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
    });
})
