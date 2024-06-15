import React from 'react';
import ReactDOM from 'react-dom/client';

const obj = {
    info: {
        name: "KFC",
        rating: 4.5,
        cuisine: "Fast Food",
        location: "Mumbai"
    }
}
const obj2 =[
    {
        "statusCode": 0,
        "data": {
          "tid": "f6c528ef-0446-410a-903e-932af7fbd2ee",
          "sid": "edk1e455-1b41-4e9e-aa7c-e4f491b0f275",
          "success": {
            "cards": [
              {
                "relevance": {
                  
                },
                "gridWidget": {
                  "header": {
                    "action": {
                      
                    },
                    "headerStyling": {
                      "padding": {
                        
                      }
                    }
                  },
                  "layout": {
                    "rows": 1,
                    "columns": 2,
                    "itemSpacing": 12,
                    "widgetPadding": {
                      
                    },
                    "containerStyle": {
                      "containerPadding": {
                        "left": 16,
                        "top": 16,
                        "right": 16,
                        "bottom": 12
                      }
                    },
                    "scrollBar": {
                      "scrollStyling": {
                        "padding": {
                          
                        }
                      }
                    },
                    "autoScrollConfig": {
                      
                    },
                    "separatorConfig": {
                      
                    }
                  },
                  "imageGridCards": {
                    "info": [
                      {
                        "id": "410097",
                        "imageId": "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
                        "action": {
                          "link": "swiggy://restaurantList",
                          "text": "Restaurant",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "RESTAURANT",
                          "altTextCta": "Click to know more about Restaurants."
                        }
                      },
                      {
                        "id": "1696042",
                        "imageId": "rng/md/carousel/production/9887a65f6a7e11c18965c02bbf255e79",
                        "action": {
                          "link": "swiggy://stores/go",
                          "text": "Genie",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "GENIE",
                          "altTextCta": "Click to know more about Restaurants."
                        }
                      }
                    ],
                    "style": {
                      "width": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.5,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                      },
                      "height": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.79518074,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                      }
                    }
                  },
                  "id": "ScrollNavSplitP2_latebinding",
                  "gridElements": {
                    "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                      "info": [
                        {
                          "id": "410097",
                          "imageId": "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
                          "action": {
                            "link": "swiggy://restaurantList",
                            "text": "Restaurant",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "RESTAURANT",
                            "altTextCta": "Click to know more about Restaurants."
                          },
                          "entityId": "swiggy://restaurantList",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "Restaurant"
                        },
                        {
                          "id": "1696042",
                          "imageId": "rng/md/carousel/production/9887a65f6a7e11c18965c02bbf255e79",
                          "action": {
                            "link": "swiggy://stores/go",
                            "text": "Genie",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "GENIE",
                            "altTextCta": "Click to know more about Restaurants."
                          },
                          "entityId": "swiggy://stores/go",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "Genie"
                        }
                      ],
                      "style": {
                        "width": {
                          "type": "TYPE_RELATIVE",
                          "value": 0.5,
                          "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                        },
                        "height": {
                          "type": "TYPE_RELATIVE",
                          "value": 0.79518074,
                          "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                        }
                      }
                    }
                  },
                  "footer": {
                    "labelWrapper": {
                      
                    }
                  }
                }
              },
              {
                "relevance": {
                  "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                  "sectionId": "MENU_RETURN"
                },
                "gridWidget": {
                  "header": {
                    "title": "Top Picks For You",
                    "action": {
                      
                    },
                    "imageId": "sl9oogwe7n5dusolt5xe",
                    "headerStyling": {
                      "padding": {
                        "left": 16,
                        "top": 15,
                        "bottom": 24
                      }
                    }
                  },
                  "layout": {
                    "rows": 1,
                    "columns": 16,
                    "horizontalScrollEnabled": true,
                    "shouldSnap": true,
                    "itemSpacing": 12,
                    "widgetPadding": {
                      
                    },
                    "containerStyle": {
                      "containerPadding": {
                        "left": 16,
                        "right": 16,
                        "bottom": 12
                      }
                    },
                    "scrollBar": {
                      "scrollStyling": {
                        "padding": {
                          
                        }
                      }
                    },
                    "autoScrollConfig": {
                      
                    },
                    "separatorConfig": {
                      
                    }
                  },
                  "imageGridCards": {
                    "style": {
                      "width": {
                        
                      },
                      "height": {
                        
                      }
                    }
                  },
                  "id": "Updated_4_favourites_SimRestoRelevance",
                  "gridElements": {
                    "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                      "restaurants": [
                        {
                          "info": {
                            "id": "343468",
                            "name": "Cake 24x7",
                            "cloudinaryImageId": "yuai9tmymsdhq4az9os2",
                            "locality": "Road No 12",
                            "areaName": "Don Bosco Raod",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                              "Bakery",
                              "Indian",
                              "Ice Cream Cakes",
                              "Cakes and Pastries"
                            ],
                            "avgRating": 3.7,
                            "veg": true,
                            "parentId": "54688",
                            "avgRatingString": "3.7",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=13954877~p=0~adgrpid=13954877#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=343468~eid=be9b26fc-8b2b-4187-bcda-6bd1576bf461~srvts=1718248625132~collid=45995",
                            "sla": {
                              "deliveryTime": 53,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-20 00:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=343468",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "253169",
                            "name": "Bikaner Sweets and Pastry Shop",
                            "cloudinaryImageId": "gd1wohldbsmjuv5mstp7",
                            "locality": "Ghrounda",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹449 for two",
                            "cuisines": [
                              "Bakery",
                              "Sweets"
                            ],
                            "avgRating": 4.5,
                            "veg": true,
                            "parentId": "45906",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "10K+",
                            "sla": {
                              "deliveryTime": 32,
                              "lastMileTravel": 2.9,
                              "serviceability": "SERVICEABLE",
                              "slaString": "30-35 mins",
                              "lastMileTravelString": "2.9 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                      }
                                    },
                                    {
                                      "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹599",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=253169",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "791812",
                            "name": "Awadhi",
                            "cloudinaryImageId": "2bac7a35febc2ae024028977b0e0ea82",
                            "locality": "Boring Patliputra Rd",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                              "North Indian",
                              "Chinese",
                              "South Indian"
                            ],
                            "avgRating": 4.4,
                            "veg": true,
                            "parentId": "38126",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 53,
                              "lastMileTravel": 7,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "7.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "40% OFF",
                              "subHeader": "UPTO ₹80"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=791812",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "616737",
                            "name": "Chai Sutta Bar",
                            "cloudinaryImageId": "tx9ccjehon3hx46pj1wd",
                            "locality": "Patna - Aurangabad Road",
                            "areaName": "MITHAPUR",
                            "costForTwo": "₹100 for two",
                            "cuisines": [
                              "Beverages",
                              "Fast Food",
                              "Italian",
                              "Snacks"
                            ],
                            "avgRating": 3.6,
                            "veg": true,
                            "parentId": "14909",
                            "avgRatingString": "3.6",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 42,
                              "lastMileTravel": 0.2,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "0.2 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹399",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=616737",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "343942",
                            "name": "BAKERY 24x7",
                            "cloudinaryImageId": "fvjrccmv6j4lr2ldd6hd",
                            "locality": "Kumharar",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bakery",
                              "Cakes & Pastries"
                            ],
                            "avgRating": 3.5,
                            "veg": true,
                            "parentId": "3817",
                            "avgRatingString": "3.5",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=13954644~p=1~adgrpid=13954644#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=343942~eid=0f82e160-0395-43b9-b4ed-675430a9a6f3~srvts=1718248625132~collid=45995",
                            "sla": {
                              "deliveryTime": 54,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-20 00:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=343942",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "246443",
                            "name": "Harilal's",
                            "cloudinaryImageId": "cb3elcisgcyajxfsom43",
                            "locality": "Gayatri Mandir Road",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                              "Sweets",
                              "Bakery",
                              "North Indian"
                            ],
                            "avgRating": 4.4,
                            "veg": true,
                            "parentId": "472621",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "10K+",
                            "sla": {
                              "deliveryTime": 41,
                              "lastMileTravel": 2.8,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "2.8 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                      }
                                    },
                                    {
                                      "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                        "description": "Delivery!"
                                      }
                                    },
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=246443",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "345751",
                            "name": "Anna ka Dosa",
                            "cloudinaryImageId": "sz3daqlxq5vkllaang6w",
                            "locality": "Boring Road",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                              "South Indian"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "parentId": "5062",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 48,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "10% OFF",
                              "subHeader": "UPTO ₹40"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=345751",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "238672",
                            "name": "Rajdhani Hotel",
                            "cloudinaryImageId": "drgphrpjbnqcwjsxaiod",
                            "locality": "Station Road",
                            "areaName": "Patna Junction",
                            "costForTwo": "₹320 for two",
                            "cuisines": [
                              "Chinese",
                              "Indian",
                              "Tandoor"
                            ],
                            "avgRating": 4,
                            "parentId": "165478",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 35,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "35-40 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=238672",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "88779",
                            "name": "Dosa Plaza (Pure Veg)",
                            "cloudinaryImageId": "knmjxpweybgksjfvoulq",
                            "locality": "Mithapur",
                            "areaName": "Mithapur",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                              "South Indian"
                            ],
                            "avgRating": 4,
                            "parentId": "8016",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "5K+",
                            "promoted": true,
                            "adTrackingId": "cid=14328658~p=2~adgrpid=14328658#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=88779~eid=102a029f-f67b-42a9-9c21-f2c67d612795~srvts=1718248625132~collid=45995",
                            "sla": {
                              "deliveryTime": 53,
                              "lastMileTravel": 3.9,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "3.9 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "₹100 OFF",
                              "subHeader": "ABOVE ₹199",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "3.3",
                                "ratingCount": "1K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=88779",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "550907",
                            "name": "The Dessert Zone",
                            "cloudinaryImageId": "c447c9ce7d0bbe78e46141e866236762",
                            "locality": "Sri Krishna Puri",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bakery",
                              "Desserts",
                              "Ice Cream",
                              "Beverages"
                            ],
                            "avgRating": 4.4,
                            "parentId": "10414",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 45,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.6 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=550907",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "561782",
                            "name": "Indiana Burgers",
                            "cloudinaryImageId": "xleqnzt2tk6hrndpenjo",
                            "locality": "Boring Road",
                            "areaName": "Fraser Road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Burgers",
                              "American",
                              "Fast Food",
                              "Beverages",
                              "Desserts"
                            ],
                            "avgRating": 4.3,
                            "parentId": "5714",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "500+",
                            "sla": {
                              "deliveryTime": 45,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.6 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=561782",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "574386",
                            "name": "Momo Zone - The Momo Company",
                            "cloudinaryImageId": "eeiu6kkzygcvp20znlg4",
                            "locality": "Fraser Road",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Chinese",
                              "Tibetan",
                              "Fast Food"
                            ],
                            "avgRating": 3.9,
                            "parentId": "382343",
                            "avgRatingString": "3.9",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 43,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "4.6 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=574386",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "790423",
                            "name": "Hops&Chops",
                            "cloudinaryImageId": "d9cc826457dcb14c39699f94851ee8d8",
                            "locality": "Fantasy Club",
                            "areaName": "Subhash Nagar Road ",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                              "Indian"
                            ],
                            "avgRating": 4,
                            "parentId": "469533",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "20+",
                            "promoted": true,
                            "adTrackingId": "cid=14156959~p=3~adgrpid=14156959#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790423~eid=ee1b2b2e-67ff-4b97-a687-449247fc61b8~srvts=1718248625132~collid=45995",
                            "sla": {
                              "deliveryTime": 50,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "15% OFF",
                              "subHeader": "UPTO ₹100"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=790423",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "809901",
                            "name": "Vadilal Ice Creams",
                            "cloudinaryImageId": "554235ad5fc25e3ace1afddae17822ae",
                            "locality": "Tilak Marg",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                              "Ice Cream",
                              "Desserts"
                            ],
                            "avgRating": 4.6,
                            "parentId": "11745",
                            "avgRatingString": "4.6",
                            "totalRatingsString": "50+",
                            "sla": {
                              "deliveryTime": 46,
                              "lastMileTravel": 6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "6.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 00:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "10% OFF",
                              "subHeader": "UPTO ₹40"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=809901",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "695596",
                            "name": "IGP Cakes",
                            "cloudinaryImageId": "cc84d172c8acb034e61ffaeb2d2557e3",
                            "locality": "Shree Raj Complex",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹299 for two",
                            "cuisines": [
                              "Desserts",
                              "Bakery"
                            ],
                            "avgRating": 4.5,
                            "veg": true,
                            "parentId": "392350",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 44,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "60% OFF",
                              "subHeader": "UPTO ₹120"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=695596",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "562924",
                            "name": "WarmOven Cake & Desserts",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/fe4be499-c9a9-4685-aa56-996987165436_562924.JPG",
                            "locality": "Fraser Road",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bakery",
                              "Desserts",
                              "Ice Cream",
                              "Beverages"
                            ],
                            "avgRating": 4.4,
                            "parentId": "9696",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 52,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "4.6 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=562924",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        }
                      ],
                      "theme": "RESTAURANT_GROUP_FAVOURITE_THEME",
                      "widgetType": "WIDGET_TYPE_FAVOURITES",
                      "style": {
                        
                      },
                      "collectionId": "45995"
                    }
                  },
                  "footer": {
                    "labelWrapper": {
                      
                    }
                  }
                }
              },
              {
                "relevance": {
                  
                },
                "gridWidget": {
                  "header": {
                    "action": {
                      
                    },
                    "headerStyling": {
                      "padding": {
                        
                      }
                    }
                  },
                  "layout": {
                    "rows": 1,
                    "columns": 2,
                    "horizontalScrollEnabled": true,
                    "shouldSnap": true,
                    "itemSpacing": 20,
                    "widgetPadding": {
                      
                    },
                    "containerStyle": {
                      "containerPadding": {
                        "left": 20,
                        "top": 12,
                        "right": 20,
                        "bottom": 8
                      }
                    },
                    "scrollBar": {
                      "scrollThumbColor": "#E46D47",
                      "scrollTrackColor": "#E4E4E4",
                      "width": 54,
                      "height": 4,
                      "scrollStyling": {
                        "padding": {
                          "top": 6,
                          "bottom": 12
                        }
                      }
                    },
                    "autoScrollConfig": {
                      "isScrollEnabled": true,
                      "autoScrollDuration": 4,
                      "autoScrollResetDuration": 4
                    },
                    "separatorConfig": {
                      
                    }
                  },
                  "imageGridCards": {
                    "info": [
                      {
                        "id": "1066810",
                        "imageId": "rng/md/carousel/production/d560cd519f908dec13d3d8a3974f1601",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=73439&tags=layout_curationFlexi",
                          "text": "Holi",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "Get Min 50% off on breakfast specials",
                          "altTextCta": "Order Now"
                        }
                      },
                      {
                        "id": "997504",
                        "imageId": "rng/md/carousel/production/57f989b7f38386ebe7bc8d0b563f6f26",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=91688&tags=layout_offerzone&header_title=Offer%20Zone&header_title=Offer%20Zone&category=Landingpage_OffersDestination_CATEGORY_Offers",
                          "text": "Holi",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "Get Upto 60% off",
                          "altTextCta": "Order Now"
                        }
                      }
                    ],
                    "style": {
                      "width": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.8,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                      },
                      "height": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.82432,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                      }
                    }
                  },
                  "id": "Homepage_Version4_Topical_Fullbleed",
                  "gridElements": {
                    "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                      "info": [
                        {
                          "id": "1066810",
                          "imageId": "rng/md/carousel/production/d560cd519f908dec13d3d8a3974f1601",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=73439&tags=layout_curationFlexi",
                            "text": "Holi",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "Get Min 50% off on breakfast specials",
                            "altTextCta": "Order Now"
                          },
                          "entityId": "swiggy://collectionV2?collection_id=73439&tags=layout_curationFlexi",
                          "frequencyCapping": {
                            "cappingEnabled": true,
                            "cappingMode": "VIEW"
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "Holi"
                        },
                        {
                          "id": "997504",
                          "imageId": "rng/md/carousel/production/57f989b7f38386ebe7bc8d0b563f6f26",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=91688&tags=layout_offerzone&header_title=Offer%20Zone&header_title=Offer%20Zone&category=Landingpage_OffersDestination_CATEGORY_Offers",
                            "text": "Holi",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "Get Upto 60% off",
                            "altTextCta": "Order Now"
                          },
                          "entityId": "swiggy://collectionV2?collection_id=91688&tags=layout_offerzone&header_title=Offer%20Zone&header_title=Offer%20Zone&category=Landingpage_OffersDestination_CATEGORY_Offers",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "Holi"
                        }
                      ],
                      "style": {
                        "width": {
                          "type": "TYPE_RELATIVE",
                          "value": 0.8,
                          "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                        },
                        "height": {
                          "type": "TYPE_RELATIVE",
                          "value": 0.82432,
                          "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                        }
                      }
                    }
                  },
                  "footer": {
                    "labelWrapper": {
                      
                    }
                  }
                }
              },
              {
                "relevance": {
                  
                },
                "gridWidget": {
                  "header": {
                    "title": "Offers For You",
                    "action": {
                      
                    },
                    "headerStyling": {
                      "padding": {
                        "left": 16,
                        "top": 24,
                        "bottom": 24
                      }
                    }
                  },
                  "layout": {
                    "rows": 1,
                    "columns": 5,
                    "horizontalScrollEnabled": true,
                    "itemSpacing": 4,
                    "widgetPadding": {
                      "top": 8
                    },
                    "containerStyle": {
                      "containerPadding": {
                        "left": 16,
                        "bottom": 24
                      }
                    },
                    "scrollBar": {
                      "scrollStyling": {
                        "padding": {
                          
                        }
                      }
                    },
                    "autoScrollConfig": {
                      
                    },
                    "separatorConfig": {
                      
                    }
                  },
                  "imageGridCards": {
                    "info": [
                      {
                        "id": "410105",
                        "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                          "text": "DEAL60",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "DEAL60",
                          "altTextCta": "Tap to grab best deals from best restaurant"
                        }
                      },
                      {
                        "id": "410104",
                        "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                          "text": "TRYNEW",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "TRYNEW",
                          "altTextCta": "explore Unique tastes from new eateries"
                        }
                      },
                      {
                        "id": "410121",
                        "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                          "text": "TRYNEW",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "SWIGGYIT",
                          "altTextCta": "Offers for 1 Upto 50% off"
                        }
                      },
                      {
                        "id": "410109",
                        "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                          "text": "JUBO",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "JUMBO",
                          "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                        }
                      },
                      {
                        "id": "410114",
                        "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                        "action": {
                          "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                          "text": "PARTY",
                          "type": "DEEPLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "PARTY",
                          "altTextCta": "Party Steals upto 300/- off"
                        }
                      }
                    ],
                    "style": {
                      "width": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.35714287,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                      },
                      "height": {
                        "type": "TYPE_RELATIVE",
                        "value": 1.1916667,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                      }
                    }
                  },
                  "id": "Home_P2_Food_Offerwidget_MainComponent_Scrollcards",
                  "gridElements": {
                    "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                      "info": [
                        {
                          "id": "410105",
                          "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                            "text": "DEAL60",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "DEAL60",
                            "altTextCta": "Tap to grab best deals from best restaurant"
                          },
                          "entityId": "54793",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "DEAL60"
                        },
                        {
                          "id": "410104",
                          "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                            "text": "TRYNEW",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "TRYNEW",
                            "altTextCta": "explore Unique tastes from new eateries"
                          },
                          "entityId": "54802",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "TRYNEW"
                        },
                        {
                          "id": "410121",
                          "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                            "text": "TRYNEW",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "SWIGGYIT",
                            "altTextCta": "Offers for 1 Upto 50% off"
                          },
                          "entityId": "54908",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "TRYNEW"
                        },
                        {
                          "id": "410109",
                          "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                            "text": "JUBO",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "JUMBO",
                            "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                          },
                          "entityId": "54797",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "JUBO"
                        },
                        {
                          "id": "410114",
                          "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                          "action": {
                            "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                            "text": "PARTY",
                            "type": "DEEPLINK"
                          },
                          "entityType": "BANNER",
                          "accessibility": {
                            "altText": "PARTY",
                            "altTextCta": "Party Steals upto 300/- off"
                          },
                          "entityId": "50880",
                          "frequencyCapping": {
                            
                          },
                          "externalMarketing": {
                            
                          },
                          "description": "PARTY"
                        }
                      ],
                      "style": {
                        "width": {
                          "type": "TYPE_RELATIVE",
                          "value": 0.35714287,
                          "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                        },
                        "height": {
                          "type": "TYPE_RELATIVE",
                          "value": 1.1916667,
                          "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                        }
                      }
                    }
                  },
                  "footer": {
                    "labelWrapper": {
                      
                    }
                  }
                }
              },
              {
                "relevance": {
                  
                },
                "gridWidget": {
                  "header": {
                    "title": "All Restaurants Nearby",
                    "subtitle": "Discover unique tastes near you",
                    "action": {
                      
                    },
                    "imageId": "rng/md/production/ipai4xhkoy9ovshdnyn6",
                    "headerStyling": {
                      "padding": {
                        "left": 16,
                        "top": 24,
                        "bottom": 24
                      }
                    }
                  },
                  "layout": {
                    "rows": 25,
                    "columns": 1,
                    "lineSpacing": 24,
                    "widgetPadding": {
                      
                    },
                    "containerStyle": {
                      "containerPadding": {
                        "right": 12,
                        "bottom": 8
                      }
                    },
                    "scrollBar": {
                      "scrollStyling": {
                        "padding": {
                          
                        }
                      }
                    },
                    "autoScrollConfig": {
                      
                    },
                    "separatorConfig": {
                      
                    }
                  },
                  "imageGridCards": {
                    "style": {
                      "width": {
                        
                      },
                      "height": {
                        
                      }
                    }
                  },
                  "id": "restaurantCollectionDeliveringNowTheme",
                  "gridElements": {
                    "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                      "restaurants": [
                        {
                          "info": {
                            "id": "343468",
                            "name": "Cake 24x7",
                            "cloudinaryImageId": "yuai9tmymsdhq4az9os2",
                            "locality": "Road No 12",
                            "areaName": "Don Bosco Raod",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                              "Bakery",
                              "Indian",
                              "Ice Cream Cakes",
                              "Cakes and Pastries"
                            ],
                            "avgRating": 3.7,
                            "veg": true,
                            "parentId": "54688",
                            "avgRatingString": "3.7",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=13954877~p=0~adgrpid=13954877#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=343468~eid=815e1ae6-7827-4695-a14c-0700f84b4744~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 53,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-20 00:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=343468",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "253169",
                            "name": "Bikaner Sweets and Pastry Shop",
                            "cloudinaryImageId": "gd1wohldbsmjuv5mstp7",
                            "locality": "Ghrounda",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹449 for two",
                            "cuisines": [
                              "Bakery",
                              "Sweets"
                            ],
                            "avgRating": 4.5,
                            "veg": true,
                            "parentId": "45906",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "10K+",
                            "sla": {
                              "deliveryTime": 32,
                              "lastMileTravel": 2.9,
                              "serviceability": "SERVICEABLE",
                              "slaString": "30-35 mins",
                              "lastMileTravelString": "2.9 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                      }
                                    },
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹599",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=253169",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "791812",
                            "name": "Awadhi",
                            "cloudinaryImageId": "2bac7a35febc2ae024028977b0e0ea82",
                            "locality": "Boring Patliputra Rd",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                              "North Indian",
                              "Chinese",
                              "South Indian"
                            ],
                            "avgRating": 4.4,
                            "veg": true,
                            "parentId": "38126",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 53,
                              "lastMileTravel": 7,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "7.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "40% OFF",
                              "subHeader": "UPTO ₹80"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=791812",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "343942",
                            "name": "BAKERY 24x7",
                            "cloudinaryImageId": "fvjrccmv6j4lr2ldd6hd",
                            "locality": "Kumharar",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bakery",
                              "Cakes & Pastries"
                            ],
                            "avgRating": 3.5,
                            "veg": true,
                            "parentId": "3817",
                            "avgRatingString": "3.5",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=13954644~p=1~adgrpid=13954644#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=343942~eid=65cc29c8-483a-40ff-92ad-14a6bdd1a9c6~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 54,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-20 00:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=343942",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "616737",
                            "name": "Chai Sutta Bar",
                            "cloudinaryImageId": "tx9ccjehon3hx46pj1wd",
                            "locality": "Patna - Aurangabad Road",
                            "areaName": "MITHAPUR",
                            "costForTwo": "₹100 for two",
                            "cuisines": [
                              "Beverages",
                              "Fast Food",
                              "Italian",
                              "Snacks"
                            ],
                            "avgRating": 3.6,
                            "veg": true,
                            "parentId": "14909",
                            "avgRatingString": "3.6",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 42,
                              "lastMileTravel": 0.2,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "0.2 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "₹125 OFF",
                              "subHeader": "ABOVE ₹399",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=616737",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "246443",
                            "name": "Harilal's",
                            "cloudinaryImageId": "cb3elcisgcyajxfsom43",
                            "locality": "Gayatri Mandir Road",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                              "Sweets",
                              "Bakery",
                              "North Indian"
                            ],
                            "avgRating": 4.4,
                            "veg": true,
                            "parentId": "472621",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "10K+",
                            "sla": {
                              "deliveryTime": 41,
                              "lastMileTravel": 2.8,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "2.7 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                        "description": "Delivery!"
                                      }
                                    },
                                    {
                                      "attributes": {
                                        "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                        "description": "Delivery!"
                                      }
                                    },
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=246443",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "88779",
                            "name": "Dosa Plaza (Pure Veg)",
                            "cloudinaryImageId": "knmjxpweybgksjfvoulq",
                            "locality": "Mithapur",
                            "areaName": "Mithapur",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                              "South Indian"
                            ],
                            "avgRating": 4,
                            "parentId": "8016",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "5K+",
                            "promoted": true,
                            "adTrackingId": "cid=14328658~p=2~adgrpid=14328658#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=88779~eid=a41fa488-7d0a-42ca-8fcf-31ed9f0f0406~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 53,
                              "lastMileTravel": 3.9,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "3.9 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "₹100 OFF",
                              "subHeader": "ABOVE ₹199",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "3.3",
                                "ratingCount": "1K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=88779",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "345751",
                            "name": "Anna ka Dosa",
                            "cloudinaryImageId": "sz3daqlxq5vkllaang6w",
                            "locality": "Boring Road",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                              "South Indian"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "parentId": "5062",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 48,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "10% OFF",
                              "subHeader": "UPTO ₹40"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=345751",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "411673",
                            "name": "Hotel Anand Sagar",
                            "cloudinaryImageId": "umlluzualet7ewvbbwqs",
                            "locality": "Bankman Colony",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "North Indian",
                              "Biryani",
                              "Desserts"
                            ],
                            "avgRating": 4.3,
                            "parentId": "247071",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 60,
                              "lastMileTravel": 3.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "60-65 mins",
                              "lastMileTravelString": "3.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "discountTag": "FLAT DEAL"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=411673",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "702495",
                            "name": "Amma Kitchen",
                            "cloudinaryImageId": "feb3a5f4ac0684cdc90dafe0d1fcde97",
                            "locality": "Muradpur",
                            "areaName": "Fraser Road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bihari",
                              "North Indian"
                            ],
                            "avgRating": 4.4,
                            "parentId": "31757",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "promoted": true,
                            "adTrackingId": "cid=14041726~p=3~adgrpid=14041726#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=702495~eid=1eabc1af-8c3a-4f27-916f-6d8f33c30599~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 62,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "60-65 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:30:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=702495",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "238672",
                            "name": "Rajdhani Hotel",
                            "cloudinaryImageId": "drgphrpjbnqcwjsxaiod",
                            "locality": "Station Road",
                            "areaName": "Patna Junction",
                            "costForTwo": "₹320 for two",
                            "cuisines": [
                              "Chinese",
                              "Indian",
                              "Tandoor"
                            ],
                            "avgRating": 4,
                            "parentId": "165478",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 35,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "35-40 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=238672",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "676526",
                            "name": "Paratha Junction",
                            "cloudinaryImageId": "d5dec2566e278974bc2d40f4e3136164",
                            "locality": "Patrakar Nagar",
                            "areaName": "Kankarbagh",
                            "costForTwo": "₹149 for two",
                            "cuisines": [
                              "South Indian"
                            ],
                            "avgRating": 4,
                            "veg": true,
                            "parentId": "3467",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 59,
                              "lastMileTravel": 2,
                              "serviceability": "SERVICEABLE",
                              "slaString": "55-60 mins",
                              "lastMileTravelString": "2.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 13:30:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=676526",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "790423",
                            "name": "Hops&Chops",
                            "cloudinaryImageId": "d9cc826457dcb14c39699f94851ee8d8",
                            "locality": "Fantasy Club",
                            "areaName": "Subhash Nagar Road ",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                              "Indian"
                            ],
                            "avgRating": 4,
                            "parentId": "469533",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "20+",
                            "promoted": true,
                            "adTrackingId": "cid=14156959~p=4~adgrpid=14156959#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790423~eid=e43afbcd-8e96-4553-9d27-69300b1a83e4~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 50,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 22:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "15% OFF",
                              "subHeader": "UPTO ₹100"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=790423",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "550907",
                            "name": "The Dessert Zone",
                            "cloudinaryImageId": "c447c9ce7d0bbe78e46141e866236762",
                            "locality": "Sri Krishna Puri",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bakery",
                              "Desserts",
                              "Ice Cream",
                              "Beverages"
                            ],
                            "avgRating": 4.4,
                            "parentId": "10414",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 45,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=550907",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "561782",
                            "name": "Indiana Burgers",
                            "cloudinaryImageId": "xleqnzt2tk6hrndpenjo",
                            "locality": "Boring Road",
                            "areaName": "Fraser Road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Burgers",
                              "American",
                              "Fast Food",
                              "Beverages",
                              "Desserts"
                            ],
                            "avgRating": 4.3,
                            "parentId": "5714",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "500+",
                            "sla": {
                              "deliveryTime": 45,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=561782",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "882986",
                            "name": "My Royals Bakery",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/ce1c7381-aa01-4ad3-a45f-00a1fae20ff2_882986.jpg",
                            "locality": "Sumitra Devi Path",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹700 for two",
                            "cuisines": [
                              "Bakery"
                            ],
                            "avgRating": 4,
                            "parentId": "517803",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "10+",
                            "promoted": true,
                            "adTrackingId": "cid=14156951~p=6~adgrpid=14156951#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=882986~eid=90ab4f03-1647-4247-841f-976246d7ab0e~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 48,
                              "lastMileTravel": 3.9,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "3.9 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:55:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "60% OFF",
                              "subHeader": "UPTO ₹120"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=882986",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "574386",
                            "name": "Momo Zone - The Momo Company",
                            "cloudinaryImageId": "eeiu6kkzygcvp20znlg4",
                            "locality": "Fraser Road",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Chinese",
                              "Tibetan",
                              "Fast Food"
                            ],
                            "avgRating": 3.9,
                            "parentId": "382343",
                            "avgRatingString": "3.9",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 43,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "4.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=574386",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "809901",
                            "name": "Vadilal Ice Creams",
                            "cloudinaryImageId": "554235ad5fc25e3ace1afddae17822ae",
                            "locality": "Tilak Marg",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                              "Ice Cream",
                              "Desserts"
                            ],
                            "avgRating": 4.6,
                            "parentId": "11745",
                            "avgRatingString": "4.6",
                            "totalRatingsString": "50+",
                            "sla": {
                              "deliveryTime": 46,
                              "lastMileTravel": 6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "6.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 00:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "10% OFF",
                              "subHeader": "UPTO ₹40"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=809901",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "458871",
                            "name": "The Redvelvet Hotel Samarpan",
                            "cloudinaryImageId": "ryvuc7zmnzpbuum3dvbe",
                            "locality": "Income Tax Chouraha",
                            "areaName": "Kidwaipuri",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                              "Biryani",
                              "South Indian",
                              "Tandoor",
                              "Continental",
                              "Mexican",
                              "Seafood",
                              "Chinese"
                            ],
                            "avgRating": 4.1,
                            "parentId": "277936",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "20+",
                            "promoted": true,
                            "adTrackingId": "cid=14375493~p=7~adgrpid=14375493#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=458871~eid=a5fbc5be-1ccc-4797-912f-dcb5f389bf56~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 54,
                              "lastMileTravel": 3,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "3.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "subHeader": "UPTO ₹100"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=458871",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "695596",
                            "name": "IGP Cakes",
                            "cloudinaryImageId": "cc84d172c8acb034e61ffaeb2d2557e3",
                            "locality": "Shree Raj Complex",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹299 for two",
                            "cuisines": [
                              "Desserts",
                              "Bakery"
                            ],
                            "avgRating": 4.5,
                            "veg": true,
                            "parentId": "392350",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 44,
                              "lastMileTravel": 5,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "5.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "60% OFF",
                              "subHeader": "UPTO ₹120"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=695596",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "305275",
                            "name": "Satyam Family Restaurant",
                            "cloudinaryImageId": "hnvl4dwteadukt5pfq1s",
                            "locality": "Bhootnath Road",
                            "areaName": "Rajendra Nagar",
                            "costForTwo": "₹199 for two",
                            "cuisines": [
                              "Indian"
                            ],
                            "avgRating": 3.8,
                            "parentId": "178948",
                            "avgRatingString": "3.8",
                            "totalRatingsString": "100+",
                            "promoted": true,
                            "adTrackingId": "cid=14328668~p=8~adgrpid=14328668#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=305275~eid=db28fc94-642a-424f-ab22-44d90cf865c3~srvts=1718248625136~collid=45826",
                            "sla": {
                              "deliveryTime": 70,
                              "lastMileTravel": 5.8,
                              "serviceability": "SERVICEABLE",
                              "slaString": "70-75 mins",
                              "lastMileTravelString": "5.8 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 16:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "description": "OnlyOnSwiggy"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                        "description": "OnlyOnSwiggy"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "60% OFF",
                              "subHeader": "UPTO ₹120"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=305275",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "562924",
                            "name": "WarmOven Cake & Desserts",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/fe4be499-c9a9-4685-aa56-996987165436_562924.JPG",
                            "locality": "Fraser Road",
                            "areaName": "Sri Krishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Bakery",
                              "Desserts",
                              "Ice Cream",
                              "Beverages"
                            ],
                            "avgRating": 4.4,
                            "parentId": "9696",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "1K+",
                            "sla": {
                              "deliveryTime": 52,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "50-55 mins",
                              "lastMileTravelString": "4.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=562924",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "786467",
                            "name": "Paratha Wala",
                            "cloudinaryImageId": "af8349c33cc194911e3870097f79b0d5",
                            "locality": "Mahesh Nagar",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Thalis",
                              "Chinese"
                            ],
                            "avgRating": 3.2,
                            "veg": true,
                            "parentId": "13893",
                            "avgRatingString": "3.2",
                            "totalRatingsString": "20+",
                            "sla": {
                              "deliveryTime": 62,
                              "lastMileTravel": 6.7,
                              "serviceability": "SERVICEABLE",
                              "slaString": "60-65 mins",
                              "lastMileTravelString": "6.6 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  "badgeObject": [
                                    {
                                      "attributes": {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                      }
                                    }
                                  ]
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "10% OFF",
                              "subHeader": "UPTO ₹40"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=786467",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "561503",
                            "name": "Kaati Zone Rolls & Wraps",
                            "cloudinaryImageId": "fbvndqwcv3zrmxiusccw",
                            "locality": "Sri Krishna Puri",
                            "areaName": "Fraser Road",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "Fast Food",
                              "Bengali",
                              "Beverages",
                              "Desserts"
                            ],
                            "avgRating": 4.4,
                            "parentId": "248306",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 43,
                              "lastMileTravel": 4.6,
                              "serviceability": "SERVICEABLE",
                              "slaString": "40-45 mins",
                              "lastMileTravelString": "4.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-14 03:00:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textExtendedBadges": {
                                  
                                },
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "30% OFF",
                              "subHeader": "UPTO ₹75"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=561503",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        },
                        {
                          "info": {
                            "id": "763914",
                            "name": "Garden Bakery",
                            "cloudinaryImageId": "e311b91cddc5830fa58777f967c62389",
                            "locality": "Gandhi Maidan",
                            "areaName": "Srikrishnapuri",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                              "Cakes and Pastries"
                            ],
                            "avgRating": 3.9,
                            "veg": true,
                            "parentId": "86336",
                            "avgRatingString": "3.9",
                            "totalRatingsString": "100+",
                            "sla": {
                              "deliveryTime": 47,
                              "lastMileTravel": 4,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 mins",
                              "lastMileTravelString": "4.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2024-06-13 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              
                            },
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                              "entityBadges": {
                                "textBased": {
                                  
                                },
                                "imageBased": {
                                  
                                },
                                "textExtendedBadges": {
                                  
                                }
                              }
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "60% OFF",
                              "subHeader": "UPTO ₹120"
                            },
                            "differentiatedUi": {
                              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                              "differentiatedUiMediaDetails": {
                                "lottie": {
                                  
                                },
                                "video": {
                                  
                                }
                              }
                            },
                            "reviewsSummary": {
                              
                            },
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {
                              
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {
                            
                          },
                          "cta": {
                            "link": "swiggy://menu?restaurant_id=763914",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                          }
                        }
                      ],
                      "theme": "DELIVERING_NOW",
                      "collectionId": "45826",
                      "style": {
                        
                      }
                    }
                  },
                  "footer": {
                    "labelWrapper": {
                      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
                      "text": "See all restaurants",
                      "textColor": "#ffffff",
                      "fontSize": 17,
                      "fontName": "FONT_NAME_BOLD",
                      "alignment": "ALIGNMENT_CENTER",
                      "borderRadius": 6,
                      "margin": {
                        "left": 16,
                        "top": 16,
                        "right": 16,
                        "bottom": 16
                      },
                      "padding": {
                        "top": 18,
                        "bottom": 18
                      },
                      "backgroundColor": "#e46d47",
                      "cta": {
                        "link": "swiggy://restaurantList",
                        "text": "See all restaurants",
                        "type": "DEEPLINK"
                      },
                      "maxLines": 1
                    }
                  }
                }
              }
            ],
            "firstOffsetRequest": true,
            "cacheExpiryTime": {
              "value": 600
            },
            "nextFetch": 3
          },
          "requestId": "17b6b5ac-750a-43fd-a8c5-cedb0c551d88"
        },
        "tid": "f6c528ef-0446-410a-903e-932af7fbd2ee",
        "sid": "edk1e455-1b41-4e9e-aa7c-e4f491b0f275",
        "deviceId": "9e4c7565-8c6c-7734-5a4a-178f473ae661",
        "csrfToken": "OGqiy9co6XSa-z_YkC7_-1gY-YWE5WQtkVXCCJng"
      }
]

const RestaurantCard = (props) => {
    return (
        <div className='res-card' style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/11/b6374a82-8946-4649-be36-f97e5b228665_869350.jpg' alt='Restaurant' style={{ width: "100%", height: "auto", borderRadius: "5px" }} />
            <h3>{props.info.name}</h3>
            <h4>Rating: {props.info.rating}</h4>
            <h4>Cuisine: {props.info.cuisine}</h4>
            <h4>Location: {props.info.location}</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <RestaurantCard info={obj.info} />
            <RestaurantCard info={obj.info} />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
