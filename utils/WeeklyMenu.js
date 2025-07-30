const weeklyMenu = {
    Sunday: {
        breakfastItems: [
            {
                name: "Dosa Variety (Coconut Chutney + Sambhar)",
                img: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
            },
        ],
        snacksItems: [
            {
                name: "Rolls (Variety)",
                img: "https://imgmediagumlet.lbb.in/media/2021/06/60d1b9c136dc017ece85e202_1624357313171.jpg",
            },
        ],
        lunch: [
            "Bhandara Aloo",
            "Veg Tawa Dry",
            "Puri",
            "Moong Dal Tadka",
            "Plane Rice",
            "Salad (Cucumber, Carrot, Onion)",
            "Fry Papad",
            "Boondi Raita",
        ],
        dinner: [
            "Avial",
            "Lauki + Chana Dal Fry",
            "Chapati",
            "Dal Fry",
            "Rice",
            "Veg Hot and Sour",
            "Curd, Pickle",
            "Papad",
        ],
    },
    Monday: {
        breakfastItems: [
            { name: "Poha (Coconut Chutney)", img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha.jpg" },
            { name: "Mix Veg Paratha (Curd)", img: "https://static1.squarespace.com/static/5d10b2995d7640000181db5d/5d10b72f45897f000114d12c/5f1dc8ef33dc544479241cb9/1672429716226/9BED1EDC-BBCD-46C7-B749-7CBFDA6AEF10.jpeg?format=1500w" },
        ],
        snacksItems: [
            { name: "Pav Bhaji", img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg" },
            { name: "Corn Chat", img: "https://www.cookrepublic.com/wp-content/uploads/2024/02/corn-chaat-masala.jpg" },
        ],
        lunch: [
            "Chana Masala",
            "Cabbage Tomato",
            "Chapati",
            "Dal Tadka",
            "Rice / Jeera Rice",
            "Salad (Cucumber, Carrot, Onion)",
            "Roasted Papad",
            "Curd, Pickle",
        ],
        dinner: [
            "Shahi Paneer",
            "Gajar Methi",
            "Chapati",
            "Dal Panchratna",
            "Rice",
            "Pumpkin + Carrot",
            "Raita",
            "Fry Papad",
        ],
    },
    Tuesday: {
        breakfastItems: [
            {
                name: "Idli / Medu Vada (Coconut Chutney)",
                img: "https://media.istockphoto.com/id/667898496/photo/idli-medu-vada-vadai-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=Nm-fOrmcaRi1RcCGjhHtY1PZFEkM-UyWaUQoAf9EQ1Q=",
            },
            {
                name: "Veg Upma (Sambhar)",
                img: "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2015/04/Vegetable_Upma_1435-11-1024x644-1024x644.jpg?resize=1024%2C644",
            },
        ],
        snacksItems: [
            {
                name: "Vada Pav",
                img: "https://i.ytimg.com/vi/8HQFc64OwUk/maxresdefault.jpg",
            },
            {
                name: "Veg Hakka Noodle",
                img: "https://www.ohmyveg.co.uk/wp-content/uploads/2024/08/hakka-noodles.jpg",
            },
        ],
        lunch: [
            "Veg Shahi Kurma",
            "Bhendi Fry",
            "Chapati",
            "Dal Fry",
            "Rice",
            "Rosted Papad",
            "Curd, Pickle",
            "Salad",
        ],
        dinner: [
            "Veg Jalfrezi",
            "Baigan Bharela",
            "Chapati",
            "Masoor Dal",
            "Rice",
            "Tomato Soup",
            "Curd, Pickle",
            "Fry Papad",
        ],
    },
    Wednesday: {
        breakfastItems: [
            {
                name: "Sabudana Khichdi (Sweet Curd)",
                img: "https://images.news18.com/ibnkhabar/uploads/2023/02/sabudana-khichdi.jpg",
            },
            {
                name: "Besan Chilla (Green Chutney)",
                img: "https://static.toiimg.com/thumb/59387461.cms?imgsize=271650&width=800&height=800",
            },
        ],
        snacksItems: [
            {
                name: "Corn Cutlet (Aloo)",
                img: "https://www.nehascookbook.com/wp-content/uploads/2022/09/Corn-pattice-WS-1-500x375.jpg",
            },
            {
                name: "Bhelpuri",
                img: "https://www.awesomecuisine.com/wp-content/uploads/2007/11/bhel-puri.jpg",
            },
        ],
        lunch: [
            "Veg Kolhapuri",
            "Gobi Mutter Dry",
            "Paratha",
            "Moong Dal Fry",
            "Plane Rice",
            "Salad (Cucumber, Carrot, Onion)",
            "Fryums",
            "Curd, Pickle",
        ],
        dinner: [
            "Methi Malai Matar",
            "Beetroot Poriyal",
            "Chapati",
            "Mix Dal",
            "Rice",
            "Lemon Corriander Soup",
            "Curd, Pickle",
            "Rosted Papad",
        ],
        specialItems: {
            lunch: ["Paneer Biryani", "Chicken Dum Biryani"],
            dinner: ["Egg Tawa Masala", "Paneer Kadhai"],
        },
    },
    Thursday: {
        breakfastItems: [
            {
                name: "Veg Masala Dalia",
                img: "https://darsa-organics.com/cdn/shop/articles/wheat-dalia.jpg?v=1701753594",
            },
            {
                name: "Dosa (Masala / Sada)",
                img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-L1.jpg?resize=600%2C900&ssl=1",
            },
        ],
        snacksItems: [
            {
                name: "Bread Pakoda (Mitha Chutney)",
                img: "https://c.ndtvimg.com/2023-07/iv4mofd_bread-pakoda_625x300_14_July_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
            },
            {
                name: "Dhokla (Green Chutney)",
                img: "https://images.aws.nestle.recipes/original/00df819a83753f67b270520205ee93ad_khaman_dhokla_recipe.jpeg",
            },
        ],
        lunch: [
            "Chole Bhature",
            "Mixed Veg Dry",
            "Bhature",
            "Dal Makhani",
            "Peas Pulao",
            "Salad (Cucumber, Carrot, Onion)",
            "Papad",
            "Raita",
        ],
        dinner: [
            "Veg Hyderabadi Masala",
            "Matki Aloo Dry",
            "Chapati",
            "Moong Dal Fry",
            "Rice",
            "Veg Minestrone",
            "Raita",
            "Papad",
        ],
        specialItems: {
            dinner: ["Chicken Kosha"],
        },
    }, Friday: {
        breakfastItems: [
            {
                name: "Aloo Paneer Paratha (Curd)",
                img: "https://i.ytimg.com/vi/Zs6Lb2d7Ed4/maxresdefault.jpg",
            },
            {
                name: "Misal Pav",
                img: "https://imgmediagumlet.lbb.in/media/2021/03/605ae93c24c90e249ad9b93b_1616570684551.jpg",
            },
        ],
        snacksItems: [
            {
                name: "Rasam Vada",
                img: "https://brassy.in/ammachiidlydosai/wp-content/uploads/2023/01/Rasam-vada.jpg",
            },
            {
                name: "Black Chana Chaat",
                img: "https://www.chefkunalkapur.com/wp-content/uploads/2024/02/YT-2023-Thumbnails-2.png?v=1706977457",
            },
        ],
        lunch: [
            "Rajma Masala",
            "Beans + Coconut Dry",
            "Chapati",
            "Dal Tadka",
            "Plane Rice",
            "Salad (Cucumber, Carrot, Onion)",
            "Rosted Papad",
            "Curd",
        ],
        dinner: [
            "Soyabean Masala",
            "Bhendi Do Payza",
            "Chapati",
            "Dalma",
            "Rice",
            "Veg Manchao",
            "Curd",
            "Papad",
        ],
        specialItems: {
            dinner: ["Fish Curry"],
        },
    },
    Saturday: {
        breakfastItems: [
            {
                name: "Moong Chila (Tomato Chutney)",
                img: "https://www.funfoodfrolic.com/wp-content/uploads/2021/08/Dal-Cheela-Thumbnail.jpg",
            },
            {
                name: "Semiya Upma (Coconut Chutney)",
                img: "https://cookingfromheart.com/wp-content/uploads/2022/05/Vermicelli-Upma-Recipe.jpg",
            },
        ],
        snacksItems: [
            {
                name: "Samosa (Green + Mitha Chutney)",
                img: "https://img-cdn.publive.online/fit-in/1200x675/sanjeev-kapoor/media/post_banners/c78dadf87df1a0d0a08bcb3e9f2267997ed90e6d27e8e8fdc924bac6c2ec3694.JPG",
            },
            {
                name: "Aloo Tikki Chat",
                img: "https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Aloo-Tikki-Chaat61.jpg",
            },
        ],
        lunch: [
            "Paneer Butter Masala",
            "Tendli Dry (South Indian)",
            "Arhar Dal",
            "Plane Rice",
            "Salad (Cucumber, Carrot, Onion)",
            "Fry Papad",
            "Veg Raita",
        ],
        dinner: [
            "Mushroom Handi",
            "Padwai Dry",
            "Chapati",
            "Dal Kolhapur",
            "Rice",
            "Palak Soup",
            "Boondi Raita",
            "Papad",
        ],
        specialItems: {
            dinner: ["Chicken Chilly", "Paneer Chilly"],
        },
    },
};

export default weeklyMenu