function printerError(s) {
//   declare an error count
    let error = 0;
//   loop through s
    for (let i = 0; i < s.length; i++) {
//       check if s has an error
      if (s[i].match(/[n-z]/g)) {
//         increase the count if s has error
        error++;
      }
    }
    return `${error}/${s.length}`;
}
