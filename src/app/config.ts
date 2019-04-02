export class Config {
  //KINVEY
  static appKey: string = "kid_SJAGGgcBm";
  static appSecret: string = "27d5de1f432f49dfa8cd8da1c37f11ec";

  //LOGIN
  static appLogo: string = "images/logo-1.png";
  static appTitle: string = "ACME Field Service";

  //HOME
  static homePageTitle: string = "Home";
  static logo: string =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Acme_Markets_lolo.svg/1200px-Acme_Markets_lolo.svg.png";
  static homePageVisible: boolean = true;
  static homePageHeading: string = "For all your needs in the field..";

  //ACCOUNTS
  static accountsPageTitle: string = "Accounts";
  static accountsCollectionName: string = "accounts";
  static accountsPageVisible: boolean = true;

  //PRODUCTS
  static productsPageTitle: string = "Products";
  static productsCollectionName = "products";
  static productsPageVisible: boolean = false;
  //FILES
  static filesPageTitle: string = "Files";
  static filesPageVisible: boolean = true;

  //TASKS
  static tasksPageTitle: string = "Tasks";
  static taskCollectionName: string = "tasks";
  static tasksPageVisible: boolean = true;

  //ADD TASKS
  static addTaskPageTitle: string = "Add Task";

  //OFFLINE
  static offlinePageTitle: string = "Offline";
  static offlineAccountsCollectionName: any = "accounts";
  static offlinePageVisible: boolean = true;

  //MAP
  static mapPageTitle: string = "Map";
  static mapPageVisible: boolean = false;

  //CHAT
  static chatPageTitle: string = "Chat";
  static botId: string = "5c74a4817e240411bf114338";
  static channelId: string = "4941a3f5-ac65-4986-87d9-ad4316fbbb03";
  static channelToken: string = "68a79180-ddb5-421d-b8ba-ae161be01026";
  static chatPageVisible: boolean = true;

  //AR
  static arPageTitle: string = "Augment Reality";
  static arPageVisible: boolean = true;

  //SETTINGS
  static settingsPageTitle: string = "Settings";
}
