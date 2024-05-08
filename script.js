function flipQuarter() {
    const quarter = document.getElementById('quarter');
    const result = Math.random() < 0.5 ? 'heads' : 'tails'; 
    quarter.className = 'quarter ' + result; 
  
    // Add flipping animation
    quarter.style.transform = 'rotateX(360deg)'; 
  
    // After a delay, rotate back to original position
    setTimeout(() => {
      quarter.style.transform = 'rotateX(0deg)';
    }, 1000); // Adjust the time if needed
}  
  
    // Add flipping animation
    quarter.style.transform = 'rotateX(360deg)';
  
  
    setTimeout(() => {
      quarter.style.transform = 'rotateX(0deg)';
    }, 1000);
  