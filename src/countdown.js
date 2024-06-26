export function startCountdown() {
    const targetDate = new Date('May 30, 2024 18:30:00 EST').getTime();
    const timerElement = document.getElementById('timer');
  
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result
      timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
      // If the countdown is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "EXPIRED";
      }
    };
  
    // Update the timer every second
    const x = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display the timer immediately
  }
  