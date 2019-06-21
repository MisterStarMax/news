import React from 'react';
import { ServiceConsumer } from '../service-context';

const withDataServer = () => (Wrapped) => {
  return (props) => {
    return(
      <ServiceConsumer>
      {
        (server) => {
          return (<Wrapped {...props}
                   server={server} />);
        }
      }
      </ServiceConsumer>
    );
  }
};

export default withDataServer;
