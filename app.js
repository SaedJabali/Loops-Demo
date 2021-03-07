var order= prompt("What color do you want for your dress?")

while(order != "red" && order != "blue")

{
    order= prompt("What color do you want for your dress?")
    
}

var itemOrder = "";

if (order == "red")
{

itemOrder= '<img src="images/red-long 2.jpg"  />';
}
else if (order == "blue")
{

    itemOrder= '<img src = "images/blue-long1.jpg" />';
}

noOfPiefce= prompt("How many pieces you want?")


for(var i =0;i<noOfPiefce; i++)
{
document.write(itemOrder);
}


