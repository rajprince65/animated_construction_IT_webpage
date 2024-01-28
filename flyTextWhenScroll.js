  //this code is working to given animation to flying text for unique id's like a1,a2,a3 having same class
           //nice code for animaion of string
           function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= window.innerHeight &&
                rect.right <= window.innerWidth
            );
        }

        function handleScroll() {
            const elementsToAnimate = document.querySelectorAll('.text-fly');
            let allElementsAnimated = true;

            elementsToAnimate.forEach((element) => {
                if (!element.classList.contains('text-fly-animate') && isElementInViewport(element)) {
                    console.log("inside main if clause");
                    // Add a class to trigger the animation
                    element.classList.add('text-fly-animate');
                    element.style.opacity = 1;

                    // Listen for the animation end event
                    element.addEventListener('animationend', () => {
                        console.log('Animation has finished');
                        // Optionally, you can add a callback function here or perform additional actions
                        
                        // Check if all elements have been animated
                        const allElementsAnimated = Array.from(elementsToAnimate).every(el => el.classList.contains('text-fly-animate'));
                        console.log(" 2345   "+allElementsAnimated)
                        // If all elements have been animated, remove the scroll listener
                        if (allElementsAnimated) {
                            document.removeEventListener('scroll', handleScroll);
                        }
                    });
                }
            });
        }

        // Set initial opacity to 0
        // document.addEventListener('DOMContentLoaded', function () {
        //     const elementsToAnimate = document.querySelectorAll('.text-fly');
        //     elementsToAnimate.forEach((element) => {
        //         element.style.opacity = 0;
        //     });
        // });

        // Attach scroll event listener to the document
        document.addEventListener('scroll', handleScroll);

        // Initial check in case elements are already in the viewport
        handleScroll();