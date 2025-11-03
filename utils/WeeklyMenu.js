const weeklyMenu = {
    Monday: {
        breakfastItems: [
            {
                name: "Puri Bhaji", img: "https://paattiskitchen.com/wp-content/uploads/2023/01/kmc_20230129_200720-1.jpg"
            },
            {
                name: "Veg Upma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62An25qATwuE83QS6U4uid1_fK5kigq9gMQ&s"
            },
        ],
        snacksItems: [
            {
                name: "Veg Cutlet", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/cutlet-recipe-veg-cutlet.jpg"
            },
            {
                name: "Dahi Vada", img: "https://ministryofcurry.com/wp-content/uploads/2016/08/Dahi-Vada-5.jpg"
            },
        ],
        lunch: [
            "Paneer Tikka Masala",
            "Cabbage Peas Dry",
            "Chapati",
            "Dal Fry",
            "Plain Rice",
            "Salad",
            "Roasted Papad",
            "Curd",
        ],
        dinner: [
            "Sev Bhaji",
            "Gajar Matar Methi",
            "Chapati",
            "Dal Panchratna",
            "Plain Rice",
            "Salad",
            "Curd",
            "Roasted Papad",
        ],
        specialItems: {
            dinner: ["Paneer Butter Masala", "Egg Biryani"],
        },
    },

    Tuesday: {
        breakfastItems: [
            {
                name: "Onion batata poha", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0WfqSYRKgWj67l7Ce4oYqTZxM7oPPUorXQ&s"
            },
            { name: "Ragi Uttapam", img: "https://i.ytimg.com/vi/YQit90TwJKM/maxresdefault.jpg" },
        ],
        snacksItems: [
            { name: "Pav Bhaji", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76z-bgTipPf-E_XzcE3E4h_4eTc8zk1TSSg&s" },
            { name: "Chole Chaat", img: "https://bhojmasale.com/cdn/shop/articles/chole-chaat-recipe-588510_1024x1024.jpg?v=1739153099" },
        ],
        lunch: [
            "Chana Masala",
            "Gobhi Achaari",
            "Chapati",
            "Dal Tadka",
            "Plain Rice",
            "Salad",
            "Roasted Papad",
            "Curd",
        ],
        dinner: [
            "Aloo Matar",
            "Lauki Chana Dal",
            "Paratha",
            "Masoor Dal",
            "Tomato Rice",
            "Salad",
            "Curd",
            "Roasted Papad",
        ],
        specialItems: [],
    },

    Wednesday: {
        breakfastItems: [
            { name: "Aloo Paneer Paratha", img: "https://www.whiskaffair.com/wp-content/uploads/2022/07/Aloo-Paneer-Paratha-2-3.jpg" },
            { name: "Idli / Medu Vada", img: "https://i.pinimg.com/474x/89/3d/8d/893d8d574c1506d17b2f1cb565453797.jpg", },
        ],
        snacksItems: [
            { name: "Moong Dal Bhajiya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GxcC6MD6BEEa-Z8q-Mtvf_nYEQZ1Qft-DA&s" },
            { name: "Veg Hakka Noodles", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg" },
        ],
        lunch: [
            "Rajma Masala",
            "Bhendi Do Pyaza",
            "Chapati",
            "Black Masoor Dal",
            "Plain Rice",
            "Salad",
            "Roasted Papad",
            "Veg Raita",
        ],
        dinner: [
            "Paneer Kadhai",
            "Dry Karela Pyaz",
            "Chapati",
            "Mix Dal",
            "Plain Rice",
            "Salad",
            "Curd",
            "Roasted Papad",
        ],
        specialItems: {
            lunch: ["Paneer Biryani", "Chicken Biryani"],
        },
    },

    Thursday: {
        breakfastItems: [
            { name: "Onion Uttapam", img: "https://rakskitchen.net/wp-content/uploads/2013/03/8527219504_0ddb2cde6f_z-500x500.jpg" },
            { name: "Sevai Upma", img: "https://shwetainthekitchen.com/wp-content/uploads/2021/05/Vermicelli-upma.jpg", },
        ],
        snacksItems: [
            { name: "Bread Pakoda", img: "https://static.toiimg.com/thumb/84629641.cms?imgsize=326457&width=800&height=800" },
            { name: "Dahi Papdi Chat", img: "https://www.whiskaffair.com/wp-content/uploads/2021/03/Dahi-Papdi-Chaat-2-3.jpg" },
        ],
        lunch: [
            "Kashmiri Aloo Dum",
            "Veg Tawa Dry",
            "Chapati",
            "Moong Dal Tadka",
            "Plain Rice",
            "Salad",
            "Roasted Papad",
            "Curd",
        ],
        dinner: [
            "Chana Masala",
            "Parwal / Kundru Dry",
            "Chapati",
            "Veg Moong Dal",
            "Tomato Rice",
            "Salad",
            "Curd",
            "Roasted Papad",
        ],
        specialItems: {
            dinner: ["Fish Curry", "Egg Tawa Masala"],
        },
    },

    Friday: {
        breakfastItems: [
            { name: "Misal Pav", img: "https://www.ohmyveg.co.uk/wp-content/uploads/2023/12/Misal-Pav-2-2-e1722869218662.jpg" },
            { name: "Aloo Onion Paratha", img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334319593/GI/HR/UX/96478487/aloo-pyaz-paratha.jpg" },
        ],
        snacksItems: [
            { name: "Masala Idli", img: "https://rashmisweets.in/wp-content/uploads/2024/07/Mini-Masala-Idli.png" },
            {
                name: "Samosa", img: "https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/post_banners/c78dadf87df1a0d0a08bcb3e9f2267997ed90e6d27e8e8fdc924bac6c2ec3694.JPG"
            },
        ],
        lunch: [
            "Creamy Garlic Mushroom",
            "Aloo Barabati",
            "Chapati",
            "Dal Arhar",
            "Plain Rice",
            "Salad",
            "Roasted Papad",
            "Curd",
        ],
        dinner: [
            "Lauki Kofta",
            "Aloo Soyabean Dry",
            "Chapati",
            "Dal Chana Fry",
            "Fried Rice",
            "Salad",
            "Curd",
            "Roasted Papad",
        ],
        specialItems: {
            dinner: ["Chicken Kosha", "Paneer Bhurji"],
        },
    },

    Saturday: {
        breakfastItems: [
            { name: "Sabudana Khichdi", img: "https://images.news18.com/ibnkhabar/uploads/2023/02/sabudana-khichdi.jpg" },
            {
                name: "Moong dal chilla", img: "https://www.funfoodfrolic.com/wp-content/uploads/2021/08/Dal-Cheela-Thumbnail.jpg"
            },
        ],
        snacksItems: [
            { name: "Bhelpuri", img: "https://vegecravings.com/wp-content/uploads/2018/06/Bhel-Puri-Recipe-Step-By-Step-Instructions.jpg", },
            { name: "Aloo tikki Chaat", img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/07/aloo-tikki-chaat-featured.jpg" },
        ],
        lunch: [
            "Amritsari Chole",
            "Aloo Chatpata",
            "Bhature",
            "Dal Fry",
            "Peas Pulao",
            "Salad",
            "Roasted Papad",
            "Boondi Raita",
        ],
        dinner: [
            "Soyabean Chilli",
            "Aloo Palak Saag",
            "Chapati",
            "Dal Kolhapuri",
            "Fried Rice",
            "Salad",
            "Curd",
            "Roasted Papad",
        ],
        specialItems: [],
    },

    Sunday: {
        breakfastItems: [
            {
                name: "Dosa (Cheese, Schezwan, Butter, Gajar & Beet)",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHyYUdVEjhu_aPxeuNTThFWW9g2m6w02laA&s"
            },
            {
                name: "Masala / Simple Dosa",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACh1yWbIwNiWJOZ-8lkt9oGkf5cdMK4DV8Q&s"
            },
        ],
        snacksItems: [
            { name: "White Sauce Pasta", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/04/white-sauce-pasta.jpg" },
            { name: "Tawa Pulao", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/tawa-pulao-recipe.jpg" },
        ],
        lunch: [
            "Besan Kadhi Pakoda",
            "Kurkuri Bhindi",
            "Chapati",
            "Masoor Dal",
            "Jeera Rice",
            "Salad",
            "Roasted Papad",
            "Boondi Raita",
        ],
        dinner: [
            "Mixed Veg",
            "Aloo Tamatar Bharta",
            "Chapati",
            "Moong Dal Fry",
            "Dal Khichdi",
            "Salad",
            "Curd",
            "Fryums",
        ],
        specialItems: {
            lunch: ["Butter Chicken", "Paneer 65", "Laccha Paratha"],
        },
    },
};

export default weeklyMenu;

