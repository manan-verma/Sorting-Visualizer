//creation of needed data structures and accesing them as per user input:

let inp_as=document.getElementById('a_size'),array_size=inp_as.value;
let inp_gen=document.getElementById("a_generate");
let inp_aspeed=document.getElementById("a_speed");

let butts_algos=document.querySelectorAll(".algos button");

let div_sizes=[]; //height of each bar
let divs=[]; //actual visual bar - so we can modify height, color
let margin_size;
let cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.
inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(let i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(let i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(let i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;

    }
}
