import profileOwner from "../images/profile-owner.jpg";
import user from "../images/user.jpg";

const posts = [
  {
    id: 1,
    name: "Ліс",
    image: require("../images/forest.jpg"),
    place: "Ivano-Frankivsk Region",
    location: { latitude: 48.7288129, longitude: 24.5381868 },
    likes: 69,
    comments: [],
  },
  {
    id: 2,
    name: "Захід на Чорному морі",
    image: require("../images/sunset.jpg"),
    place: "Ukraine",
    location: { latitude: 46.5514422, longitude: 30.8373829 },
    likes: 0,
    comments: [
      {
        id: "id-1",
        avatar: user,
        message:
          "Wow! This is such an amazing photo. I love the colors and composition!",
        date: "01 січня, 2022 | 10:10",
        isPostOwner: false,
      },
      {
        id: "id-2",
        avatar: profileOwner,
        message:
          "I was there last year! It's one of the most beautiful places I've ever seen.",
        date: "05 червня, 2022 | 17:29",
        isPostOwner: true,
      },
      {
        id: "id-3",
        avatar: user,
        message:
          "Absolutely breathtaking! I wish I could take photos like this.",
        date: "17 липня, 2023 | 10:30",
        isPostOwner: false,
      },
    ],
  },
  {
    id: 3,
    name: "Старий будиночок у Венеції",
    image: require("../images/house.jpg"),
    place: "Italy",
    location: { latitude: 45.4271302, longitude: 12.3414672 },
    likes: 38,
    comments: [
      {
        id: "id-1",
        avatar: user,
        message:
          "This looks like a scene from a fairytale. I'm in love with it!",
        date: "03 жовтня, 2021 | 09:40",
        isPostOwner: false,
      },
      {
        id: "id-2",
        avatar: profileOwner,
        message:
          "I visited this place a few years ago. Memories came rushing back when I saw your photo.",
        date: "09 вересня, 2022 | 16:11",
        isPostOwner: true,
      },
      {
        id: "id-3",
        avatar: user,
        message:
          "The lighting in this photo is just perfect. How do you achieve that?",
        date: "17 лютого, 2023 | 14:40",
        isPostOwner: false,
      },
      {
        id: "id-4",
        avatar: profileOwner,
        message:
          "I always love seeing photos of this beautiful place. Great shot!",
        date: "18 серпня, 2023 | 08:40",
        isPostOwner: true,
      },
      {
        id: "id-5",
        avatar: user,
        message: "I wish I could live in a place like this. It's like a dream.",
        date: "20 травня, 2021 | 12:23",
        isPostOwner: false,
      },
      {
        id: "id-6",
        avatar: profileOwner,
        message:
          "Such a charming little house. I could stare at this photo all day.",
        date: "27 травня, 2022 | 11:25",
        isPostOwner: true,
      },
    ],
  },
];

export default posts;