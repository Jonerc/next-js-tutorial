function myFunctionOne({searchParams}: {searchParams?: {query?: string; page?: string; }}) {
    console.log("I have received " + searchParams?.query + " AND " + searchParams?.page);
}

const myObject1 = {searchParams: {query: "This is my query", page: "This is my page"}};
const myObject2 = {searchParams: {query: "This is my query"}};
const myObject3 = {searchParams: {page: "This is my page"}};

myFunctionOne(myObject1);
myFunctionOne(myObject2);
myFunctionOne(myObject3);
myFunctionOne({});

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);



