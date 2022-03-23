import React from 'react';
import propTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import ContentCard from './card/ContentCard';
import '../styles/Card.css';

export default class Card extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="full-card">
        <div className="card-bord">
          <ContentCard { ...props } />
        </div>
        {props.delBtn && (
          <button
            id={ props.id }
            className="deleteBtn"
            type="button"
            data-testid="delete-button"
            onClick={ props.onClick }
          >
            <AiFillDelete />
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  id: propTypes.string,
  delBtn: propTypes.bool,
  onClick: propTypes.func,
};

Card.defaultProps = {
  id: '',
  delBtn: false,
  onClick: () => {},
};
