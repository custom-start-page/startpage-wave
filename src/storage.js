"use strict";

class CustomStartStorageLocal {
  constructor() {
    this.key = 'customstart-data';
  }

  async set(obj) {
    localStorage.setItem(this.key, JSON.stringify(obj));
  }

  delete() {
    localStorage.delete(this.key);
  }

  async get() {
    const retrievedObject = localStorage.getItem(this.key);

    if (retrievedObject) {
      return JSON.parse(retrievedObject);
    }

    return this.getDefault();
  }

} // class CustomStartStorageApi {
//     async set(obj) {
//         const rawResponse = await fetch('/api/data', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(obj)
//         });
//         const content = await rawResponse.json();
//         console.log(content);
//     }
//     delete() {
//         throw "Delete not implemented on API.";
//     }
//     async get() {
//         return await fetch('/api/data')
//             .then(res => res.json())
//             .then(out => {
//                 return out;
//             })
//             .catch(err => { throw err });
//     }
// }


class CustomStartStorage extends CustomStartStorageLocal {
  constructor() {
    super();
  }

  async getDefault() {
    const fetchDataUrl = // Should match `customstart.page` or `customstart.local`.
    location.hostname.match('.customstart.') ? "/api/data" : "manifest/defaultData.json";
    return await fetch(fetchDataUrl).then(res => res.json()).then(out => {
      return out;
    }).catch(err => {
      throw err;
    });
  }

}
//# sourceMappingURL=storage.min.js.map
