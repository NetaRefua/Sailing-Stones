// Check if the Intersection Observer API is supported
if ('IntersectionObserver' in window) {
    const weightCounter = document.getElementById('weight-counter');
    const targetValue = 318;
    let current = 0;
    let isCounting = false;
  
    // Define the options for the Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is visible
    };
  
    // Callback function for the Intersection Observer
    const intersectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isCounting && current < targetValue) {
            // Start the counter animation
            isCounting = true;
            animateCounter(weightCounter);
          }
        } else {
          // Reset the counter
          isCounting = false;
          current = 0;
          weightCounter.textContent = current;
        }
      });
    };
  
    // Function to animate the counter from current to target value
    const animateCounter = () => {
      const increment = Math.ceil(targetValue / 100); // Adjust the increment as needed
      const interval = setInterval(() => {
        if (!isCounting) {
          clearInterval(interval);
          return;
        }
  
        current += increment;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(interval);
          isCounting = false;
        }
        weightCounter.textContent = current;
        weightCounter.style.color = '#FFC700'; // Yellow color
      }, 30); // Adjust the interval duration as needed
    };
  
    // Create an instance of the Intersection Observer
    const observer = new IntersectionObserver(intersectionCallback, observerOptions);
  
    // Observe the target element
    observer.observe(weightCounter);
  } else {
    // Fallback if Intersection Observer API is not supported
    console.log('Intersection Observer API is not supported');
  }
  