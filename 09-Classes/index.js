var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "Dhaka";
        this.name = name;
        this.email = email;
    }
    return User;
}());
var anotherUser = /** @class */ (function () {
    function anotherUser(name, email) {
        this.name = name;
        this.email = email;
    }
    return anotherUser;
}());
var newUser = new User("saiful", "saiful@gmail.com");
