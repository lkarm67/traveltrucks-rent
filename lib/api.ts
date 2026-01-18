import axios from "axios";

export type Camper = {
    "total": 23,
  "items": [
    {
      "id": "1",
      "name": "Road Bear C 23-25",
      "price": 10000,
      "rating": 4.5,
      "location": "Ukraine, Kyiv",
      "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
      "form": "alcove",
      "length": "7.3m",
      "width": "2.65m",
      "height": "3.65m",
      "tank": "208l",
      "consumption": "30l/100km",
      "transmission": "automatic",
      "engine": "diesel",
      "AC": true,
      "bathroom": true,
      "kitchen": false,
      "TV": true,
      "radio": true,
      "refrigerator": false,
      "microwave": true,
      "gas": false,
      "water": true,
      "gallery": [
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
        },
        {
          "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
          "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
        }
      ],
      "reviews": [
        {
          "reviewer_name": string,
          "reviewer_rating": number,
          "comment": string
        }
      ]
    },
}