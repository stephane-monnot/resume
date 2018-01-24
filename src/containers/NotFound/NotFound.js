import React, { Component } from 'react';
import flow from 'lodash/flow';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import { FakeCodeTyping } from 'react-fake-code-typing';

import 'react-fake-code-typing/style.min.css';

import './NotFound.css';

const testCode = `
/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
class HttpException extends \\RuntimeException implements HttpExceptionInterface
{
  public function __construct(int $statusCode, string $message = null, \\Exception $previous = null)
  {
      $this->statusCode = $statusCode;
      parent::__construct($message, $code, $previous);
  }

  /**
   * Get Status code.
   *
   * @return int Status code
   */
  public function getStatusCode()
  {
      return $this->statusCode;
  }
}

/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
throw new HttpException(400, 'Page Not Found');`;

class NotFound extends Component {
  render() {
    const { formatMessage } = this.props.intl;

    return (
      <div className="NotFound">
        <Helmet
          title={formatMessage({
            id: 'NotFound.title',
            defaultMessage: '404 - page not found'
          })}
        />
        <ScreenBlock className="NotFoundBlock">
          <FakeCodeTyping>
            <SyntaxHighlighter language="php" style={monokai}>{testCode}</SyntaxHighlighter>
          </FakeCodeTyping>
        </ScreenBlock>
      </div>
    );
  }
}

const decorators = flow([
  injectIntl
]);

export default decorators(NotFound);
