import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';

class Repository extends Component {
  render() {
    const { html_url, name, description, watchers, language } = this.props.data;
    return (
      <Card className="repo-card">
        <CardBody>
          <CardTitle className="text-primary">
            <a href={html_url} target="_new">
              <i className="fas fa-toolbox mr-2 txt-primary" /><strong>{name}</strong>
            </a>
          </CardTitle>
          <CardText className="card-text">
            {description}
          </CardText>
          <span className="mr-3"><i className="fas fa-star-half-alt mr-1 btn-outline-warning"></i>{watchers}</span>
          <span className="mr-3"><i className="fas fa-circle-notch mr-1"></i>{language}</span>
        </CardBody>
      </Card>
    );
  }
}

export default Repository;