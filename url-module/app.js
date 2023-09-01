const myURL = new URL('https://www.example.org/courses/programming?order=views&level=1');

console.log(myURL.hostname); //www.example.org
console.log(myURL.pathname); // /courses/programming

console.log(myURL.searchParams);
console.log(myURL.searchParams.get('order'));
console.log(myURL.searchParams.get('level'));

console.log(myURL.protocol);