const info = [
	{
		question:"What was the most used programming language in 2019?",
		a:"Java",
		b:"C",
		c:"Python",
		d:"JavaScript",
		correct:"d",
	},
	{
		question:"Who is the President of US?",
		a:"Donald Trump",
		b:"Joe Biden",
		c:"Hillary Clinton",
		d:"Bernie Sanders",
		correct:"b",
	},
	{
		question:"What does HTML stand for?",
		a:"Hypertext Markup Language",
		b:"Cascading Style Sheet",
		c:"Jason Object Notation",
		d:"none of the above",
		correct:"a",
	},
	{
		question:"What year was JavaScript launched?",
		a:"1993",
		b:"1994",
		c:"1995",
		d:"1996",
		correct:"c",
	}
]

let total = 0;
let i = 0;

let quiz = document.getElementById("quiz");
let tasks = document.querySelectorAll(".task");

let question = document.getElementById("question");
let variant_a = document.getElementById("var_a");
let variant_b = document.getElementById("var_b");
let variant_c = document.getElementById("var_c");
let variant_d = document.getElementById("var_d");
let sbmt = document.getElementById("submit");

next();

sbmt.addEventListener('click', next);

function next(){
	let tt = 0;
	tasks.forEach(tasks => {
		if(tasks.checked){
			tt += 1;
		}
	})
	if(tt > 0 || i == 0){
		let ans = "e";
		if(i > 0 ){
			
			tasks.forEach(tasks => {
				if(tasks.checked){
					ans = tasks.id;
				}
			})
			tasks.forEach(tasks => tasks.checked = false);

			let cur = info[i];
			let prev = info[i - 1];
			if(prev.correct === ans) total += 1;
		}
	// if(i > 0 && ans === "e"){
	// 	next();
	// }else{
		if(i < 4){
			let cur = info[i];
			question.innerText = cur.question;
			variant_a.innerText = cur.a;
			variant_b.innerText = cur.b;
			variant_c.innerText = cur.c;
			variant_d.innerText = cur.d;
			i += 1;
		}else{
			console.log("here");
			quiz.innerHTML = `
				<h2 class="score">You answered correctly at ${total}/4 questions</h2>
				<button onclick="location.reload()" class="reload">Reload</button>
				
			`;
			quiz.classList.add('score');
			quiz.classList.add('reload');
		}
	}
	// }
}
