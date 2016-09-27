function fib(num) {
    var a = b = 1;
    var c = 0;
    for (var i = 0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

function fibRec(n) {
    return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
};

function summ(a) {
    var cur = a;

    function f(b) {
        cur += b;
        return f
    }
    f.toString = function() {
        return
    }
    return f
};

function Calc() {
    this.methods = {
        '-': function(a, b) {
            return a - b
        },
        '+': function(a, b) {
            return a + b
        }
    };

    this.calculate = function(str) {
        var vals = str.split(' ');
        var a = +vals[0];
        var op = vals[1];
        var b = +vals[2];

        if (this.methods[op]) {
            return this.methods[op](a, b)
        } else {
            return 'Method not found'
        }
    };

    this.addMethod = function(method, func) {
        this.methods[method] = func;
    }
};

function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0]
            },
            set: function(val) {
                this.fullName = val + ' ' + this.lastName
            }
        },
        lastName: {
            get: function() {
                return this.fullName.split(' ')[1]
            },
            set: function(val) {
                this.fullName = this.firstName + ' ' + val
            }
        }
    })
};

function Article() {
    this.created = new Date();

    Article.count++;
    Article.last = this.created;
};

Article.stats = function() {
    return 'c:' + this.count + ' l:' + this.last
};

Article.count = 0;

function argSum(args) {
    arguments.reduce = [].reduce;

    return arguments.reduce(function(a, b) {
        return a + b
    })
};

function work(a) {
    return a + ' works'
};

function makeLogging(f, log) {
    for (i in arguments) {
        console.log(arguments[i])
    }
};

