
let chosen = 3 ;
let myFreinds =[
    {title: "Ossama" , Age:"38" , Available:true , skills: ["HTML" , "CSS"]},
    {title: "Sayed" , Age:"25" , Available:false , skills: ["python" , "Django"]},
    {title: "Yousef" , Age:"33" , Available:true , skills: ["PHP" , "Larvel"]},
];
if(chosen === 1){
    let [{title : t , Age : a ,Available:av,skills:[,c]}]=myFreinds;
    console.log(t);
    console.log(a);
    if(av === true){
        av = "Available";
    }else{
        av = "Notavailable";
    }
    console.log(av);
    console.log(c);
}
if(chosen === 2){
    let [,{title : t , Age : a ,Available:av,skills:[,c]}]=myFreinds;
console.log(t);
console.log(a);
if(av === true){
    av = "Available";
}else{
    av = "Notavailable";
}
console.log(av);
console.log(c);}
if(chosen === 3){
    let [,,{title : t , Age : a ,Available:av,skills:[,c]}]=myFreinds;
    console.log(t);
    console.log(a);
    if(av === true){
        av = "Available";
    }else{
        av = "Notavailable";
    }
    console.log(av);
    console.log(c);
}