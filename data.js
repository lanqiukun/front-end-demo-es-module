console.log('data.js')
let n = 20

let obj = {
    name: 'Edison',
    age: 20,
}

let nullable = null

setTimeout(() => {
    nullable = () => {
        console.log('setTimeout nullable')
    }
}, 1000);


const change_nullable_fn = function() {
    nullable = () => {
        console.log('change nullable manually')
    }
}

export {
    n,
    obj,
    nullable,
    change_nullable_fn,
}