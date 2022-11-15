// Questions will be asked
const Questions = [{
    id: 0,
    q: "1. _____ is the web browser developed by the Apple Inc.",
    a: [{ text: "Internet Explorer", isCorrect: false },
        { text: "Google Chrome", isCorrect: false },
        { text: "Safari", isCorrect: true },
        { text: "Firefox", isCorrect: false }
    ]
},
{
    id: 1,
    q: "2. The ________ is themost portable device.",
    a: [{ text: "IBM PC", isCorrect: false, isSelected: false },
        { text: "Laptop", isCorrect: false },
        { text: "Notebook", isCorrect: false },
        { text: "Smartphone", isCorrect: true }
    ]
},
{
    id: 2,
    q: "3. BIOS in ROM-BIOS stands for _________",
    a: [{ text: "Basic Input Output System", isCorrect: true },
        { text: "Basic Inter Outer System", isCorrect: false },
        { text: "Basic Integrated Open System", isCorrect: false },
        { text: "Basic Input Open System", isCorrect: false }
    ]
},
{
    id: 3,
    q: "4. Which one is not a Search Engine for the internet? ",
    a: [{ text: "Bing", isCorrect: false },
        { text: "Google", isCorrect: false },
        { text: "AltaVista", isCorrect: false },
        { text: "Chrome", isCorrect: true }
    ]
},
{
    id: 4,
    q: "5. The Safari is? ",
    a: [{ text: "Browser", isCorrect: false },
        { text: "Operating System", isCorrect: false },
        { text: "Antivirus", isCorrect: false },
        { text: "Search Engine", isCorrect: true }
    ]
},
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
       // result[0].innerHTML = "True";
       // result[0].style.color = "green";
        score[id] =1 ;
       // console.log(id + " : " + score[id]);              
    } 
    
    if (id == 4 ) {
        var total = score.reduce((a,b)=> a+b,0);
        var result = document.getElementsByClassName("result");
        result[0].innerHTML = id+1 + " questions <br>  Total Score : " +  total;
    }  
    
    else {
       // result[0].innerHTML = "False";
       // result[0].style.color = "red";
        //score[id] = 0 ;
        //console.log(id + " : " +  score[id]);
        }
    
    }
)


}

if (start) {
iterate("0");
var score = new Array(5);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}


})


