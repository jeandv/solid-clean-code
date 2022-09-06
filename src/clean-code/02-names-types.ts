(() => {

    const temperaturesCelsius = [33.6, 12.34];

    const serverDirectionIP = '123.123.123.123';

    const usersDataList = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emailsListOfUsers = usersDataList.map(userData => userData.email);

    const playerJump = false;
    const playerRun = true;
    const playerHasItems = true;
    const isLoadingGame = false;

    const initialTimeToStart = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - initialTimeToStart;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl(URL: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareAreaBasedSides(sides: number) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }

})();