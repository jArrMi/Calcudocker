module.exports = function(app) {
    app.get(/^\/_add\/(.*)/, function(req, res) {
        var result = 0;
        var arrayOfNumbers = req.params[0].split("/")
        for (var currentNumber in arrayOfNumbers) {
            result = result + Number(arrayOfNumbers[currentNumber])
        }

        res.send("Your result is: " + result); 
    })

    app.get(/^\/_multiply\/(.*)/, function(req, res) {
        var result = 1;
        var arrayOfNumbers = req.params[0].split("/")
        for (var currentNumber in arrayOfNumbers) {
            result = result * Number(arrayOfNumbers[currentNumber])
        }

        res.send("Your result is: " + result); 
    })

    app.get(/^\/_substract\/(.*)/, function(req, res) {
        var result = 0;
        var arrayOfNumbers = req.params[0].split("/")
        for (var currentNumber in arrayOfNumbers) {
            result = result - Number(arrayOfNumbers[currentNumber])
        }

        res.send("Your result is: " + result); 
    })

    app.get(/^\/_division\/(.*)/, function(req, res) {
        var arrayOfNumbers = req.params[0].split("/")
        if (arrayOfNumbers.lenght > 1) {
            res.send("Division only works with two numbers :(");
        } else {
            if (arrayOfNumbers[1] == 0) {
                res.send("Division by 0 is *NOT* allowed");
            } else {
                var result = Number(arrayOfNumbers[0]) / Number(arrayOfNumbers[1])
                res.send("Your result is: " + result);
            }
        }
    })
}