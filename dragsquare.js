/*
    File: Lab5_hpache22.html
    Name: Henry Pacheco Cachon
    Class: CS325, January 2022
    Lab: 05
    Due: 12 January 2022
*/

"use strict;"
window.onload = function() {

    // Get the rectangle area
    let rectArea = document.getElementById("rectanglearea");
    
    // Start building square element
    let Square = document.createElement("p");
    Square.className = "rectangle";
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

    // Get square ready to move when mouse is pressed down
    Square.onmousedown = function(e){
        // Set z to top and append square to the body
        Square.style.zIndex = 1000;
        document.body.append(Square);

        // Move Square to the cursor's location
        function moveAt(pageX, pageY){
            Square.style.left = pageX - Square.offsetWidth/2 + "px";
            Square.style.top = pageY - Square.offsetHeight + "px";
        }

        // Move square to cursor's current location when pressed down
        moveAt(e.pageX, e.pageY);

        // move the square to the cursor's location while the mouse is moving 
        document.addEventListener("mousemove", onMouseMove);

        function onMouseMove(e){
            moveAt(e.pageX, e.pageY);
        }

        // Stop the square from moving and reset the mouseup connection
        Square.onmouseup = function(){
            document.removeEventListener("mousemove", onMouseMove);
            Square.onmouseup = null;
        };
    };
}
