 export const data = [
    {
        id:1,
        name:"OqtepaLavash",
        adrs:"oqtepa",
        foods:[
            {
                id:01,
                name:"Burger",
                price:100,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            },
            {
                id:02,
                name:"Pitsa",
                price:200,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",

            },
            {
                id:03,
                name:"Sandwich",
                price:140,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            }
        ]

    },
    {
        id:2,
        name:"Evos",
        adrs:"Evos",
        foods:[
            {
                id:01,
                name:"Burger",
                price:100,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            },
            {
                id:02,
                name:"Pitsa",
                price:200,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",

            },
            {
                id:03,
                name:"Sandwich",
                price:140,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            }
        ]

    },
    {
        id:3,
        name:"DurujbaBurger",
        adrs:"Durujba",
        foods:[
            {
                id:01,
                name:"Burger",
                price:100,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            },
            {
                id:02,
                name:"Pitsa",
                price:200,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",

            },
            {
                id:03,
                name:"Sandwich",
                price:140,
                img:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
                desc:"Burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
            }
        ]

    }
]
// const nameAndFoods = (data) => {
//     let returnData = [];

//     data.forEach((el)=> {
//         let nameAndfoodsObj = {
//             name:"",
//             foods: [],
           
//         }
//         nameAndfoodsObj.name = el.name;
        
//         el.foods.forEach(food=> {
//             let obj = {
//                 name:food.name,
//                 price:food.price
//             }
//                 nameAndfoodsObj.foods.push(obj);
//         })
      
//         returnData.push(nameAndfoodsObj)
//     })
//     return returnData

// }
 const nameAndfoofs = (data) => {
      let returnData = [];

      data.forEach((el) => {
          let nameAndfoodsobj = {
              name:"",
              foods: [],
          }
          nameAndfoodsobj.name = el.name;

          el.foods.forEach(food => {
              let obj = {
                  name:food.name,
                  price:food.price
              }
              nameAndfoodsobj.foods.push(obj);
          })
          returnData.push(nameAndfoodsobj)
      })
      return returnData
 }

// // const nameAndFoods = (data) => {
// //     let returnData = [];
// //     let newData = data.map((el) => ({
// //       name: el.name,
// //       foods: el.foods.map(({ name,price }) => ({name,price})),
// //     }));
// //     returnData.push(newData);
// //     return returnData;
// //   };
// console.log(nameAndFoods(data));