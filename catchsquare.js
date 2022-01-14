"use strict;"
let testID;

window.onload = function(){

    if (!testID){
        let count = 5;
        testID = setInterval( function(){
            let message = document.getElementById("message");
            message.innerHTML = "The game starts in " + count + " seconds.";
            if (count === 0){
                start();
            }
            count -= 1;
        }, 1000);
    }

    function start(){
        clearInterval(testID);
        testID = null;

        // Get the rectangle area
        let rectArea = document.getElementById("rectanglearea");
        
        // Start building square element
        let Square = document.createElement("p");
        Square.className = "square";
        let top = Math.random() * 200;
        let left = Math.random() * 700;
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        // Put square in random position
        Square.style.top = top + "px";
        Square.style.left = left + "px";
        // Give square a random background/border color
        Square.style.backgroundColor = color;
        Square.style.borderColor = color;
        
        // Add square element to rectangle area
        rectArea.appendChild(Square);

        let time = 3000;
        let squareCatchCount = 0;
        let timeoutID = setTimeout(end, time);
        Square.onclick = function(){
            clearTimeout(timeoutID);
            let currentX = parseFloat(Square.style.left);
            let currentY = parseFloat(Square.style.top);
            Square.style.left = (currentX + (Math.random() * 60))%700 + "px";
            Square.style.top = (currentY + (Math.random() * 60))%200 + "px";
            time -= 100;
            squareCatchCount += 1;
            document.getElementById("result").innerHTML = squareCatchCount + "";
            timeoutID = setTimeout(end,time);
        }

        function end(){
            clearInterval(testID);
            testID = null;
            console.log("You lost!");
            Square.remove();
        }
    }
}