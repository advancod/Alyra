import React from 'react';
import { ScrollView } from 'react-native';
import Play from '../game/Play';
import Withdraw from '../game/Withdraw';
import SaveWin from '../game/SaveWin';
import { withNavigation } from 'react-navigation';

class GameComponent extends React.Component {

  render() {
    return (
        <ScrollView>
      <Play         text1={'JOUEZ A NOTRE JEUX ET GAGNEZ DES ETHERS'}
                    text2={'PRIX DU TICKET'}
                    text3={'BLOC ACTUEL'}
                    text4={'BLOC DE FIN DU JEUX'}
                    text5={'BLOC DU JEUX DE PREDICTION'}
                    text6={'BLOC POUR DECLARATION'}
                    text7={'BLOC DE RECUPERATION'}
                    text8={'SUPERCAGNOTTE'}
                    text9={'VOTRE BALANCE EN TOKEN'}
                    text10={'ETAT DU JEUX'}
                    text11={'JOUER AU JEUX'}/>
      <SaveWin      text1={'DECLARER SES GAINS'}
                    text2={'VOTRE PREDICTION'}
                    text3={'MONTANT DE LA SUPERCAGNOTE'} />
      <Withdraw     text1={'ECUPERER SES GAINS'}
                    text2={'VOTRE PART DE LA CAGNOTE'}
                    text3={'NOMBRE DE GAGNANTS'} />
    </ScrollView>
    );
  }
}

export default withNavigation(GameComponent);
