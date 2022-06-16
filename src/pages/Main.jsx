import React from 'react';
import { connect } from 'react-redux';
import { actionsCreators } from '../redux/actions';
import Contact from '../components/contactCard/Contact';
import Header from '../components/Header';
import getAllContacts from '../services/api';

class Main extends React.Component {

  componentDidMount() {
    console.log('props', this.props);
    const { setContactList } = this.props;
    getAllContacts().then(contacts => setContactList(contacts));
  }

  render() {
    const { mycontacts } = this.props;
    return (
      <div>
        <Header />
        <h1> Meus Contatos</h1>
        <div>
          {
            mycontacts.map(({ name, phone, email}) => (<Contact name={ name } phone={ phone } email={email} />))
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveContact: (contact) => dispatch(actionsCreators.setContact(contact)),
  removeContact: (contact) => dispatch(actionsCreators.removeContact(contact)),
  setContactList: (contact) => dispatch(actionsCreators.setContactList(contact)),
})

const mapStateToProps = ({ mycontacts }) => ({
  mycontacts,
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
