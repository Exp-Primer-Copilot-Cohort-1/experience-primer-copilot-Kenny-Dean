function member() {
    this.name = "member";
    this.age = 18;
    this.say = function() {
        console.log("my name is " + this.name + ", age is " + this.age);
    }
}