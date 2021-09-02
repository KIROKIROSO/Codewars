function findNb(m) {
    // your code
    let total = 0;
    let count = 0;
    while (total < m) {
      count++;
      total += Math.pow(count, 3)
      
    }
    return total == m ? count : -1;
}
