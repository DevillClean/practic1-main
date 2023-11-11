let username;

//For 6 task get date
function getToday(){
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();

	today = dd + '.' + mm + '.' + yyyy;
	return today;
}

//Button click processing "Continue"
document.getElementById('send_name').onclick = function(){
	document.getElementById('overlay-background').style.display='none';
	username = document.getElementById('input_name').value;
	username=username.trim();
	sessionStorage.setItem('name_user',document.getElementById('input_name').value);
	if(username===""||username===null||username===undefined){
		document.getElementById('salutation_text').innerHTML="Добро пожаловать!";
		document.getElementById('name_user').innerHTML="Зря вы ничего не ввели в начале :)";
		document.getElementById('today').innerHTML=getToday();
	}else{
		document.getElementById('salutation_text').innerHTML="Добро пожаловать, "+username+"!";
		document.getElementById('name_user').innerHTML=username;
		document.getElementById('today').innerHTML=getToday();
	}
}

//Reload page
document.addEventListener("DOMContentLoaded", function() {
	if (sessionStorage.getItem("is_reloaded")) {
		username=sessionStorage.getItem('name_user');
		document.getElementById('overlay-background').style.display='none';
		if(sessionStorage.getItem('name_user')===""||sessionStorage.getItem('name_user')===null||sessionStorage.getItem('name_user')===undefined){
			document.getElementById('salutation_text').innerHTML="Добро пожаловать!";
			document.getElementById('name_user').innerHTML="Зря вы ничего не ввели в начале :)";
			document.getElementById('today').innerHTML=getToday();
		}else{
			document.getElementById('salutation_text').innerHTML="Добро пожаловать, "+sessionStorage.getItem('name_user')+"!";
			document.getElementById('name_user').innerHTML=sessionStorage.getItem('name_user');
			document.getElementById('today').innerHTML=getToday();
		}
	}
	sessionStorage.setItem("is_reloaded", true);
});

//smooth scroll
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});


//Animation apperance
function fadeIn(el, speed) {
	var step = 1 / speed;
	var interval = setInterval(function() {
		if (+el.style.opacity >= 1)
		  clearInterval(interval);
		  
		el.style.opacity = +el.style.opacity + step;
	  },speed);
}

//Show image with code
function showCode(x){
	if(document.getElementById('show_code_'+x+'_text').innerHTML==='Показать код'){
		document.getElementById('show_code_'+x+'_text').innerHTML='Скрыть код';
		document.getElementById('div_code_'+x).style.display='block';
	}else{
		document.getElementById('show_code_'+x+'_text').innerHTML='Показать код';
		document.getElementById('div_code_'+x).style.display='none';
	}
}

function appearanceTask(x){
	let name_task='task'+x+'_background';
	document.getElementById(name_task).style.zIndex=500;
	fadeIn(document.getElementById(name_task),20);
}

function closeTask(x){
	let name_task='task'+x+'_background';
	document.getElementById(name_task).style.zIndex=-500;
	document.getElementById(name_task).style.opacity=0;
}

//Open
document.getElementById('button_task_1').onclick = function(){
	appearanceTask(1);
}

document.getElementById('button_task_2').onclick = function(){
	appearanceTask(2);
}

document.getElementById('button_task_3').onclick = function(){
	appearanceTask(3);
}

document.getElementById('button_task_4').onclick = function(){
	appearanceTask(4);
}

document.getElementById('button_task_5').onclick = function(){
	appearanceTask(5);
}

document.getElementById('button_task_6').onclick = function(){
	appearanceTask(6);
}

//Close
document.getElementById('close_1').onclick = function(){
	closeTask(1);
}

document.getElementById('close_2').onclick = function(){
	closeTask(2);
}

document.getElementById('close_3').onclick = function(){
	closeTask(3);
}

document.getElementById('close_4').onclick = function(){
	closeTask(4);
}

document.getElementById('close_5').onclick = function(){
	closeTask(5);
}

document.getElementById('close_6').onclick = function(){
	closeTask(6);
}

//Task 1
document.getElementById('run_task_1').onclick = function(){
	//объявление переменных
	let height_triangle=Number(document.getElementById('height_triangle').value);
	let base_triangle=Number(document.getElementById('base_triangle').value);

	//проверка на пустые поля, правильное преобразование из строки и отрицательные элементы
	if(isNaN(height_triangle)||height_triangle===undefined||isNaN(base_triangle)||height_triangle===undefined||
		height_triangle<=0||base_triangle<=0){
		document.getElementById('answer_1').innerHTML='Неправильное заполнение полей';
		document.getElementById('answer_1').style.display='block';
	} else {

		//расчет площади и вывод на экран
		let square =0.5*height_triangle*base_triangle;
		document.getElementById('answer_1').innerHTML='Ответ: '+square;
		document.getElementById('answer_1').style.display='block';
	}
}

//Show Window
document.getElementById('show_code_1').onclick = function(){
	showCode(1);
}

document.getElementById('show_code_2').onclick = function(){
	showCode(2);
}

document.getElementById('show_code_3').onclick = function(){
	showCode(3);
}

document.getElementById('show_code_4').onclick = function(){
	showCode(4);
}

document.getElementById('show_code_5').onclick = function(){
	showCode(5);
}

document.getElementById('show_code_6').onclick = function(){
	showCode(6);
}

//Task 2
document.getElementById('run_task_2').onclick = function(){

	//проверка на пустые поля
	if(document.getElementById('1_str').value===''||document.getElementById('2_str').value===''){
		document.getElementById('answer_2').innerHTML='Поля не заполнены';
		document.getElementById('answer_2').style.display='block';
	}else{
		//функция .length помогает узнать длину строки
		if(document.getElementById('1_str').value.length===document.getElementById('2_str').value.length){
			document.getElementById('answer_2').innerHTML='Ответ: true';
			document.getElementById('answer_2').style.display='block';
		}else{
			document.getElementById('answer_2').innerHTML='Ответ: false';
			document.getElementById('answer_2').style.display='block';
		}
	}
}

function checkForNaN(array){
	for(let i=0;i<array.length;i++){
		array[i]=Number(array[i]);
		if(isNaN(array[i])){
			return true;
		}
	}
	return false;
}

function findMax(array){
	max=array[0];
	for(let i=1;i<array.length;i++){
		if(max<array[i])max=array[i];
	}
	return max;
}

function findMin(array){
	min=array[0];
	for(let i=1;i<array.length;i++){
		if(min>array[i])min=array[i];
	}
	return min;
}

//Task 3
document.getElementById('run_task_3').onclick = function(){
	//Объявление переменных
	let arr = new Array();
	let string = document.getElementById('array').value;
	let max;
	let min;

	//преобразование строки в массив
	arr=string.split(' ',5);

	//проверка на количество элементов
	if(arr.length<5){
		document.getElementById('answer_3').innerHTML='Мало элементов в массиве';
		document.getElementById('answer_3').style.display='block';
	}else{
		//проверка на присутствие элементов помимо чисел в массиве(функция проверки checkForNaN() выше)
		if(checkForNaN(arr)){
				document.getElementById('answer_3').innerHTML='В массиве могут быть только числа';
				document.getElementById('answer_3').style.display='block';
		}else{
			//вывод наибольшего элемента в масссиве функция findMax()
			document.getElementById('answer_3').innerHTML='Наибольший элемент массива - '+findMax(arr)+" и наименьший элемент массива - "+findMin(arr);
			document.getElementById('answer_3').style.display='block';
		}
	}
}

//Task4
//Инициализация переменных флага включения, времени и таймера
let init;
let sec=0,
	min=0,
	hour=0;
let timer;

//функция для отображния на сайте
function showTime(){
	let stringTime="";
	if(hour===0){
		stringTime+="00:";
	}else if(hour>0&&hour<10){
		stringTime+="0"+hour+":";
	}else{
		stringTime+=String(hour)+":";
	}
	if(min===0){
		stringTime+="00:";
	}else if(min>0&&min<10){
		stringTime+="0"+min+":";
	}else{
		stringTime+=String(min)+":";
	}
	if(sec===0){
		stringTime+="00";
	}else if(sec>0&&sec<10){
		stringTime+="0"+sec;
	}else{
		stringTime+=String(sec);
	}
	document.getElementById("timer").innerHTML = stringTime;
}

//функция таймера
function tick(){
	sec++;
	if(sec===60){
		sec=0;
		min++;
	}
	if(min===60){
		min=0;
		hour++;
	}
	showTime();
}

//запуск таймера
function startTimer(){
	init=1;
	timer=setInterval(tick,1000);
}

//остановка таймера
function stopTimer(){
	init=0;
	clearInterval(timer);
}

//сброс таймера
function resetTimer(){
	document.getElementById("timer").innerHTML="00:00:00";
	sec=0;
	min=0;
	hour=0;
}

//управление таймером
document.getElementById("run_task_4").onclick = function(){
	if(init===0){
		startTimer();
		document.getElementById("run_task_4").innerHTML="Остановить";
	}else{
		stopTimer();
		document.getElementById("run_task_4").innerHTML="Запустить";
	}
}

document.getElementById("stop_task_4").onclick = function(){
	resetTimer();
}

//Task5
//функция поиска нужной группы radio button
function isCheck(name) {
    return document.querySelector('input[name="' + name + '"]:checked');
}

//функция проверки правльного ответа
function check(name_rad,value_rad,color){
	if(color==1){
		if(isCheck(name_rad)==null){

		}else if(isCheck(name_rad).value===value_rad){
			document.getElementById(name_rad).style.color="#8BEF09";
			count++;
		}else{
			document.getElementById(isCheck(name_rad).value).style.color="#EF0909";
		}
	}else{
		if(isCheck(name_rad)==null){

		}else if(isCheck(name_rad).value===value_rad){
			document.getElementById(name_rad).style.color="#100f0f83";
			count++;
		}else{
			document.getElementById(isCheck(name_rad).value).style.color="#100f0f83";
		}
	}
}

let count=0;
//функция обработки нажатия на кнопку
document.getElementById("run_task_5").onclick = function(){
	//проверка теста
	if(document.getElementById("run_task_5").innerHTML==="Проверить"){
		count=0;
		let x=document.querySelectorAll(".image_answer");
		for(let i=0;i<x.length;i++){
			x[i].style.display="block";
		}
		//1
		check('type_comments',"all",1);
		//2
		check('file_extension',"js",1);
		//3
		check('accomplishment',"brauser",1);
		//4
		check('operator',"all",1);
		//5
		check('integer',"integer",1);
		//6
		check('Nan',"NaN",1);
		//7
		check('NanString',"NaN",1);
		//8
		check('end_comment',"end_string",1);
		//9
		check('cycle',"for_while_do_while",1);
		//10
		check('parametrs',"equal",1);
		
		document.getElementById("answer_5").innerHTML="Твой результат: "+count+"/10";
		document.getElementById("answer_5").style.display="block";
		document.getElementById("run_task_5").innerHTML="Попробовать еще раз";
	}else{
		//очистка теста
		count=0;
		let x=document.querySelectorAll(".image_answer");
		for(let i=0;i<x.length;i++){
			x[i].style.display="none";
		}
		//1
		check('type_comments',"all",0);
		//2
		check('file_extension',"js",0);
		//3
		check('accomplishment',"brauser",0);
		//4
		check('operator',"all",0);
		//5
		check('integer',"integer",0);
		//6
		check('Nan',"NaN",0);
		//7
		check('NanString',"NaN",0);
		//8
		check('end_comment',"end_string",0);
		//9
		check('cycle',"for_while_do_while",0);
		//10
		check('parametrs',"equal",0);
		
		let z=document.getElementsByClassName("radio");
		for(let i=0;i<z.length;i++)
      		z[i].checked = false;
		document.getElementById("answer_5").style.display="none";
		document.getElementById("run_task_5").innerHTML="Проверить";
	}
}


let flag=0;
//Task6
document.getElementById("run_task_6").onclick = function(){
	appearanceTask(7);
	if(flag==0){
		flag=1;
		const params = {
			amount: 200,
			size: {
			min: 1,
			max: 5,
			giant: 9
			},
			duration: {
			min: 5,
			max: 25,
			}
		}
		const randomBetween = (a, b) => {
			return (a + (Math.random() * (b - a)));
		}
		
		for (let i = 0; i < params.amount; i++) {
			let star = document.createElement('div');
			star.setAttribute("id","star"+i);
			document.getElementById("task7_background_star").append(star);
			let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
			let left = randomBetween(0, 100)+ "%";
			let top = randomBetween(0, 100)+ "%";
			document.getElementById("star"+i).style.width=size;
			document.getElementById("star"+i).style.height=size;
			document.getElementById("star"+i).style.position="absolute";
			document.getElementById("star"+i).style.left=left;
			document.getElementById("star"+i).style.top=top;
			document.getElementById("star"+i).style.boxShadow="0 0 " + size + "px " + size / 2 + "px #043668";
			document.getElementById("star"+i).style.animationDuration=randomBetween(params.duration.min, params.duration.max) + "s";
		}
	}
}

//Close 6 task
document.addEventListener('click',(e)=>{
	if(e.target.id=="task7_background_text"){
		document.getElementById("task7_background").style.opacity="0";
		document.getElementById("task7_background").style.zIndex="-900";
	}
});
