function greeter(person: string) {
    return "Hello, " + person;
}

let user = 'Toms';

document.body.innerHTML = greeter(user);