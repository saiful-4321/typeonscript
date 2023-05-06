var score = 44;
score = 55;
score = "fourth";
var userType = { name: "saiful", id: 4455 };
userType = { username: "admin123", id: 887 };
function getId(id) {
    console.log("DB id is ".concat(id));
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
}
getId(3);
getId("3");
// arrays
// const data: number[] = [1,2,3,"4"] //string not allowed
// const data2: string[] = [1,2,3,"4"] //number not allowed
var data3 = [1, 2, 3, "4", true]; //multiple type define
var seatAllotment;
seatAllotment = "middle";
// seatAllotment = "crew" //this is not acceptable beacause type is not defined
