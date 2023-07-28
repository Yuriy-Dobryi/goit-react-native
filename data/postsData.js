const posts = [
  {
    id: 1,
    name: "Ліс",
    place: "Ivano-Frankivsk Region",
    location: { latitude: 49.2714836, longitude: 23.8227551 },
    comments: [],
    likes: 69,
    image: require("../images/forest.jpg"),
  },
  {
    id: 2,
    name: "Захід на Чорному морі",
    place: "Ukraine",
    location: { latitude: 44.5017086, longitude: 34.118931 },
    comments: [
      {
        id: "id-1",
        avatar: require("../images/user-photo-2.jpg"),
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        id: "id-2",
        avatar: require("../images/user-photo.jpg"),
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:40",
      },
      {
        id: "id-3",
        avatar: require("../images/user-photo-2.jpg"),
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 10:00",
      },
    ],
    likes: 0,
    image: require("../images/sunset.jpg"),
  },
  {
    id: 3,
    name: "Старий будиночок у Венеції",
    place: "Italy",
    location: { latitude: 45.4040691, longitude: 12.0576662 },
    comments: [
      {
        id: "id-1",
        avatar: require("../images/user-photo-2.jpg"),
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        id: "id-2",
        avatar: require("../images/user-photo.jpg"),
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:40",
      },
      {
        id: "id-3",
        avatar: require("../images/user-photo-2.jpg"),
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 10:00",
      },
      {
        id: "id-4",
        avatar: require("../images/user-photo.jpg"),
        text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
        date: "09 червня, 2020 | 09:40",
      },
      {
        id: "id-5",
        avatar: require("../images/user-photo-2.jpg"),
        text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
        date: "09 червня, 2020 | 08:40",
      },
      {
        id: "id-6",
        avatar: require("../images/user-photo-2.jpg"),
        text: "Thank you! That was very helpful!",
        date: "09 червня, 2020 | 10:00",
      },
    ],
    likes: 38,
    image: require("../images/house.jpg"),
  },
];

export default posts;