var start=document.getElementById("start");
var update=document.getElementById("update");
var body=document.getElementsByTagName("body")[0];
var b1=document.getElementById("b1");
var b2=document.getElementById("b2");
var b3=document.getElementById("b3");
var b4=document.getElementById("b4");
var b5=document.getElementById("b5");
var b6=document.getElementById("b6");
var b7=document.getElementById("b7");
var b8=document.getElementById("b8");
var b9=document.getElementById("b9");
var c=0;
var p2="";
var p1="";
var sym;
var name;
go=false;

function startover(){
	c=0;
	go=false;
	clearAll();

	var p1=(prompt("Player 1 select 'X' or 'O'")).toUpperCase();
	
	if(p1=='X')
		p2='O';
	else
		p2='X';

	update.textContent="..Game in session..";
	start.textContent="Reset";
	start.classList.add("reset");
	start.classList.remove("play_again");
	update.classList.remove("success");
	sym=p2;
	name="Player 2";
	update.textContent="Player 2, your turn!";
}

//new game
start.addEventListener("click",startover);


//box on clicking

b1.addEventListener("click",function(){
			c++;
			console.log("b1 assigned to "+name+c+sym);
			fill(b1,sym);
			check(sym,name);
			next_turn(c);
		})
b2.addEventListener("click",function(){
			c++;
			console.log("b2 assigned to "+name+c+sym);
			fill(b2,sym);
			check(sym,name);
			next_turn(c);
		})
b3.addEventListener("click",function(){
			c++;
			console.log("b3 assigned to "+name+c+sym);
			fill(b3,sym);
			check(sym,name);
			next_turn(c);
		})
b4.addEventListener("click",function(){
			c++;
			console.log("b4 assigned to "+name+c+sym);
			fill(b4,sym);
			check(sym,name);
			next_turn(c);
		})
b5.addEventListener("click",function(){
			c++;
			console.log("b5 assigned to "+name+c+sym);
			fill(b5,sym);
			check(sym,name);
			next_turn(c);
		})
b6.addEventListener("click",function(){
			c++;
			console.log("b6 assigned to "+name+c+sym);
			fill(b6,sym);
			check(sym,name);
			next_turn(c);
		})
b7.addEventListener("click",function(){
			c++;
			console.log("b7 assigned to "+name+c+sym);
			fill(b7,sym);
			check(sym,name);
			next_turn(c);
		})
b8.addEventListener("click",function(){
			c++;
			console.log("b8 assigned to "+name+c+sym);
			fill(b8,sym);
			check(sym,name);
			next_turn(c);
		})
b9.addEventListener("click",function(){
			c++;
			console.log("b9 assigned to "+name+c+sym);
			fill(b9,sym);
			check(sym,name);
			next_turn(c);
		})

//checks if the game is over
function check(sym,name){
		if((b1.textContent===b2.textContent && b2.textContent===b3.textContent && b3.textContent===sym)||
			(b4.textContent===b5.textContent && b5.textContent===b6.textContent && b5.textContent===sym)||
			(b7.textContent===b8.textContent && b8.textContent===b9.textContent && b8.textContent===sym)||
			(b1.textContent===b4.textContent && b4.textContent===b7.textContent && b4.textContent===sym)||
			(b2.textContent===b5.textContent && b2.textContent===b8.textContent && b2.textContent===sym)||
			(b3.textContent===b6.textContent && b6.textContent===b9.textContent && b9.textContent===sym)||
			(b1.textContent===b5.textContent && b5.textContent===b9.textContent && b1.textContent===sym)||
			(b3.textContent===b5.textContent && b5.textContent===b7.textContent && b7.textContent===sym))
		{
			go=true;
			update.textContent=name+" won!";
			update.classList.add("success");

		}
		else if(b1.textContent!="" && b2.textContent!="" && b3.textContent!="" &&
				b4.textContent!="" && b5.textContent!="" && b6.textContent!="" && 
				b7.textContent!="" && b8.textContent!="" && b9.textContent!="")
		{
			go=true;
			update.textContent="Game tied!";

		}
}

//assigns symbol to box
function fill(box,sym){
	box.textContent=sym;
}

//next player turn
function next_turn(c){
	if (c%2==0)
	{
		sym=p2;
		name="Player 2";
	}
	else
	{
		name="Player 1";
		if (sym=='X')
			sym='O';
		else
			sym='X';
	}
	if (!go)
	update.textContent=name+", your turn!";
}

//clears the tic-tac-toe table
function clearAll(){
	b1.textContent='';
	b2.textContent='';
	b3.textContent='';
	b4.textContent='';
	b5.textContent='';
	b6.textContent='';
	b7.textContent='';
	b8.textContent='';
	b9.textContent='';
}
