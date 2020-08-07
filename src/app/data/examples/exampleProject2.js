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
];
export const exampleWorkDetails = [
  {
    workId: 0,
    workDetailId: 0,
    workDetailName: "Murarze",
  },
  {
    workId: 0,
    workDetailId: 1,
    workDetailName: "Tynkarze",
  },
  {
    workId: 1,
    workDetailId: 2,
    workDetailName: "Okna",
  },
  {
    workId: 1,
    workDetailId: 3,
    workDetailName: "Drzwi",
  },
];

export const exampleWorkProgress = [
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,
    workDetailId: 0,

    workProgressId: 0,
    workProgress: 100,
    workDetailImages: [
      {
        imagesData: "25-08-2020",
        images: [
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
        ],
      },
    ],
  },
  {
    buildingId: 0,
    fragmentId: 0,
    storeyId: 0,
    workDetailId: 1,

    workProgressId: 1,
    workProgress: 80,
    workDetailImages: [
      {
        imagesData: "29-08-2020",
        images: [
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
        ],
      },
    ],
  },
  {
    buildingId: 1,
    fragmentId: 2,
    storeyId: 2,
    workDetailId: 0,

    workProgressId: 2,
    workProgress: 90,
    workDetailImages: [
      {
        imagesData: "12-09-2020",
        images: [
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
        ],
      },
    ],
  },
  {
    buildingId: 1,
    fragmentId: 2,
    storeyId: 2,
    workDetailId: 1,

    workProgressId: 3,
    workProgress: 50,
    workDetailImages: [
      {
        imagesData: "21-09-2020",
        images: [
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
          "https://lh3.googleusercontent.com/proxy/SfP7sxPvUGo386tjelnKp7TO5MVV3RerYl-P4l22yZLdtU1xdTrks2kdYVaBaX7RVha2-PHfAKepS-l6gtUO8Dak1x8eTny6CmHfnzyPkpBTrzkW90blI2Y5k7m4_T8PGl32UHj4g6joib7p-aLwhO9TGO3e9SRowFeeDh4",
        ],
      },
    ],
  },
];
