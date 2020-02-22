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

      for (let i = array.length - n;  i < array.length; i++) {
         newArray.push(array[i]);
      }

      return newArray;
    },

    flatten: function(array, shallow = false, newArray = []) {
        if(!Array.isArray(array)) {
          return newArray.push(array);
        }

        if(shallow) {
          for(let value of array) {
            if(Array.isArray(value)) {
              for (let i = 0; i < value.length; i++) {
                newArray.push(value[i]);
              } 
            } else {
              newArray.push(value);
            }
          }
        } else {
            for (let value of array) {
              this.flatten(value, false, newArray);
            }
        }
        return newArray;

    }

  }
})()

fi.libraryMethod()
