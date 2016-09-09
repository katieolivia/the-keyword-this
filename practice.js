
//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      // Reserved word to reference an object.  

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

     // Implicit and Explicit binding
     //With implicit the this keyword looks for the object left of the .

     //With explicit binding you can bind, call or apply

  // 3) What is the difference between call and apply?

      // Both invoke the function right away.  With call you pass in the object and then the other parameters of the function.  
      // With apply you pass in the object, but then pass in the parameters as an array.

  // 4) What does .bind do?

      //Bind attaches the object to the function so whenever the function is used later is has that object attached to it.  
      // You do this by storing this bound function in a new variable.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

  var user = {
    username: 'katieolivia',
    email: 'katieonutzman@gmail.com',
    getUsername: function() {
      return this.username
    }
  }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move
  };
}


  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.




//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this Fixed:)

userName;

//Above you're given an object and a function. What does invoking getMyUsername return?
//Note(no tests)
 // Returns 'undefined.  Its binding to the window unless we attach the object to the function. 


//In the example above, what is the 'this keyword' bound to when getMyUsername runs?
 //Binding to the window that has no username property.



//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
