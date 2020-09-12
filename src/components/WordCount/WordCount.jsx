import React from 'react';
import {
  Col,
  Row,
  Container,
  Input,
} from 'reactstrap';

import {
  wordCountTextContainerStyles,
  wordCountTextStyles,
} from './styles.scss';

class WordCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      charCount: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getWordCountText = this.getWordCountText.bind(this);
    this.getCharCountText = this.getCharCountText.bind(this);
  }

  getWordCountText() {
    return `${this.state.wordCount} ${this.state.wordCount === 1 ? 'word' : 'words'}`;
  }

  getCharCountText() {
    return `${this.state.charCount} ${this.state.charCount === 1 ? 'character' : 'characters'}`;
  }

  handleOnChange(e) {
    const text = e.target.value || '';
    const wordCount = text.trim().split(' ').filter(s => s !== '').length;
    const charCount = text.length;
    this.setState({ wordCount, charCount });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="2" />
          <Col md="8">
            <div className={wordCountTextContainerStyles}>
              <div className={wordCountTextStyles}>{this.getWordCountText()}</div>
              <div className={wordCountTextStyles}>{this.getCharCountText()}</div>
            </div>
          </Col>
          <Col md="2" />
        </Row>
        <Row>
          <Col md="2" />
          <Col md="8">
            <Input
              type="textarea"
              name="text"
              id="text"
              style={{ height: 350, resize: 'none' }}
              onChange={this.handleOnChange}
            />
          </Col>
          <Col md="2" />
        </Row>
      </Container>
    );
  }
}

export default WordCount;
