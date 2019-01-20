process.stdin.setEncoding('utf-8');//enkodowanie przyjmowanych danych

process.stdin.on('readable', function() {//nasłuchiwanie na zdarzenie odczytu
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {//sprawdzenie czy na wejściu cokolwiek istnieje
        var instruction = input.toString().trim();//trim()pozbycie się wszystkich białych znaków z przodu i za tekstem
        switch (instruction) {//switch statement  zamiast if, if else
            case '/exit':
                process.stdout.write('Quitting app!\n');// standard output służący do wypisywania komunikatów z procesu
                break;
            
            
            case '/version':
                process.stdout.write('Node version is: ' + process.versions.node + '\n');
                process.stdout.write('Language is: ' + process.env.lang + '\n');
                break;

            default:
                process.stderr.write('Wrong instruction!\n');//komunikat do przekazywania błędów pojawi się w konsoli
        }
    }
    
});