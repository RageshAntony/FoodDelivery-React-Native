export default class MainPageRepo{

static foodList = [
    {
      dishType: 'Dishes',
      imgURL: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      name: 'Beef Cake',
      price: '$150',
      availableHotels: 25,
      type : "Thai Spicy",
      rating : 4.1,
    },
    {
      dishType: 'Fires',
      imgURL: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'French Fries',
      price: '$10',
      availableHotels: 69,
      type : "Italian Hots",
      rating : 3.5,
    },
    {
      dishType: 'Buns',
      imgURL: 'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Vegi Burger',
      price: '$23',
      availableHotels: 19,
      type : "Chettinad Modern",
      rating : 4.6,


    },
    {
      dishType: 'Fires',
      imgURL: 'https://images.unsplash.com/photo-1441986060468-324610e6e6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Sandwich Fires',
      price: '$38',
      availableHotels: 38,
      type : "Brazil Country Cuisine",
      rating : 3.1,


    },
    {
      dishType: 'Mixed',
      imgURL: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Vegi Frui Mix',
      price: '$28',
      availableHotels: 87,
      type : "Sea Foods",
      rating : 3.5,


    },
    {
      dishType: 'Salads',
      imgURL: 'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rice Salad',
      price: '$548',
      availableHotels: 73,
      type : "Buns and Cakes",
      rating : 4.1,


    },
 
    
  ];

  static popRestList = [
    {
      name : "Thai ME up Restaurant & Brewery",
      rating : 4.1,
      imgURL : "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      noReviews : 88,
      type : "Thai Spicy"

    },
    {
      name : "Tequila MockingBird Greenpoint",
      rating : 3.5,
      imgURL : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      noReviews : 36,
      type : "Italian Hots"

    },
    {
      name : "Boxcar Social Pub & Bar",
      rating : 3.5,
      imgURL : "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      noReviews : 42,
      type : "Chettinad Modern"

    },
    {
      name : "Expresso Expression Endpoint",
      rating : 3.0,
      imgURL : "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      noReviews : 26,
      type : "Brazil Country Cuisine"

    },
    {
      name : "Brightto Bay ",
      rating : 4.1,
      imgURL : "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      noReviews : 94,
      type : "Sea Foods"

    },
    {
      name : "Gionag Buns and Cakes",
      rating : 3.6,
      imgURL : "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      noReviews : 79,
      type : "Buns and Cakes"

    }
  ]

  static couponsList = [
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/cwkxw2ugoqnao9gu5mta",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lqid1a6aycz85cilfgg7",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/k7f6xdk98ywjcochkcwm",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/e8qsywpath9uli7tnikc",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kmewp8efed0ev7yvfyx6",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/bmp2yqaaqouptllxmkei"
  ]

  static filtersList = ["All","Near Me" , "Most Viewed","Quick","Budget"]
}