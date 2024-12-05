let a=0;
let i=0;
let b=0;
let n=1;
let n1=["1","Stop","3","Stop","5","Stop","7","Stop","9","Stop"];
let n2=["1","Go","3","GO","5","Go","7","Go","9","Go"]
let n3=["1","Slow","3","Slow","5"]
let Array = ["red","green","yellow"];
let arr= ["Stop","Go","slow"];
function trafficLight(){
    let l=document.getElementsByClassName('light');
    let x=document.getElementsByClassName('main')
    for(let j=0;j<l.length;j++){
        l[j].style.background="black";
        l[j].innerHTML="";
    }
    l[a].style.background=Array[a];
    
    if(a<l.length){
        if(Array[a]==Array[0]){
            if(n<=10 && i < n1.length){
                l[a].innerHTML=n1[i];
                n++;
                i++;
            }
            if(n==11){
                
                n=1;
                i=0;
                a=1;
                b=0;
                
            }
        }
        else if(Array[a]==Array[1]){
            if(n<=10 && b<n2.length){
                l[a].innerHTML=n2[b];
                n++;
                b++;
            }
            if(b == n2.length){
            
                n=1;
                b=0;
                a=2;
                
            }
        }
        else if(Array[a]==Array[2]){
            if(n<=5 && b<n2.length){
                l[a].innerHTML=n3[b];
                n++;
                b++;
            }
            if(b == n3.length){
            
                n=1;
                b=0;
                a=0;
                
            }
        }
    }
}
setInterval(trafficLight,1000);