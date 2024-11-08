# The Significance of Union and Intersection Types in TypeScript

ypeScript adds static typing to JavaScript, which can help developers catch errors early and write more predictable code. Though TypeScript provides a form of several types, union and intersection types are such features that can significantly allow us to express complex data structures and enhance the flexibility and safety of our code. Let’s know about what these types are, and why they are important

## Union Types: Accepting Versatility

In JavaScript, a variable might hold different types of values. TypeScript expresses such flexibility through union types that define a variable to have one of several possible types with increased degree of freedom, all while allowing for type checking benefits.

Imagine a function that requires a user ID as an input. This ID could either be a string or a number, depending on how the system works. With the union type, one is able to tell TypeScript that this variable can either of a string or a number.
we define and separate union types using **" | "** this bar .

### As example

```
type id= string | number
function user(userID :id){
console.log(userID)
}
```

here, the id can be a string or number .

## Intersection Types: Combine Multiple Types Together

While union types provide flexibility for a variable to be one of many types, intersection types provide the ability to build a single type from many. It is particularly useful when one needs to work with objects that must satisfy multiple criteria at once.

Suppose we are building an employee management system. An Employee, for example, must bear the properties of both a Person (name, age) as well as a Worker (employee ID, department). This can be coded up as an intersection type.

we define intersection types using **" & "** this .As example

```
type Person ={
name:string;
age:number;
}

type Worker={
employeeId: number;
department: string;
}
type Employee = Person & Worker;

```

here, the Employee type holds both Person and Worker types

Union and intersection types are two key features of TypeScript that allow us to manage complex data and build a more resilient application.

Union types are used where a variable can take more than one type; it brings in a line of flexibility while not being compromising with type safety.
Intersection, we can combine different properties into one single object with this type which is the best way for the developers to deal with complex data structures.

This knowledge will take you some steps closer to the development of a reliable and maintainable TypeScript code base.
