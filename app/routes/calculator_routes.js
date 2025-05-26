module.exports = function(app) {
    app.get(/^\/_add\/(.*)/, function(req, res) {
        var result = 0;
        var arrayOfNumbers = req.params[0].split("/")
        for (var currentNumber in arrayOfNumbers) {
            result = result + Number(arrayOfNumbers[currentNumber])
        }

        res.json({ result: result }); 
    })

    app.get(/^\/_multiply\/(.*)/, function(req, res) {
        var result = 1;
        var arrayOfNumbers = req.params[0].split("/")
        for (var currentNumber in arrayOfNumbers) {
            result = result * Number(arrayOfNumbers[currentNumber])
        }

        res.json({ result: result }); 
    })

    app.get(/^\/_substract\/(.*)/, function(req, res) {
        var rawNumbers = req.params[0].split('/');
        var arrayOfNumbers = rawNumbers.filter(function(n) { return n !== ""; }); // Filter out empty strings

        if (arrayOfNumbers.length === 0) {
            return res.status(400).json({ error: "Please provide numbers for subtraction. e.g., /_substract/10/5" });
        }
        
        // Check if all parts are valid numbers
        if (arrayOfNumbers.some(isNaN)) {
            return res.status(400).json({ error: "Invalid number provided for subtraction. All path parts must be numbers." });
        }

        var result = Number(arrayOfNumbers[0]);
        for (var i = 1; i < arrayOfNumbers.length; i++) {
            result = result - Number(arrayOfNumbers[i]);
        }

        res.json({ result: result }); 
    })

    app.get(/^\/_division\/(.*)/, function(req, res) {
        var arrayOfNumbers = req.params[0].split("/")
        if (arrayOfNumbers.length !== 2 || arrayOfNumbers.some(isNaN) || arrayOfNumbers[0] === "" || arrayOfNumbers[1] === "") {
            return res.status(400).json({ error: "Division only works with exactly two valid numbers. e.g., /_division/10/2" });
        } else {
            var num1 = Number(arrayOfNumbers[0]);
            var num2 = Number(arrayOfNumbers[1]);
            if (num2 === 0) {
                return res.status(400).json({ error: "Division by 0 is *NOT* allowed" });
            } else {
                var result = num1 / num2;
                res.json({ result: result });
            }
        }
    })
}