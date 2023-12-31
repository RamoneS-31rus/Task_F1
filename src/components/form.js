import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.wetherMetod} className="form">
        <div className="select">
          <select className="select_exclude" name="exclude">
            <option disabled>Выбирете интервал</option>
            <option value="current">Текущая</option>
            <option value="daily">На 7 дней</option>
          </select>

          <select className="select_city" name="city">
            <option disabled>Выберете город</option>
            <option value="London">Лондон</option>
            <option value="Moscow">Москва</option>
            <option value="Kiev">Киев</option>
            <option value="Warshawa">Варшава</option>
          </select>
        </div>

        <div className="button">
          <button className="btn"> Показать погоду </button>
        </div>
      </form>
    );
  }
}

export default Form;
