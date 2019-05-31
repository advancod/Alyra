import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import Play from './components/game/Play';
import Withdraw from './components/game/Withdraw';
import SaveWin from './components/game/SaveWin';
import CreateGroup from './components/admin/createGroup';
import CreateMember from './components/admin/createMember';
import CreateDemand from './components/admin/createDemand';
import GetInfoDemand from './components/Demand/getInfoDemand';
import PayDemand from './components/Demand/payDemand';
import SoldeDemand from './components/Demand/soldeDemand';

const Admin = Admin(
	{
		CreateGroup: {
			screen: CreateGroup,
			navigationOptions: {
				title: 'Ceer un groupe'
			}
		},
		CreateMember: {
			// Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
			screen: CreateMember,
			navigationOptions: {
				title: 'Ajouter un membre'
			}
		},
		CreateDemand: {
			// Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
			screen: CreateDemand,
			navigationOptions: {
				title: 'Créer une demande'
			}
		}
	},
	{
		initialRouteName: 'Administration'
	}
);

const Demand = Demand(
	{
		GetInfoDemand: {
			screen: GetInfoDemand,
			navigationOptions: {
				title: 'Trouver une demande'
			}
		},
		PayDemand: {
			// Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
			screen: PayDemand,
			navigationOptions: {
				title: 'Payer une demande'
			}
		},
		SoldeDemand: {
			// Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
			screen: SoldeDemand,
			navigationOptions: {
				title: 'Solder une cagnotte'
			}
		}
	},
	{
		initialRouteName: 'Demandes'
	}
);

const Game = Game(
	{
		Play: {
			screen: Play,
			navigationOptions: {
				title: 'Jouer'
			}
		},
		SaveWin: {
			// Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
			screen: SaveWin,
			navigationOptions: {
				title: 'Déclarer visctoire'
			}
		},
		Withdraw: {
			// Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
			screen: Withdraw,
			navigationOptions: {
				title: 'Récupérer gains'
			}
		}
	},
	{
		initialRouteName: 'Super Cagnotte'
	}
);

const Drawer = createDrawerNavigator({
	admin: { screen: Admin },
	demand: { screen: Demand },
	game: { screen: Game },
});
export default Drawer;
