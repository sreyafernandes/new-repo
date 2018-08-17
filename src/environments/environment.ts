// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyApKk2lhpyAmQlR-m7Ueaq5n01nsHN1OHA',
      authDomain: 'grocerylist-f4e8b.firebaseapp.com',
      databaseURL: 'https://grocerylist-f4e8b.firebaseio.com',
      projectId: 'grocerylist-f4e8b',
      storageBucket: 'grocerylist-f4e8b.appspot.com',
      messagingSenderId: '668614893772',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
