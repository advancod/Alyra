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
   else  Mouvement.etatActuel = etat
   const registre = await getAssetRegistry('org.example.mynetwork.Colis')
   await registre.update(Mouvement);

 let event = getFactory().newEvent('fr.laposte', 'DeplacementEvent');
   event.colis = tx.colis;
   event.arrivee = tx.arrivee;
   emit(event);
}
