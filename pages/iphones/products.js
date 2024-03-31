

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: "From $1199",
        images: [
            "https://mobilworld.by/upload/iblock/9c5/9c566a95b3fd15454e27cd7a21c8ca02.png",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15promax-digitalmat-gallery-1-202309_GEO_US?wid=364&hei=333&fmt=png-alpha&.v=1693346851426",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15promax-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081545196",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15promax-digitalmat-gallery-4-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081545196"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "Strong and light titanium design with Action button — a fast track to your favorite feature"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "USB-C connector with USB 3 for up to 20x faster transfer speeds footnote ² and new pro workflows"
            },
            {
                icon: "gg-camera",
                value: "48MP Main camera for super-high-resolution photos and 3x Telephoto camera"
            },
            {
                icon: "gg-smartphone-chip",
                value: "A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming"
            }
        ],
        colors: [
            "#a7a6a3",
            "#cfcfcd",
            "#415C71",
            "#59595c"
        ],
        
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: "From $999",
        images: [
            "https://my-store.by/wp-content/uploads/2023/09/Group-80.png",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_US?wid=364&hei=333&fmt=png-alpha&.v=1693346851451",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081541434",
            "https://mobilworld.by/upload/iblock/c7e/c7efdccd3f82b1c92d84181ddede5572.png"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "Strong and light titanium design with Action button — a fast track to your favorite feature"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "USB-C connector with USB 3 for up to 20x faster transfer speeds footnote ² and new pro workflows"
            },
            {
                icon: "gg-camera",
                value: "48MP Main camera for super-high-resolution photos and 3x Telephoto camera"
            },
            {
                icon: "gg-smartphone-chip",
                value: "A17 Pro chip delivers a massive leap in graphics performance, transforming mobile gaming"
            }
        ],
        colors: [
            "#a7a6a3",
            "#cfcfcd",
            "#415C71",
            "#59595c"
        ],
    },
    {
        id: 3,
        name: "iPhone 15",
        price: "From $899",
        images: [
            "https://mobilworld.by/upload/iblock/bda/bda42dff2feebdcadb7dd7ee5eac6ddd.png",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-2-202309?wid=364&hei=333&fmt=png-alpha&.v=1693011169058",
            "https://mobilecare.sk/wp-content/uploads/2023/09/apple-iphone-15-plus-512-gb-modra-mu1p3sx-a-466631.jpg",
            "https://storage.googleapis.com/stateless-creative-it-ie/2023/11/b49c3de0-finish_iphone__bvnqblbns6r6_large_2x.jpg",
        ],
        parametrs: [
            {
                icon: "gg-arrows-expand-right",
                value: "6.1-inch durable color-infused glass and aluminum design footnote ◊ with Ceramic Shield front"
            },
            {
                icon: "gg-toolbar-top",
                value: "Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else"
            },
            {
                icon: "gg-camera",
                value: "48MP Main camera with 2x Telephoto captures breathtaking detail up close or far away"
            },
            {
                icon: "gg-smartphone-chip",
                value: "A16 Bionic powers computational photography and smooth gaming performance with great efficiency for all-day battery life"
            }
        ],
        colors: [
            "#5a5a5a",
            "#DBFFFE",
            "#DBFFDF",
            "#FFF9DB",
            "#FEF6FD",
        ],
    },
    {
        id: 4,
        name: "iPhone 14 Plus",
        price: "From $799",
        images: [
            "https://manyphone.ru/upload/iblock/aa3/zn6myzavb1av890ryplr4zhw6mao6ccm.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14plus-digitalmat-gallery-2-202209?wid=364&hei=333&fmt=png-alpha&.v=1662055813701",
            "https://media.studio7thailand.com/93310/iPhone_14_Plus_1-square_medium.jpg",
            "https://focus.independent.ie/thumbor/feKL5Yaw-o5rW_P2sXP09ehaxVs=/0x24:2193x1486/960x640/prod-mh-ireland/0a806fd0-a9fb-11ed-bc1e-0210609a3fe2.jpeg",
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "6.7-inch durable design footnote 1 with Ceramic Shield and water and dust resistance"
            },
            {
                icon: "gg-battery-empty",
                value: "All-day battery life with up to 26 hours of video playback²"
            },
            {
                icon: "gg-camera",
                value: "A Pro-level Main camera and advanced image processing for sensational shots in all kinds of light"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The A15 Bionic processor (the same in iPhone 13 Pro)"
            }
        ],
        colors: [
            "#FFFFFF",
            "#00021F",
            "#B5C9E3",
            "#F1EBFF",
            "#FDFF7A"
        ],
    },
    {
        id: 5,
        name: "iPhone 13",
        price: "From $599",
        images: [
            "https://mobillife.by/images/virtuemart/product/30059037b.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13-digitalmat-gallery-1-202203_GEO_US?wid=364&hei=333&fmt=png-alpha&.v=1677662648569",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13-digitalmat-gallery-2-202203?wid=364&hei=333&fmt=png-alpha&.v=1644988764167",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13-digitalmat-gallery-4-202203?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1644988764203"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "Ceramic Shield, and water and dust resistance footnote²"
            },
            {
                icon: "gg-dice-5",
                value: "5G for superfast downloads and high-quality streaming"
            },
            {
                icon: "gg-camera",
                value: "Dual-camera system for incredible low-light photos and videos"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The A15 Bionic processor with 4-core GPU"
            }
        ],
        colors: [
            "#F8E3F2",
            "#FFFFFF",
            "#158ABC",
            "#001D29",
            "#00290C"
        ],
    },
    {
        id: 6,
        name: "iPhone SE",
        price: "From $429",
        images: [
            "https://app-minsk.by/files/items/4440/icon_480x390.png",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphonese-digitalmat-gallery-1-202203?wid=364&hei=333&fmt=png-alpha&.v=1644987579596",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphonese-digitalmat-gallery-2-202203?wid=364&hei=333&fmt=jpeg&qlt=95&.v=1646075827246",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphonese-digitalmat-gallery-4-202203?wid=364&hei=333&fmt=png-alpha&.v=1644987579760"
        ],
        parametrs: [
            {
                icon: "gg-arrows-expand-right",
                value: "4.7-inch Retina HD display footnote that’s bright, colorful, and sharp"
            },
            {
                icon: "gg-live-photo",
                value: "Home button with Touch ID — securely unlock, sign in to apps, and use Apple Pay"
            },
            {
                icon: "gg-camera",
                value: "Smarter camera makes automatic adjustments so faces, places, everything looks fabulous"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The A15 Bionic processor (the same in iPhone 13)"
            }
        ],
        colors: [
            "#FFFFFF",
            "#121212",
            "#8A0000",
        ],
    }
];


/* gg-touchpad*/