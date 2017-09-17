// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = this.props;

    this.props.loadBooks();
  }

  render() {
    const {
      books,
    } = this.props;

    if (isFirstRender(books)) {
      return null;
    }

    return (
      <div className="Library">
        <h1>Library</h1>

        <ul>
          {
            books.map((book, key) => {
              return (
                <li key={key}>
                  {book.fname} {book.lname}  - {book.city}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books
}), actions)(Library);