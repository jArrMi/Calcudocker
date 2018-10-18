### Clone de image
```
git clone /your/path/for/saving
```

### Building the image
After you have cloned the image, navigate to the folder where you just put it and run the following command:
```
docker build -t aes_calculator .
```

After that, the image will be listed by Docker:
![docker images](https://github.com/dartharrmi/Calcudocker/blob/master/images/aes_calculator_1.png  "Image listed by Docker")

### Running the image
Run the following command:
```
docker run -p 49160:8080 -d aes_calculator
```
Port 49160 is the one recommended, though you can use any port available in your own machine.

You can theck that the image is running with the following command:
```
docker ps
```
which should produce an output like this:
![docker ps](https://github.com/dartharrmi/Calcudocker/blob/master/images/aes_calculator_2.png  "Docker image running")

### Testing
The API exposes 4 methods, each of them performs one of the basic arithmethic operations, for all the method pass your numbers as path parameters, is good to notice that only the <strong>division</strong> needs two numbers:
1. <strong>Addition: </strong> 127.0.0.1:49160/\_add/_firstNumber_/_secondNumber_/_thirdNumber_/_andSoOn_
1. <strong>Subtraction: </strong> 127.0.0.1:49160/\_substract/_firstNumber_/_secondNumber_/_thirdNumber_/_andSoOn_. Based on your inputs, it might produce a negative output.
1. <strong>Multiplication: </strong> 127.0.0.1:49160/\_multiply/_firstNumber_/_secondNumber_/_thirdNumber_/_andSoOn_
1. <strong>Division: </strong> 127.0.0.1:49160/\_division/_firstNumber_/_secondNumber_

There are several ways to check that the server running within the image is working, one might be by using the good-old-one `curl` command, run this and you should get a simmilar output:
![Addition](https://github.com/dartharrmi/Calcudocker/blob/master/images/aes_calculator_3.png  "Addition")

And you can also use a client, like Postman:
![Postman](https://github.com/dartharrmi/Calcudocker/blob/master/images/aes_calculator_4.png  "Postman")

### Calcudocker in DockerHub
A more convenient and straightforward way to run the image is pulling directly from DockerHub 🤓, just run this command:
```
docker run -p 49160:8000 -d dartharrmi/calcudocker:v0.0.1
```
Again, check the server running with methods described above 🙃.
