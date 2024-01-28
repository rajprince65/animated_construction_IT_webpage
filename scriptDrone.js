
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    let initialTextDelay= 1000 ;
    const originalText = "Data Collection Using Drone.";

        // Initial trigger i.e run at first go
    setTimeout(function () {
        
        showNextCharacter();
    }, initialTextDelay);

    function showNextCharacter() {
    
        if (index < originalText.length) {
            const linearText = document.getElementById('linearText');
            linearText.innerText += originalText[index];

            setTimeout(() => {
                index++;
                showNextCharacter();
            }, 170); // 1 second
        } 
        else if(index >= originalText.length)
        {
            index=0;
            const linearText = document.getElementById('linearText');
            linearText.innerText = ""
            
        }

    }

    
    //showNextCharacter();



    const drone = document.getElementById("drone");

    // Function to be called when drone is approximately at 25% to the left
    // function displayText() {
    //     alert("Text displayed when drone is approximately at 25% to the left!");

    // }
    
        // second trigger at every 25 % of drone rotation each
    drone.addEventListener("animationiteration", function () {
        const start = performance.now();
        
        function checkPosition() {
            const elapsed = performance.now() - start;
            const progress = (elapsed / 4000) * 100; // 4000 is the animation duration in milliseconds

            if (progress >= 25 && progress <= 26) {
                // displayText();
                console.log("rat...")
                showNextCharacter();
            } else {
                requestAnimationFrame(checkPosition);
            }
        }

        requestAnimationFrame(checkPosition);
        
    });
});