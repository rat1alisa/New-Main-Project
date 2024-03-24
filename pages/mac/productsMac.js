

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
        name: "Mac",
        price: "From $1299",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "A titanium bezel"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "USB-C port"
            },
            {
                icon: "gg-camera",
                value: "New 48-megapixel camera"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The new A17 Bionic processor"
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
        id: 5,
        name: "Mac",
        price: "From $1299",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "A titanium bezel"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "USB-C port"
            },
            {
                icon: "gg-camera",
                value: "New 48-megapixel camera"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The new A17 Bionic processor"
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
        id: 6,
        name: "Mac",
        price: "From $1299",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "A titanium bezel"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "USB-C port"
            },
            {
                icon: "gg-camera",
                value: "New 48-megapixel camera"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The new A17 Bionic processor"
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
        id: 7,
        name: "Mac",
        price: "From $1299",
        images: [
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004117",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559004001",
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202310?wid=728&hei=666&fmt=png-alpha&.v=1697559005165"
        ],
        parametrs: [
            {
                icon: "gg-shape-square",
                value: "A titanium bezel"
            },
            {
                icon: "gg-arrow-long-right-r",
                value: "USB-C port"
            },
            {
                icon: "gg-camera",
                value: "New 48-megapixel camera"
            },
            {
                icon: "gg-smartphone-chip",
                value: "The new A17 Bionic processor"
            }
        ],
        colors: [
            "#a7a6a3",
            "#cfcfcd",
            "#415C71",
            "#59595c"
        ],
        
    },
];