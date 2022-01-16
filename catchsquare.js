/*
    File: catchsquare.js
    Name: Henry Pacheco Cachon
    Class: CS325, January 2022
    Lab: 06
    Due: 15 January 2022
*/

"use strict;"
let testID;
window.onload = function(){

    // Begin countdown for game start
    if (!testID){
        let count = 5;
        testID = setInterval( function(){

            let message = document.getElementById("message");
            message.innerHTML = "The game starts in " + count + " seconds.";
            if (count === 0){
                start();
                message.innerHTML = "START!";
            }
            count -= 1;

        }, 1000);
    }

    // Start the game
    function start(){

        // Clear countdown interval element
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

        // Counting the number of times the square is caught
        let squareCatchCount = 0;
        // Initial timeout element with 3 seconds
        let time = 3000;
        let timeoutID = setTimeout(end, time);
        // Move square on each click and reset timeout element with less time
        Square.onclick = function(){

            // Set new position
            let currentX = parseFloat(Square.style.left);
            let currentY = parseFloat(Square.style.top);
            Square.style.left = (currentX + (Math.random() * 60))%700 + "px";
            Square.style.top = (currentY + (Math.random() * 60))%200 + "px";

            // Set new colors
            let color = "#" + Math.floor(Math.random()*16777215).toString(16);
            Square.style.borderColor = color;
            Square.style.backgroundColor= color;

            // Decrease the timeout delay
            time -= 100;
            // Reset timeout with new delay
            clearTimeout(timeoutID);
            timeoutID = setTimeout(end,time);

            // Add to the amount of squares caught and edit html
            squareCatchCount += 1;
            document.getElementById("result").innerHTML = squareCatchCount + "";
        }

        // End game logic
        function end(){

            // Clear interval object
            clearInterval(testID);
            testID = null;
            
            // Game over message appears and the square is removed from the screen
            message.innerHTML = "Game Over";
            Square.remove();
        }
    }
}