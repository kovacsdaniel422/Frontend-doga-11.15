console.log(" GamesView Lefutott")
class GamesViev {
  #elem;
  constructor(elem, szuloElem) {
    this.#elem = elem;
    szuloElem.append(`<tr>
      <td>${elem.id}</td>
      <td>${elem.game}</td>
      <td>${elem.release}</td>
      <td>${elem.platforn}</td>
      </tr>`);

    constructor(tomb, szuloElem);
    {
      szuloElem.append(`<div>
        <thead>
        <tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>`);
      this.tabla = szuloElem.children("table:last-child");
      this.tbodyElem = this.tabla.children("tbody");

      tomb.forEach((Game) => {
        const GameObj = new GamesView(Game, this.tbodyElem);
      });
    }
  }
}
export default GamesViev;
