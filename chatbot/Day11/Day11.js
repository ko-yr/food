var balTxt = document.getElementById('balTxt');
var zzang = document.getElementById('zzang');
var userText = document.getElementById('userText');
var submit = document.getElementById('submit');

submit.onclick=function(){
    if(userText.value=='음식 추천해줘'){
        balTxt.innerHTML="한식 vs 중식 vs 일식 vs 양식 <br>중에 골라봐";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="https://ko-yr.github.io/food/chatbot/Day11/dgs.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
    } else if(userText.value=="한식"){
        balTxt.innerHTML="1.백반집 <br> 2.국밥집 <br> 3.고깃집 <br>등이 있어!";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="https://ko-yr.github.io/food/chatbot/Day11/jj5.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
    } 
    else if(userText.value=="중식"){
        balTxt.innerHTML="1.짜장, 짬뽕, 탕수육 <br> 2.마라탕, 마라샹궈 <br> 3.양꼬치 <br> 등이 있어!" ;
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="https://ko-yr.github.io/food/chatbot/Day11/jj5.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
    } 
    else if(userText.value=="일식"){
        balTxt.innerHTML="1.초밥 <br> 2.텐동 <br> 3.라멘 <br> 등이 있어!";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="https://ko-yr.github.io/food/chatbot/Day11/jj5.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
    } 
    else if(userText.value=="양식"){
        balTxt.innerHTML="1.파스타 <br> 2.스테이크 <br> 3.피자 <br> 등이 있어!";
        console.log("나 : "+userText.value);
        console.log("짱구 : "+balTxt.innerHTML);
        zzang.src="https://ko-yr.github.io/food/chatbot/Day11/jj5.gif";
        zzang.style.height="180px"
        zzang.style.margin="15px"
    } 
    
}

