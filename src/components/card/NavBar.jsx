import React from 'react';
import propTypes from 'prop-types';
import Select from '../form/Select';

export default class NavBar extends React.PureComponent {
  render() {
    const { event, value } = this.props;
    return (
      <header className="Nav">
        <h1>Meu Baralho</h1>
        <nav>
          <Select
            options={ ['todas', 'normal', 'raro', 'muito raro'] }
            dataId="rare-filter"
            name="rare-filter"
            label="Raridade"
            value={ value }
            callback={ event.fill }
          />

          <div>
            <input
              type="text"
              data-testid="name-filter"
              onChange={ event.fill }
            />
          </div>

          <div>
            <label htmlFor="hasTrunfo">
              Super Trunfo
              <input
                onChange={ event.trunfo }
                name="hasTrunfo"
                type="checkbox"
                data-testid="trunfo-filter"
              />
            </label>
          </div>
        </nav>
      </header>
    );
  }
}

NavBar.propTypes = {
  value: propTypes.string.isRequired,
  event: propTypes.shape({
    fill: propTypes.func.isRequired,
    trunfo: propTypes.func.isRequired,
  }).isRequired,
};
