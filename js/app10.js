// Optional Chaining（ES2020）：允許開發者安全地訪問深層嵌套物件屬性。
// user 是一個深層的嵌套物件
const user = {
    profile: {
        name: 'Bob',
        details: {
            age: 29,
            address: {
                city: 'London',
                street: 'Baker'
            }
        }
    }
}

const street = user.profile.details.address?.street;
console.log(street);

const carNo = user.profile.details.car?.no;
console.log(carNo);// undefined