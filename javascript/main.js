//Tạo hàm nhấp vào input search hiện ra lịch sử
var inputSearch=document.querySelector('.header-search__input');
var searchHistory=document.querySelector('.header-search__history-list');

inputSearch.onclick=function(e){
    searchHistory.style.display="block"
}

inputSearch.onblur=function(e){
    searchHistory.style.display="none";
}

//Tạo hàm click vào lịch sử tìm kiếm hiện lên input Search
var listSearchHistory=document.querySelector('.header-search__history-list');
listSearchHistory.onmousedown=function(e){
    e.preventDefault();
}

//Detail Image Click
var imgSubs=document.getElementsByClassName('detail-image__sub');
for(var i=0; i < imgSubs.length; i++){
    imgSubs[i].onclick=function(e){
        var imgMain=document.getElementById('imgMain');
        imgMain.src=e.target.src;
    }
}

//Has More Tab Detail
function HasDescription(){
    var detailList=document.getElementById('detailList');
    var contentDescription=document.getElementById('descriptionContent');
    var selectlReview=document.getElementById('reviewSelect');
    var contentReview=document.getElementById('reviewContent');
    var detailDescription=document.getElementById('descriptionDetail');
    var detailReview=document.getElementById('reviewDetail');
    function DescriptionContent(){
        contentDescription.style.display='block';
        contentReview.style.display='none';
    }
    function ReviewContent(){
        contentDescription.style.display='none';
        contentReview.style.display='block';
    }
    if(detailList.classList.contains('has--description')){
        contentDescription.style.display='block';
        detailDescription.addEventListener('click', DescriptionContent);
        detailReview.addEventListener('click', ReviewContent);
    }else{
        selectlReview.checked=true;
        contentReview.style.display='block';
    }
}
HasDescription();