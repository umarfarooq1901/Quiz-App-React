const questions = [
    {
        question: 'What does MERN stand for?',
        options: ['MongoDB, Express, React, Node.js', 'MySQL, Express, React, Node.js', 'MongoDB, Express, Ruby, Node.js', 'MySQL, Express, React, Nginx'],
        answer: 'MongoDB, Express, React, Node.js'
    },
    {
        question: 'Which method is used to send a response back to the client in Express?',
        options: [ 'response()', 'return()', 'write()', 'send()'],
        answer: 'send()'
    },
    {
        question: 'What is the purpose of the useState hook in React?',
        options: [ 'To manage routes', 'To manage state in functional components', 'To perform side effects', 'To optimize performance'],
        answer: 'To manage state in functional components'
    },
    {
        question: 'What is the default port for a Node.js server?',
        options: ['8080', '5000', '4000', '3000'],
        answer: '3000'
    },
    {
        question: 'What is JSX?',
        options: ['JavaScript XML', 'JavaScript Extended', 'JavaScript eXtension', 'JavaScript Syntax'],
        answer: 'JavaScript XML'
    },
    {
        question: 'Which function is used to connect to a MongoDB database?',
        options: ['mongodb.connect()', 'mongo.connect()', 'mongoose.connect()', 'connect.mongodb()'],
        answer: 'mongoose.connect()'
    },
    {
        question: 'What is middleware in Express?',
        options: [ 'A function that handles responses','A function that processes requests', 'A database layer', 'A client-side library'],
        answer: 'A function that processes requests'
    },
    {
        question: 'What is the purpose of the key prop in React?',
        options: ['To uniquely identify elements in lists', 'To handle events', 'To optimize performance', 'To store state'],
        answer: 'To uniquely identify elements in lists'
    },
    {
        question: 'How do you create a new route in Express?',
        options: ['app.route()', 'app.get()', 'app.newRoute()', 'app.createRoute()'],
        answer: 'app.get()'
    },
    {
        question: 'Which method is used to send a JSON response in Express?',
        options: ['sendJSON()', 'json()', 'send()', 'response()'],
        answer: 'json()'
    },
    {
        question: 'What is the purpose of the useEffect hook in React?',
        options: ['To manage state', 'To perform side effects', 'To handle events', 'To optimize performance'],
        answer: 'To perform side effects'
    },
    {
        question: 'What does the "await" keyword do in JavaScript?',
        options: [ 'Creates a new Promise', 'Handles errors','Pauses execution until a Promise is resolved', 'Loops through arrays'],
        answer: 'Pauses execution until a Promise is resolved'
    },
    {
        question: 'What is a RESTful API?',
        options: [ 'A database', 'A state management tool', 'An interface that follows REST principles', 'A testing framework'],
        answer: 'An interface that follows REST principles'
    },
    {
        question: 'What is the purpose of the npm package manager?',
        options: ['To manage Node.js packages', 'To compile code', 'To create databases', 'To style components'],
        answer: 'To manage Node.js packages'
    },
    {
        question: 'Which command is used to install a package using npm?',
        options: [ 'npm get [package-name]', 'npm create [package-name]', 'npm load [package-name]', 'npm install [package-name]'],
        answer: 'npm install [package-name]'
    },
    {
        question: 'What is a closure in JavaScript?',
        options: [ 'A type of object','A function that retains access to its lexical scope', 'An error handling mechanism', 'A design pattern'],
        answer: 'A function that retains access to its lexical scope'
    },
    {
        question: 'How do you prevent a default action in an event?',
        options: ['event.preventDefault()', 'event.stopPropagation()', 'return false;', 'None of the above'],
        answer: 'event.preventDefault()'
    },
    {
        question: 'What is the purpose of the package.json file?',
        options: [ 'To store environment variables','To manage project dependencies', 'To define database connections', 'To configure server settings'],
        answer: 'To manage project dependencies'
    },
    {
        question: 'What is the difference between let and const in JavaScript?',
        options: [ 'const can be reassigned, let cannot', 'Both can be reassigned', 'None of the above', 'let can be reassigned, const cannot'],
        answer: 'let can be reassigned, const cannot'
    },
    {
        question: 'What is the use of the map() method in JavaScript?',
        options: [ 'To filter an array','To create a new array by applying a function to each element', 'To sort an array', 'To reduce an array'],
        answer: 'To create a new array by applying a function to each element'
    },
    {
        question: 'How do you handle errors in async/await in JavaScript?',
        options: ['try/catch blocks', 'if statements', 'switch cases', 'console.log'],
        answer: 'try/catch blocks'
    },
    {
        question: 'What is the purpose of the dotenv package?',
        options: [ 'To connect to MongoDB','To manage environment variables', 'To style components', 'To handle routing'],
        answer: 'To manage environment variables'
    },
    {
        question: 'How can you conditionally render a component in React?',
        options: ['Using if statements', 'Using the ternary operator', 'Using logical operators', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: `What is the purpose of the browser's localStorage?`,
        options: [`To store data in the user's browser`, `To manage session state`, `To communicate with the server`, 'To cache images'],
        answer: `To store data in the user\'s browser`
    },
    {
        question: 'What does the term "callback hell" refer to?',
        options: [ 'An error in a function', 'A way to optimize performance', 'Nested callbacks that make code hard to read','None of the above'],
        answer: 'Nested callbacks that make code hard to read'
    },
    {
        question: 'What is Redux?',
        options: ['A styling library','A state management library', 'A routing library', 'A testing framework'],
        answer: 'A state management library'
    },
    {
        question: 'What is the purpose of the useReducer hook in React?',
        options: ['To manage complex state logic', 'To handle side effects', 'To optimize performance', 'To manage component lifecycle'],
        answer: 'To manage complex state logic'
    },
    {
        question: 'What is the purpose of a JSON Web Token (JWT)?',
        options: [ 'To store user sessions', 'To manage routing','To securely transmit information between parties', 'To create APIs'],
        answer: 'To securely transmit information between parties'
    },
    {
        question: 'What does the spread operator (...) do in JavaScript?',
        options: ['Expands an iterable into its elements', 'Combines two arrays', 'Creates a copy of an object', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Which of the following methods can be used to handle multiple HTTP methods in a single route in Express?',
        options: [
            'app.use()',
            'app.route()',
            'app.all()',
            'Both app.route() and app.all()'
        ],
        answer: 'Both app.route() and app.all()'
    }
    
];
export default questions