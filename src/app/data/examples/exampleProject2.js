export const exampleBuildings = [
  {
    buildingId: 0,
    buildingName: "Budynek 1",
  },
  {
    buildingId: 1,
    buildingName: "Budynek 2",
  },
];

export const exampleFragments = [
  {
    buildingId: 0,
    fragmentId: 0,
    fragmentName: "Klatka A",
  },
  {
    buildingId: 0,
    fragmentId: 1,
    fragmentName: "Klatka B",
  },
  {
    buildingId: 1,
    fragmentId: 2,
    fragmentName: "Klatka A",
  },
  {
    buildingId: 1,
    fragmentId: 3,
    fragmentName: "Klatka B",
  },
  {
    buildingId: 1,
    fragmentId: 4,
    fragmentName: "Klatka C",
  },
];

export const exampleStoreys = [
  {
    fragmentId: 0,
    storeyId: 0,
    storeyName: "0 - Parter",
  },
  {
    fragmentId: 1,
    storeyId: 1,
    storeyName: "0 - Parter",
  },
  {
    fragmentId: 2,
    storeyId: 2,
    storeyName: "0 - Parter",
  },
  {
    fragmentId: 3,
    storeyId: 3,
    storeyName: "0 - Parter",
  },
  {
    fragmentId: 0,
    storeyId: 4,
    storeyName: "1 - Piętro",
  },
];

export const exampleCategory = [
  {
    categoryId: 0,
    categoryName: "Wszystkie",
  },
  {
    categoryId: 1,
    categoryName: "Budownictwo ogólne",
  },
  {
    categoryId: 2,
    categoryName: "Elektryka",
  },
  {
    categoryId: 3,
    categoryName: "Sanitarka",
  },
];

export const exampleWorks = [
  {
    buildingId: [0, 1],
    fragmentId: [0, 1, 2, 3],
    storeyId: [0, 1, 2, 3],
    categoryId: [0, 1],
    workId: 0,
    workName: "Ścianki",
  },
  {
    buildingId: [0, 1],
    fragmentId: [0, 1, 2, 3],
    storeyId: [0, 1, 2, 3],
    categoryId: [0, 1],
    workId: 1,
    workName: "Stolarka",
  },
  {
    buildingId: [1],
    fragmentId: [2, 3],
    storeyId: [2, 3],
    categoryId: [0, 3],
    workId: 2,
    workName: "Kanalizacja",
  },
  {
    buildingId: [0],
    fragmentId: [0, 1],
    storeyId: [0, 1, 4],
    categoryId: [0, 2],
    workId: 3,
    workName: "Instalacja NN",
  },
];
export const exampleWorkDetails = [
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,

    workId: 0,
    workDetailId: 0,
    workDetailProgress: 100,
    workDetailName: "Murarze",
    workDetailImages: [
      {
        imagesData: "25-08-2020",
        images: [
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
        ],
      },
      {
        imagesData: "11-08-2020",
        images: [
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
          "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
        ],
      },
    ],
  },
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,

    workId: 0,
    workDetailId: 1,
    workDetailProgress: 80,
    workDetailName: "Tynkarze",
    workDetailImages: [
      {
        imagesData: "29-08-2020",
        images: [
          "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
          "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
          "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
          "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
        ],
      },
    ],
    
  },
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,

    workId: 1,
    workDetailId: 2,
    workDetailProgress: 90,
    workDetailName: "Okna",
    workDetailImages: [
      {
        imagesData: "12-09-2020",
        images: [
          "https://fixly.pl/blog/wp-content/uploads/2018/12/monta%C5%BC-okien.jpg",
          "https://fixly.pl/blog/wp-content/uploads/2018/12/monta%C5%BC-okien.jpg",
        ],
      },
    ],
  },
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,

    workId: 1,
    workDetailId: 3,
    workDetailProgress: 50,
    workDetailName: "Drzwi",
    workDetailImages: [
      {
        imagesData: "21-09-2020",
        images: [
          "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
          "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
          "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
          "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
        ],
      },
    ],
  },
  {
    buildingId: 1,
    fragmentId: 2,
    storeyId: 2,

    workId: 2,
    workDetailId: 4,
    workDetailProgress: 10,
    workDetailName: "Instalacje",
    workDetailImages: [
      {
        imagesData: null,
        images: [],
      },
    ],
  },
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,
    workDetailId: 0,

    workId: 3,
    workDetailId: 5,
    workDetailProgress: 15,
    workDetailName: "Okablowanie w ścianach",
    workDetailImages: [
      {
        imagesData: null,
        images: [],
      },
    ],
  },
];

// export const exampleWorkProgress = [
//   {
//     buildingId: 0,
//     fragmentId: 0,
//     storeyId: 0,
//     workDetailId: 0,

//     workProgressId: 0,
//     // workProgress: 100,
//     workDetailImages: [
//       {
//         imagesData: "25-08-2020",
//         images: [
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//         ],
//       },
//       {
//         imagesData: "11-08-2020",
//         images: [
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//           "https://s3.egospodarka.pl/grafika2/murarz/Murarz-191277-200x133crop.jpg",
//         ],
//       },
//     ],
//   },
//   {
//     buildingId: 0,
//     fragmentId: 0,
//     storeyId: 0,
//     workDetailId: 1,

//     workProgressId: 1,
//     // workProgress: 80,
//     workDetailImages: [
//       {
//         imagesData: "29-08-2020",
//         images: [
//           "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
//           "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
//           "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
//           "http://www.r-tynk.pl/_include/img/profile/profile-02.jpg",
//         ],
//       },
//     ],
//   },
//   {
//     buildingId: 1,
//     fragmentId: 2,
//     storeyId: 2,
//     workDetailId: 2,

//     workProgressId: 2,
//     // workProgress: 90,
//     workDetailImages: [
//       {
//         imagesData: "12-09-2020",
//         images: [
//           "https://fixly.pl/blog/wp-content/uploads/2018/12/monta%C5%BC-okien.jpg",
//           "https://fixly.pl/blog/wp-content/uploads/2018/12/monta%C5%BC-okien.jpg",
//         ],
//       },
//     ],
//   },
//   {
//     buildingId: 1,
//     fragmentId: 2,
//     storeyId: 2,
//     workDetailId: 3,

//     workProgressId: 3,
//     // workProgress: 50,
//     workDetailImages: [
//       {
//         imagesData: "21-09-2020",
//         images: [
//           "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
//           "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
//           "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
//           "http://www.drzwivasco.pl/assets/images/boxy/oscieznice_tlo.jpg",
//         ],
//       },
//     ],
//   },
// ];
