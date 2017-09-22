interface SomeObj {
  key1: 'Coucou';
  key2: 'Test';
}

const doSomthingWithKeysOfObject = <T>(keyList: Array<keyof T>) => {
  keyList.forEach(key => {
    console.log(key);
  });
};

doSomthingWithKeysOfObject<SomeObj>(['key1', 'key3']);
