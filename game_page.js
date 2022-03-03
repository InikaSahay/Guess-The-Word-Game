player_1_name=localStorage.getItem("player_1_name");
player_2_name=localStorage.getItem("player_2_name");
player_1_score=0;
player_2_score=0;

document.getElementById("player_1_name").innerHTML=player_1_name+" :";
document.getElementById("player_2_name").innerHTML=player_2_name+" :";
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question Turn :"+player_1_name;
document.getElementById("player_ans").innerHTML="Answer turn :"+player_2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length=Math.floor(word.length/2);

    charAt2=word.charAt(length);

    lenght_minuis_1=word.length-1;

    charAt3=word.charAt(lenght_minuis_1);
    console.log(charAt2,charAt3);

    removecharAt1=word.replace(charAt1,"_");
    removecharAt2=removecharAt1.replace(charAt2,"_");
    removecharAt3=removecharAt2.replace(charAt3,"_");
    console.log(removecharAt3);

    question_word="<h4 id='word_display'>Q."+removecharAt3+"</h4>";
    input_box="<br>answer:<input id='input_box' type='text'>";
    button='<br><br><button class="btn btn-info" onclick="check()">Check</button>';
    row=question_word+input_box+button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value=" ";
}

answer_turn="player2";
question_turn="player1";

function check(){
    get_answer=document.getElementById("input_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lowercase"+answer);

    if(answer==word){
        if(answer_turn=="player1"){
            player_1_score=player_1_score+1;
            document.getElementById("player_1_score").innerHTML=player_1_score;
        }
        else{
            player_2_score=player_2_score+1;
            document.getElementById("player_2_score").innerHTML=player_2_score;
        }
    }

    if(question_turn=="player2"){
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn:"+player_1_name;
    }
    else{
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+player_2_name;
    }

    if(answer_turn=="player2"){
        answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer turn:"+player_1_name;
    }
    else{
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer turn:"+player_2_name;
    }  

    document.getElementById("output").innerHTML=" ";
}