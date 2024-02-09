import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg07 from "../images/tour-img08.jpg";
import tourImg07 from "../images/tour-img09.jpg";

const tours = [
  {
    id: "01",
    title: "Gateway of India",
    city: "Mumbai",
    distance: 300,
    address: 'Mumbai, Maharashtra',
    price: 99,
    maxGroupSize: 10,
    desc: "Mumbai, also known as Bombay, is a vibrant and bustling city located on the west coast of India. As the financial capital of the country, Mumbai is a melting pot of cultures, traditions, and lifestyles. The city is home to some of the most iconic landmarks in India, such as the Gateway of India, Marine Drive, and the famous Taj Mahal Palace Hotel. Mumbai is also known for its street food, nightlife, and Bollywood film industry. With its fast-paced lifestyle, historical sites, and modern amenities, Mumbai is an exciting destination for tourists and travelers.",
    reviews: [
      {
        name: "Shaily Parmar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Colva Beach",
    city: "Goa",
    distance: 400,
    address: 'Goa',
    price: 99,
    maxGroupSize: 8,
    desc: "Goa is a small state located on the west coast of India, known for its beautiful beaches, rich history, and vibrant culture. With its Portuguese colonial architecture, colorful markets, and delicious cuisine, Goa is a popular tourist destination that attracts visitors from around the world. The state is home to some of the best beaches in India, such as Anjuna, Baga, and Colva, where travelers can enjoy water sports, sunbathing, and relaxing in beach shacks. Goa is also famous for its nightlife, with beach parties, nightclubs, and music festivals taking place throughout the year. Whether you're looking for a relaxing beach vacation or an adventurous getaway, Goa has something to offer for everyone.",
    reviews: [
      {
        name: "Darshana Yadav",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "03",
    title: "Mahabaleshwar",
    city: "Pune",
    distance: 500,
    address: 'Satara, Maharashtra',
    price: 99,
    maxGroupSize: 8,
    desc: "Mahabaleshwar is a picturesque hill station located in the Western Ghats of Maharashtra, India. Known for its stunning views of the surrounding valleys and mountains, Mahabaleshwar is a popular destination for nature lovers and adventure enthusiasts. The hill station is famous for its lush green forests, cascading waterfalls, and scenic viewpoints, such as Arthur's Seat, Kate's Point, and Elephant's Head Point. Mahabaleshwar is also known for its strawberries and offers a variety of activities, including trekking, horse riding, and boating. With its cool climate and serene environment, Mahabaleshwar is an ideal getaway for those looking to escape the hustle and bustle of city life.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "04",
    title: "Mall Road",
    city: "Shimla",
    distance: 500,
    address: 'Himachal Pradesh',
    price: 99,
    maxGroupSize: 8,
    desc: "Shimla is a charming hill station located in the northern state of Himachal Pradesh, India. Surrounded by the snow-capped Himalayan Mountains, Shimla is known for its stunning natural beauty and colonial architecture. The hill station is famous for its pleasant climate, lush green forests, and picturesque valleys, which make it a popular destination for nature lovers and adventure enthusiasts. Shimla is also home to some of the most iconic landmarks in India, such as the Mall Road, Christ Church, and the Viceregal Lodge. Visitors can enjoy a range of activities in Shimla, including trekking, skiing, and paragliding. With its breathtaking landscapes, colonial charm, and vibrant culture, Shimla is a must-visit destination for anyone traveling to India.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Statue Of Unity",
    city: "Kevadiya",
    distance: 500,
    address: 'Kevadiya, Gujarat',
    price: 99,
    maxGroupSize: 8,
    desc: "Kevadiya, located in the state of Gujarat, India, is home to the world's tallest statue, the Statue of Unity. Standing at a height of 182 meters, the statue is a tribute to Sardar Vallabhbhai Patel, one of India's founding fathers and a prominent political leader. The statue is surrounded by a picturesque landscape, including a lake, gardens, and a museum dedicated to Patel's life and achievements. Visitors can take a high-speed elevator to the observation deck, which offers breathtaking views of the surrounding area. Kevadiya is also home to a range of adventure activities, such as river rafting, jungle safari, and camping. With its stunning statue, scenic beauty, and exciting activities, Kevadiya is a must-visit destination for anyone traveling to Gujarat.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Darjeeling",
    city: "Darjeeling",
    distance: 500,
    address: 'West Bengal',
    price: 99,
    maxGroupSize: 8,
    desc: "Darjeeling is a charming hill station located in the northeastern state of West Bengal, India. Known for its tea plantations, stunning views of the Himalayan Mountains, and colonial architecture, Darjeeling is a popular destination for nature lovers and history buffs alike. Visitors can take a ride on the famous Darjeeling Himalayan Railway, a UNESCO World Heritage Site, which offers breathtaking views of the surrounding hills and valleys. The hill station is also famous for its tea industry, and visitors can take a tour of the tea estates and learn about the process of tea-making. Other popular attractions in Darjeeling include the Tiger Hill, which offers stunning sunrise views, and the Padmaja Naidu Himalayan Zoological Park, which is home to endangered species such as the red panda and snow leopard. With its pleasant climate, scenic beauty, and rich cultural heritage, Darjeeling is a must-visit destination for anyone traveling to India.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Rameswaram",
    city: "Ramanathapuram",
    distance: 500,
    address: 'Tamil Nadu',
    price: 99,
    maxGroupSize: 8,
    desc: "Rameswaram is a small island town situated in the southern Indian state of Tamil Nadu. It is a popular pilgrimage destination for Hindus, known for its ancient temples, religious significance, and natural beauty. The town is famous for the Ramanathaswamy Temple, one of the most significant Hindu temples in India. It is believed that Lord Rama, a revered figure in Hindu mythology, built a bridge from Rameswaram to Sri Lanka to rescue his wife Sita from the demon king Ravana. Other popular attractions in Rameswaram include the Agni Theertham, a holy bathing spot in the sea, and the Dhanushkodi Beach, known for its breathtaking sunsets and clear waters. Visitors can also explore the local markets and sample traditional South Indian cuisine. With its rich history, stunning architecture, and spiritual significance, Rameswaram is a must-visit destination for anyone traveling to Tamil Nadu.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "08",
    title: "Srinagar",
    city: "Gulmarg",
    distance: 500,
    address: 'Jammu and Kashmir',
    price: 99,
    maxGroupSize: 8,
    desc: "Gulmarg is a picturesque hill station located in the Indian state of Jammu and Kashmir. Known for its breathtaking natural beauty and adventure sports, Gulmarg is a popular destination for both domestic and international travelers. The town is surrounded by the snow-capped Himalayan Mountains and is home to one of the highest gondola rides in the world, which offers stunning views of the surrounding landscape. Visitors can also enjoy skiing, snowboarding, and other winter sports during the winter season. In the summer months, Gulmarg is a popular destination for hiking and trekking, with many scenic trails that offer stunning views of the mountains and valleys. The town is also famous for its golf course, which is the highest in the world. With its stunning natural beauty, adventure sports, and vibrant culture, Gulmarg is a must-visit destination for anyone traveling to Jammu and Kashmir.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
