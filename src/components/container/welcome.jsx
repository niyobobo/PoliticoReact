import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Navbar from '../functional/navbar'
import Repository from '../functional/repository'
import { getRepository } from '../../redux/actions/welcome';

class Welcome extends Component {

  componentDidMount() {
    const { history, fetchRepositories } = this.props;
    const { token } = localStorage;
    if (!token) return history.push('/');
    fetchRepositories();
  }

  logout = () => {
    localStorage.removeItem('token');
    this.componentDidMount();
  }

  componentDidUpdate(prevProps, prevState) {
    const { token } = localStorage;
    if (!token) history.push('/');
  }

  render() {
    const { repositories } = this.props;
    return (
      <Fragment>
        <Navbar logout={this.logout} />
        <Container>
          <Row className="mt-3">
            {repositories.map(repository => (
              <div key={repository.id} className="col-md-4 cards">
                <Repository data={repository} />
              </div>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
};

Welcome.propTypes = {
  repositories: PropTypes.instanceOf(Array).isRequired,
  fetchRepositories: PropTypes.func.isRequired,
};

Welcome.defaultProps = {
  repositories: [],
};

const mapStateToProps = ({ repository }) => ({
  repositories: repository.repository,
});

const mapDispatchToProps = () => (dispatch) => ({
  fetchRepositories: () => dispatch(getRepository()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);