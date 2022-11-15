
console.log(" GamesModell Lefutott")
class GamesModel {
    #GamesTomb = [];
    constructor() {

    }

    dataIn(endPoint) {
        fetch(endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#GamesTomb = data.Games;
                myCallBack(this.#GamesTomb);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }
}
export default GamesModel