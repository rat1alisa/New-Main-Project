

/*const products = [
    {
        id: 1,
        name: "Mac",
        price: "From $1299",
        images: [
            "https://cdn.bueromarkt-ag.de/product/56d940d3eb84eb35f478fe4006b4043bb958a340/all-in-one-pc_apple_imac_24_m3_2023_mqrn3da.jpg?1699592543",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165",

        ],
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive"
            },
            {
                icon: "gg-camera",
                value: "Look sharp and sound great with the 1080p FaceTime HD camera"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "Immersive 24-inch 4.5K Retina display Footnote¹"
            },
        ],
        colors: [
            "#FF5733",
            "#FFCE06",
            "#008967",
            "#014E74 ",
            "#2500B0"
        ],
        
    },
    {
        id: 2,
        name: "Macbook Pro 14",
        price: "From $1599",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=364&hei=333&fmt=png-alpha&.v=1696971522628",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202310?wid=728&hei=666&fmt=png-alpha&.v=1697915602337",
            "https://syktyvkar.the-istore.ru/upload/iblock/cea/ceaea774d86b9d6f81abe5915c2b8635/c8a59f1df2e4ed4d1593f8dd2ddd39f8.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-6-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971524925"
        ],
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "With M3, M3 Pro, or M3 Max, our most advanced chips for personal computers"
            },
            {
                icon: "gg-battery-empty",
                value: "Go all day with up to 22 hours of battery life Footnote¹"
            },
            {
                icon: "gg-camera",
                value: "Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera"
            },
        ],
        colors: [
            "#505050",
            "#979797",
            "#D3D3D3 "
        ],
        
    },
    {
        id: 3,
        name: "Macbook Air 13 M1",
        price: "From $999",
        images: [
            "https://www.2dehands-iphone-kopen.nl/image/cache/catalog/macbooks/macbook-air-2017-2018-750x750.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165"
        ],
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M1 chip keep things running smoothly"
            },
            {
                icon: "gg-display-flex",
                value: "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors"
            },
            {
                icon: "gg-edit-highlight",
                value: "Portable design — Lightweight and under half an inch thin, so you can take MacBook Air anywhere you go"
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
        id: 4,
        name: "Mac mini",
        price: "From $599",
        images: [
            "https://cdn1.ozone.ru/s3/multimedia-0/6452428092.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202301?wid=728&hei=666&fmt=png-alpha&.v=1670038165453",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-5-202301_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1670916363771",
        ],
        parametrs: [
            {
                icon: "gg-pen",
                value: "Customize your setup using Mac mini’s two or four Thunderbolt 4 ports, two USB-A ports, HDMI, and Gigabit Ethernet"
            },
            {
                icon: "gg-arrows-exchange-alt",
                value: "Complete your system with Studio Display and Magic accessories"
            },
            {
                icon: "gg-smartphone-chip",
                value: "Do more and do it faster with the next-generation M2 or M2 Pro chip"
            }
        ],
        colors: [
            "#8C8C8C",
        ],
        
    },
    {
        id: 5,
        name: "Studio Display",
        price: "From $1599",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645558306366",
            "https://content2.onliner.by/catalog/device/large/16486047c4ca418786763a242aeac585.jpeg",
            "https://m.media-amazon.com/images/I/51afAQocEQL._AC_UF894,1000_QL80_.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207691982"
        ],
        parametrs: [
            {
                icon: "gg-arrows-expand-right",
                value: "27-inch 5K Retina display draws you in with 14.7 million pixels and one billion colors"
            },
            {
                icon: "gg-controller",
                value: "12MP Ultra Wide camera with Center Stage — powered by Apple silicon — allows for more engaging video calls"
            },
            {
                icon: "gg-arrows-exchange-alt",
                value: "Pairs perfectly with any Mac, including the all-new Mac Studio. Add new matching Magic accessories to complete your studio."
            },
        ],
        colors: [
            "#8C8C8C",
        ],
        
    },
    {
        id: 6,
        name: "Mac Pro",
        price: "From $1299",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202306?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1683842315753",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-2-202306?wid=728&hei=666&fmt=png-alpha&.v=1683842315746",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-5-202306?wid=728&hei=666&fmt=png-alpha&.v=1683842315754",
        ],
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "Supercharged by M2 Ultra, our most powerful and capable chip"
            },
            {
                icon: "gg-shape-square",
                value: "Runs cool and quiet, even under intensive workloads"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "Comes with Magic accessories. Complete your setup with Pro Display XDR."
            },
        ],
        colors: [
            "#8C8C8C",
        ],
        
    },
];*/





const products = [
    {
        id: 1,
        name: "Mac",
        price: "From $1299",
        images: [
            "https://cdn.bueromarkt-ag.de/product/56d940d3eb84eb35f478fe4006b4043bb958a340/all-in-one-pc_apple_imac_24_m3_2023_mqrn3da.jpg?1699592543",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165",

        ],
        orderPic: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-og-202310?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1697142273063",
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive"
            },
            {
                icon: "gg-camera",
                value: "Look sharp and sound great with the 1080p FaceTime HD camera"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "Immersive 24-inch 4.5K Retina display Footnote¹"
            },
        ],
        colors: [
            "#FF5733",
            "#FFCE06",
            "#51C5A7",
            "#014E74 ",
            "#2500B0"
        ],
        text:"Storage. How much space do you need?",
        storage:[
            "8GB&256GB",
            "8GB&512GB",
        ],
    },
    {
        id: 2,
        name: "Macbook Pro 14",
        price: "From $1599",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202310?wid=364&hei=333&fmt=png-alpha&.v=1696971522628",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202310?wid=728&hei=666&fmt=png-alpha&.v=1697915602337",
            "https://syktyvkar.the-istore.ru/upload/iblock/cea/ceaea774d86b9d6f81abe5915c2b8635/c8a59f1df2e4ed4d1593f8dd2ddd39f8.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-6-202310?wid=728&hei=666&fmt=png-alpha&.v=1696971524925"
        ],
        orderPic: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654902977555",
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "With M3 Processor, our most advanced chips for personal computers"
            },
            {
                icon: "gg-battery-empty",
                value: "Go all day with up to 22 hours of battery life Footnote¹"
            },
            {
                icon: "gg-camera",
                value: "Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera"
            },
        ],
        colors: [
            "#979797",
            "#D3D3D3 "
        ],
        text:"Storage. How much space do you need?",
        storage:[
            "8GB&512GB",
            "8GB&1TB",
            "16GB&1TB",
        ],
    },
    {
        id: 3,
        name: "Macbook Air 13 M1",
        price: "From $999",
        images: [
            "https://www.2dehands-iphone-kopen.nl/image/cache/catalog/macbooks/macbook-air-2017-2018-750x750.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165"
        ],
        orderPic: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654902977555",
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "Get more done faster — The powerful 8-core CPU and up to 10-core GPU of the Apple M1 chip keep things running smoothly"
            },
            {
                icon: "gg-display-flex",
                value: "A brilliant display — The 13.6-inch Liquid Retina display supports 1 billion colors"
            },
            {
                icon: "gg-edit-highlight",
                value: "Portable design — Lightweight and under half an inch thin, so you can take MacBook Air anywhere you go"
            }
        ],
        colors: [
            "#a7a6a3",
            "#cfcfcd",
            "#415C71",
            "#59595c"
        ],
        text:"Storage. How much space do you need?",
        storage:[
            "8GB&256GB",
            "8GB&512GB",
        ],
    },
    {
        id: 4,
        name: "Mac mini",
        price: "From $599",
        images: [
            "https://cdn1.ozone.ru/s3/multimedia-0/6452428092.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202301?wid=728&hei=666&fmt=png-alpha&.v=1670038165453",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-5-202301_GEO_US?wid=728&hei=666&fmt=png-alpha&.v=1670916363771",
        ],
        orderPic: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654902977555",
        parametrs: [
            {
                icon: "gg-pen",
                value: "Customize your setup using Mac mini’s two or four Thunderbolt 4 ports, two USB-A ports, HDMI, and Gigabit Ethernet"
            },
            {
                icon: "gg-arrows-exchange-alt",
                value: "Complete your system with Studio Display and Magic accessories"
            },
            {
                icon: "gg-smartphone-chip",
                value: "Do more and do it faster with the next-generation M2 or M2 Pro chip"
            }
        ],
        colors: [
            "#8C8C8C",
        ],
        text:"Storage. How much space do you need?",
        storage:[
            "8GB&256GB",
            "8GB&512GB",
        ],
    },
    {
        id: 5,
        name: "Studio Display",
        price: "From $1599",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645558306366",
            "https://content2.onliner.by/catalog/device/large/16486047c4ca418786763a242aeac585.jpeg",
            "https://m.media-amazon.com/images/I/51afAQocEQL._AC_UF894,1000_QL80_.jpg",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-3-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207691982"
        ],
        orderPic: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-og-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645125507093",
        parametrs: [
            {
                icon: "gg-arrows-expand-right",
                value: "27-inch 5K Retina display draws you in with 14.7 million pixels and one billion colors"
            },
            {
                icon: "gg-controller",
                value: "12MP Ultra Wide camera with Center Stage — powered by Apple silicon — allows for more engaging video calls"
            },
            {
                icon: "gg-arrows-exchange-alt",
                value: "Pairs perfectly with any Mac, including the all-new Mac Studio. Add new matching Magic accessories to complete your studio."
            },
        ],
        colors: [
            "#8C8C8C",
        ],
        text:"Storage. How much space do you need?",
        storage:[
            "256GB",
            "512GB",
        ],
    },
    {
        id: 6,
        name: "Mac Pro",
        price: "From $1299",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202306?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1683842315753",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-2-202306?wid=728&hei=666&fmt=png-alpha&.v=1683842315746",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-5-202306?wid=728&hei=666&fmt=png-alpha&.v=1683842315754",
        ],
        orderPic: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1654902977555",
        parametrs: [
            {
                icon: "gg-smartphone-chip",
                value: "Supercharged by M2 Ultra, our most powerful and capable chip"
            },
            {
                icon: "gg-shape-square",
                value: "Runs cool and quiet, even under intensive workloads"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "Comes with Magic accessories. Complete your setup with Pro Display XDR."
            },
        ],
        colors: [
            "#8C8C8C",
        ],
        text:"Storage. How much space do you need?",
        storage:[
            "256GB",
            "512GB",
        ],
    },
];