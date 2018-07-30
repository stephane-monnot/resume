import React from 'react';
import Helmet from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import { FakeCodeTyping } from 'react-fake-code-typing';
import 'react-fake-code-typing/style.min.css';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

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

const testCodeSmallScreen = `
/**
 * @link Home
 * @todo ..write a 404 page that actually makes sense.
 */
class HttpException
  extends \\RuntimeException
  implements HttpExceptionInterface
{

  public function __construct(
    int $statusCode,
    string $message = null,
    \\Exception $previous = null
  ) {
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

export const NotFound = ({ intl: { formatMessage } }) => (
  <div className="NotFound">
    <Helmet
      title={formatMessage({
        id: 'NotFound.title',
        defaultMessage: '404 - page not found',
      })}
    />
    <ScreenBlock
      containerClassName="NotFoundBlockContainer screen-sm"
      className="NotFoundBlock"
    >
      <FakeCodeTyping>
        <SyntaxHighlighter language="php" style={monokai}>
          {testCodeSmallScreen}
        </SyntaxHighlighter>
      </FakeCodeTyping>
    </ScreenBlock>

    <ScreenBlock
      containerClassName="NotFoundBlockContainer screen-xl"
      className="NotFoundBlock"
    >
      <FakeCodeTyping>
        <SyntaxHighlighter language="php" style={monokai}>
          {testCode}
        </SyntaxHighlighter>
      </FakeCodeTyping>
    </ScreenBlock>
  </div>
);

NotFound.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(NotFound);
