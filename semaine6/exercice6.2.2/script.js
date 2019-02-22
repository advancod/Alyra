/**
* Transaction deplacement
* @param {org.example.mynetwork.Mouvement} tx
* @transaction
*/
async function mouvement(tx,etat,destinataire,emetteur) {
  if(tx == 1) {
     Mouvement.etatActuel = etat
     Mouvement.destinataire = destinataire
     Mouvement.emetteur = emetteur
   }
   else  Colis.etatActuel = etat
   const registre = await getAssetRegistry('org.example.mynetwork.Colis')
   await registre.update(Colis);
}
