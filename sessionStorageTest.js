function sessionStorageTest() {
	'use strict';

	var storageItemCount = 0;

   //create 500 char string
   var OneKBString = (function getOneKBString() {
      var kbStr = '';
      for (let i=0; i < 500; i++) {
         kbStr += 'a';
      }
      return kbStr;
   })();

   try {
      while (storageItemCount < 50000) {   //not going to be > 50MB
         let newKeyName = storageItemCount; //so we don't overwrite key names
         sessionStorage.setItem(newKeyName, OneKBString);
         storageItemCount++;
      }
   } catch (ex) { //fails when storage is full
      let MBTotal = storageItemCount/1000 //convert KB count to MB
      return MBTotal;
   }
}