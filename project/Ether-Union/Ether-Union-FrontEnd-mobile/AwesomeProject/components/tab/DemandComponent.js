import React from 'react';
import { ScrollView } from 'react-native';
import GetInfoDemand from '../Demand/getInfoDemand';
import PayDemand from '../Demand/payDemand';
import SoldeDemand from '../Demand/soldeDemand';
import { withNavigation } from 'react-navigation';

class DemandComponent extends React.Component {

  render() {
    return (
      <ScrollView>
      <GetInfoDemand  text1={'RECHERCHER UNE DEMANDE'}
                      text2={'1 - CHOISIR UN GROUPE'}
                      text3={'2 - CHOISIR UN MEMBRE'}
                      text4={'VOTRE PSEUDONYME DANS CE GROUPE'}
                      text5={'RECEPTIONS'}
                      text6={'DONNATIONS'}
                      text7={'MONTANT DE LA CAGNOTTE DEMANDEE'}
                      text8={'ETAT DE LA CAGNOTE'}
                      text9={'SON ADRESSE ETHEREUM'}
                      text10={'DESCRIPTION'} />
      <PayDemand      text1={'PAYER UNE DEMANDE - Gagnez des tokens'}
                      text2={'DONNEZ ET GAGNEZ DES COINUNIONS'}
                      text3={'ENTREZ UN PSEUDONYME'} />
      <SoldeDemand    text1={'SOLDER UNE DEMANDE'}
                      text2={'CHOISIR UN PSEUDONYME'}  />
      </ScrollView>
    );
  }
}

export default withNavigation(DemandComponent);
