// Object declaration
const user = {
    name: 'Jayasurya',
    email: 'jayasura@gmail.com',
    isActive: false
}

// Function expecting an object as parameter
// We specify the type for the object
function createUser(user: { name: string; isPaid: boolean }) {
    // function body (empty for now)
}

// Passing an object that matches the required type
createUser({ name: 'Jayasurya', isPaid: false })

// Function that returns an object with specific type
function createCourse(): { name: string; price: number } {
    return { name: 'MERN', price: 2000 }
}

// Marks this file as a module (avoids variable conflicts across files)
export {}
