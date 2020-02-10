
// function getRandomArray(numItems) {
//     // Create random array of objects
//     let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let data = [];
//     for(var i = 0; i < numItems; i++) {
//       data.push({
//         label: names[i],
//         value: Math.round(20 + 80 * Math.random())
//       });
//     }
//     return data;
//   }
  
//   function getRandomDateArray(numItems) {
//     // Create random array of objects (with date)
//     let data = [];
//     let baseTime = new Date('2018-05-01T00:00:00').getTime();
//     let dayMs = 24 * 60 * 60 * 1000;
//     for(var i = 0; i < numItems; i++) {
//       data.push({
//         time: new Date(baseTime + i * dayMs),
//         value: Math.round(20 + 80 * Math.random())
//       });
//     }
//     return data;
//   }

function lookData() {
    let dataAbuDah = 
    [
        {
            "label": "العدد الاجمالي للملفات",
            "value": 60,
        },
        {
            "label": "اجمالي الملفات الغير متداولة",
            "value": 10,
        },
        {
            "label": "اجمالي الملفات المتداولة" ,
            "value": 50,
        },
    ]
    return dataAbuDah;
  }
  export default lookData;