import {
    UilEstate,
    UilClipboard,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilClipboardAlt,

} from '@iconscout/react-unicons';

import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboard,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround: "#008B8B",
            boxShadow: "0px 10px 20px 0px #008B8B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Revenue",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "Has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "Has ordered Apple smart watch 2500mh battery.",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Elon Musk",
        noti: "Has ordered Apple smart watch 2500mh battery.",
        time: "1 hours ago",
    },
]