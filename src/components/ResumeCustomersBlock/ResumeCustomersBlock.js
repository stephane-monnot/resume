import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import './ResumeCustomersBlock.css';

const ResumeCustomersBlock = ({ customers }) => (
  <ScreenBlock id="Resume-customers" className="ResumeCustomersBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.customers" defaultMessage="Customers" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.customersSubtitle"
            defaultMessage="Ils me font confiance"
          />
        </p>
      </div>

      <div className="ResumeCustomersBlock-customers">
        {customers.map((customer, i) => {
          const logo = require(`../../data/img/${customer.picture}`); // eslint-disable-line global-require
          return (
            <LazyLoad height={150}>
              <div
                key={i} // eslint-disable-line react/no-array-index-key
                className="ResumeCustomersBlock-customer-container"
              >
                <div className="ResumeCustomersBlock-customer">
                  <Card
                    style={
                      customer.front ? customer.front.style : customer.style
                    }
                    className="ResumeCustomersBlock-customer-front"
                  >
                    <CardContent>
                      <img alt="" src={logo} />
                    </CardContent>
                  </Card>
                  <Card
                    style={customer.back ? customer.back.style : customer.style}
                    className="ResumeCustomersBlock-customer-back"
                  >
                    <CardContent>
                      <div className="ResumeCustomersBlock-customer-back-name">
                        {customer.name}
                      </div>
                      {customer.description && (
                        <div className="ResumeCustomersBlock-customer-back-description">
                          {customer.description}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </LazyLoad>
          );
        })}
      </div>
    </div>
  </ScreenBlock>
);

ResumeCustomersBlock.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default ResumeCustomersBlock;
