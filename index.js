const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
          for (const i in collection) {
            if (collection.hasOwnProperty(i)) {
               callback(collection[i]);
            }
          }
          return collection;
    },

    map: function(collection, callback) {
        let newCollection = [];
        for(const i in collection) {
          let element = callback(collection[i]);
          {newCollection.push(element)};
        }
        return newCollection;
    },

    reduce: function(collection, callback, acc) {
        // let result = acc;

        // for (let i = 0; i < collection.length; i++) {
        //   result += callback(acc, collection[i], collection);
        // }

        // return result;

        for (const i in collection) {
          if(acc === undefined) acc = collection[i];
          else acc = callback(acc, collection[i], collection);
        }

        return acc;
    },

    functions: function() {
        
    },

    find: function(collection, predicate) {
      if(predicate == undefined) return undefined;

      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
          return collection[i];
        }
      }

      return undefined;
    },

    filter: function(collection, predicate) {
      let newArray = [];
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
          newArray.push(collection[i]);
        }
      }

      return newArray;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n) {
      let newArray = [];

      if (n === undefined) return array[0];

      for (let i = 0; i < n; i++) {
         newArray.push(array[i]);
      }

      return newArray;
    },

    last: function(array, n) {
      let newArray = [];

      if (n === undefined) return array[array.length - 1];

      for (let i = array.length - n; i < array.length; i++) {
        newArray.push(array[i]);
      }

      return newArray;
    },

    compact: function(array) {
      let newArray = [];

      for (let i = 0; i < array.length; i++) {
        if(array[i]) newArray.push(array[i]);
      }

      return newArray;
    },
    
    sortBy: function(array, callback) {
        let clone = [...array];
        return clone.sort((a, b) => callback(a) > callback(b) ? 1 : -1);
    },

    uniq: function(array, isSorted = false, callback = undefined) {
      let newArray = [array[0]];
      
      if(!isSorted) {
        for (let i in array) {
          if(!newArray.includes(array[i])) {
            newArray.push(array[i]);
          }
        }
        return newArray;
      }
     
    },

    flatten: function(array, shallow = false, newArray = []) {
      if (!Array.isArray(array)) {
          return newArray.push(array)
      }
      if (shallow) {
          for (let value of array) {
              if (Array.isArray(value)) {
                  for (let i = 0; i < value.length; i++) {
                      newArray.push(value[i])
                  }
              } else {
                  newArray.push(value)
              }
          }
      } else {
          for (let value of array) {
              this.flatten(value, false, newArray)
          }
      }
      return newArray
  },

  keys: function(object) {
    let newArray = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        newArray.push(key);
      }
    }
    return newArray;
  },

  values: function(object) {
    let newArray = [];
    
    for (let i in object) {
      newArray.push(object[i]);
    }

    return newArray;
  },

  functions: function(object) {
      let newArray = [];

     for(let element in obj){
       if(typeof obj[element] == 'function'){
        newArray.push(element);
      }
     }
     return newArray;

  }

    
  }
})()

fi.libraryMethod()
