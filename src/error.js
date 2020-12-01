
/**
 * Unused class. Originally this was supposed to run in case there are errors during runtime.
 * Unfortunately, I don't have the time to implement this throughout all the .js scripts.
 * @author John Li
 */

class Error {


    constructor() {
        this.x = 0;
        this.str = ["There is a 25 character limit to usernames!",
                    "Special Characters are not allowed in usernames!"
        ];
    }

    setX(x) {
        this.x = x;
    }

    getStr() {
        return this.str[this.x];
    }
}