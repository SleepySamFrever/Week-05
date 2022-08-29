console.log(`Let's talk about classes`);
//Let's talk about classes

//Classes are extremely useful when we want to group properties and functionality together to provide representation of an object.
//Use keyword "class" followed by the name of the class.
//Recommended to use "Pascal" naming convention for classes(First letter of every word capitalized).

class Student {
    //Everything in here is part of the class.
    //Next we can add properties or variables to our class by creating a special method known as a constructor.
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
        //We use the "this" keyword to specify the field that belongs to the instance.
        //"This" refers to the property of whatever object was created from that class.
    }
    //Here we add functionality
    //We will add an introduce method to log out some information about the student
    introduce(){
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}
//Now let's create a couple instances of this class.

let student1 = new Student('Tom', 'Sawyer', '4062087860', 'A');
//When we create an instance of a class we use the "new" keyword(Instantiate).
let student2 = new Student('Sam', 'Smith', '2222221234', 'A');

//We can go ahead and call our introduce method on each student.

student1.introduce();
student2.introduce();

//HOW DO WE KNOW WHEN TO CREATE A CLASS?!
//Being able to tell when a new class is needed takes practice, but a good rule to follow is a class should be in charge of 1 thing.
//Anytime you have a concept that needs properties and functionality, create a class for it.

/*Card game program would have classes for
-Players
-card
-dealer
-deck
-game
-etc.