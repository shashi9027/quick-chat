 
 export const images ={
 avatar_icon : '/assets/avatar_icon.png',
 gallery_icon : '/assets/gallery_icon.svg',
 help_icon : '/assets/help_icon.png',
 logo_icon : '/assets/logo_icon.svg',
 logo_big : '/assets/logo_big.svg',
 logo : '/assets/logo.png',
 profile_richard : '/assets/profile_richard.png',
 profile_alison : '/assets/profile_alison.png',
 profile_enrique : '/assets/profile_enrique.png',
 profile_marco : '/assets/profile_marco.png',
 profile_martin : '/assets/profile_martin.png',
 search_icon : '/assets/search_icon.png',
 send_button : '/assets/send_button.svg',
 menu_icon : '/assets/menu_icon.png',
 arrow_icon : '/assets/arrow_icon.png',
 code : '/assets/code.svg',
 bgImage : '/assets/bgImage.svg',
 pic1 : '/assets/pic1.png',
 pic2 : '/assets/pic2.png',
 pic3 : '/assets/pic3.png',
 pic4 : '/assets/pic4.png',
 img1 : '/assets/img1.jpg',
 img2 : '/assets/img2.jpg',
 }





export const imagesDummyData = [images.pic1, images.pic2, images.pic3, images.pic4]

export const userDummyData = [
    {
        "_id": "680f50aaf10f3cd28382ecf2",
        "email": "test1@greatstack.dev",
        "fullName": "Alison Martin",
        "profilePic": images.profile_alison,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f50e4f10f3cd28382ecf9",
        "email": "test2@greatstack.dev",
        "fullName": "Martin Johnson",
        "profilePic": images.profile_martin,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f510af10f3cd28382ed01",
        "email": "test3@greatstack.dev",
        "fullName": "Enrique Martinez",
        "profilePic": images.profile_enrique,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f5137f10f3cd28382ed10",
        "email": "test4@greatstack.dev",
        "fullName": "Marco Jones",
        "profilePic": images.profile_marco,
        "bio": "Hi Everyone, I am Using QuickChat",
    },
    {
        "_id": "680f516cf10f3cd28382ed11",
        "email": "test5@greatstack.dev",
        "fullName": "Richard Smith",
        "profilePic": images.profile_richard,
        "bio": "Hi Everyone, I am Using QuickChat",
    }
]

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "image": images.img1,
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "image": images.img2,
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]
