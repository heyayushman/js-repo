// const instagramUser = new Object();
const instagramUser = {};

instagramUser.id = "1234user";
instagramUser.name = "kristine";
instagramUser.isLoggedIn = false;

// console.log(instagramUser);

const regularUser = {
    email : "kristine@insta.com",
    fullName : {
        userFullName : {
            firstName : "Kristine",
            lastName : "Doe"
        }
    }
}
// console.log(regularUser.fullName.userFullName)

//* concatenating objects

const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "a", 4: "b"};

// const Obj3 = {Obj1, Obj2} //* { Obj1: { '1': 'a', '2': 'b' }, Obj2: { '3': 'a', '4': 'b' } }

// const Obj3 = Object.assign(Obj1, Obj2)
const Obj3 = {...Obj1, ...Obj2} //* Spread operator returns a concatenated object
// console.log(Obj3)

//? When the values comes from the database, you will get in array of objects form
const users = [
    {
        id: 1,
        email: "js@gmail.com"
    },
    {
        id: 2,
        email: "jay@gmail.com"
    },
    {
        id: 3,
        email: "sam@gmail.com"
    },
    {
        id: 4,
        email: "kris@gmail.com"
    }
]

// console.log(instagramUser)
// console.log(Object.keys(instagramUser))
// console.log(Object.values(instagramUser))
// console.log(Object.entries(instagramUser))

// console.log(instagramUser.hasOwnProperty('isLogged'))



//! Object de-structure and JSON API introduction

const course = {
    courseName : "JSCourse",
    price: "999",
    courseInstructor: "Ayushman",
    platform : {
        youtube : {
            channelName : "tech_unfiltered"
        }


    }
}


// course.courseInstructor
//* create an curly bracket {} and mention the key <-courseName-> ==> {courseName}, and the object from which to get the values <-course->

// const {courseName, price, courseInstructor} = course
// console.log(courseName, price, courseInstructor)

const {price: coursePrice} = course
console.log(coursePrice)

const {courseInstructor: instructor} = course
console.log(instructor)

const {platform : {youtube: {channelName}}} = course
console.log(channelName)

