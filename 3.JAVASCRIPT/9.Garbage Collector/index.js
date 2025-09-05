// Garbage Collector in JavaScript
// The most complex aspect of any coding language is
// memory allocation and deallocation.

// What is Garbage Collection?
// Garbage collection is an automatic memory management
// process that identifies and deallocates memory occupied 
// by objects that are no longer needed by the program. In JavaScript, 
// this process is performed by the runtime environment, typically a web
// browser or Node.js, rather than the programmer manually freeing memory.



    let obj1 = { name: 'Deepak' };  // Object 1 created
    let obj2 = { name: 'Sam' };  // Object 2 created

    obj1.reference = obj2;  // Object 1 now references Object 2
    obj2.reference = obj1;  // Object 2 now references Object 1

    // At this point, both obj1 and obj2 are still in use and have references to each other

    obj1 = null;  // Removing reference to Object 1
    obj2 = null;  // Removing reference to Object 2

    // Even though we've removed the references to obj1 and obj2,
    // the JavaScript engine can still identify that these objects are not reachable
    // from the root of the application (global scope or any other reachable objects)
    // and will automatically deallocate the memory occupied by these objects.


    // In JavaScript, the garbage collector periodically runs in the background, identifying
    // and deallocating memory that is no longer being used or referenced by the program.