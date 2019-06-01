import React from 'react';
import { ScrollView } from 'react-native';
import CreateGroup from '../admin/createGroup';
import CreateMember from '../admin/createMember';
import CreateDemand from '../admin/createDemand';
import { withNavigation } from 'react-navigation';


class AdminComponent extends React.Component {

  render() {
    return (
      <ScrollView>
      <CreateGroup  text1={'CREER UN GROUPE'}
                    text2={'NOM DU NOUVEAU GROUPE A CREER'}
                    text3={'VOTRE PSEUDONYME DANS CE GROUPE'} />
      <CreateMember text1={'AJOUTER UN MEMBRE A UN GROUPE'}
                    text2={'CHOISISSEZ UN GROUPE'}
                    text3={'ADRESSE DU NOUVEAU MEMBRE'}
                    text4={'PSEUDONYME DU NOUVEAU MEMBRE'} />
      <CreateDemand text1={'CREER UNE DEMANDE'}
                    text2={'CHOISIR UN PSEUDONYME'}
                    text3={'DESCRIPTION'} />
      </ScrollView>
    );
  }
}
export default withNavigation(AdminComponent);
