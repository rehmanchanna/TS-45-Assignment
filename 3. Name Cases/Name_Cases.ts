 // lowercase
 
 let personName: string= "Abdul Rehman Channa";
 console.log("lowercase:", personName.toLowerCase());
 
 // UPPERCASE
 console.log("UPPERCASE:", personName.toUpperCase());
 
 // TitleCase
 console.log("TitleCase:", personName.replace(/\bw/g,c => c.toUpperCase()));