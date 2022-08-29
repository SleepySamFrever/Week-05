console.log(`Let's talk about handling exceptions`);
//Let's talk about handling exceptions.

//Sometimes code results in error whether or not it is well written.
//Some functionality such as reading from a file, or communictating with other computers can cause error outside the control of my code.

//For example if our program relies on another program to send information, and the program our program is dependant on fails, it could cause an error in our program regardless of our code.
//To handle these types of situations and make sure our programs don't crash because of something else, we can use "Try Catch Blocks" to handle any exceptions that might be thrown.
//An exception can be thought of as an error. It is an exception to what should be happening.
//We can catch exceptions and tell our program how to gracefully handle them rather than allowing our program to crash.

//To do this we can wrap code that may result in an exception or error inside a "Try block".
//Then, following the try block, we have a catch block that defines what will happen if any exceptions occur or are thrown from the code inside the preceding try block.

//Example:
    //list.push('hello');
    //console.log('goodbye');
//If we print this, we can see that "goodbye" never gets logged because the error was thrown trying to push to an array that doesn't exist.
//Because of the error, we never got to the following code(our log). This means our program crashed.

//What we can do is to fix this is add "Try and Catch" blocks.

try{
    FileList.push('hello');
} catch (err){
    console.log()
}

console.log('goodbye');
//Even though an error was thrown, because of the try and catch blocks, it was handled and our program keeps running and prints our log.

//In addition to try and catch blocks we can also add a "Finally" block in addition to try and catch.
//The code inside a finally block will run whether an exception is thrown or not.

