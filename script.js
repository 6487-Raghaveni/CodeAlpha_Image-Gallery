let pop=document.getElementById("pop");
let pimg=document.getElementById("popimg");
let images=
[
    "1.jpg","2.png","3.jpg","4.png","5.jpg","6.jpg","7.jpg"
];
let curr=0;
let ss;
function show(index)
{
  curr=index;
  pop.style.display="flex";
  pimg.src=images[curr];
}
function Close()
{
    pop.style.display="none";
    clearInterval(ss);
}
function Next()
{
    curr++;
    if(curr>=images.length)
    {
        curr=0;
    }
    pimg.src=images[curr];

}
function previous()
{
    curr--;
    if(curr<0)
    {
        curr=images.length-1;
    }
    pimg.src=images[curr];
}
document.addEventListener("keydown",function(event)
{
    if(event.key==="ArrowRight")
    {
        Next();
    }
    else if(event.key==="ArrowLeft")
    {
        previous();
    }
    else if(event.key==="Escape")
    {
        Close();
    }
});
function slideshow()
{
    show(0);
    ss=setInterval(function()
    {
    Next();},1000);
}
pop.addEventListener("click",function(event)
{  
    if(event.target===pop)
    {
    Close();
    }
});
function filterimg(category)
{
    let cards =
    document.querySelectorAll(".card");

    cards.forEach(function(card)
    {
        if(category==="All")
        {
            card.style.display="block";
        }

        else if(card.classList.contains(category))
        {
            card.style.display="block";
        }

        else
        {
            card.style.display="none";
        }
    });
}

