import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './index.css';

class ProfilePage extends React.Component {
  render(){
    if (!this.props.isLoged) return <Redirect to="/login" />;
    return(
      <div className="profile">
        <h1>Профиль</h1>
        <strong><p>Тут содержиться секретная информация!</p></strong>
      </div>
    );
  }
}

const mapStateToProps = ({isLoged}) => {
  return { isLoged };
};

export default connect(mapStateToProps)(ProfilePage)
