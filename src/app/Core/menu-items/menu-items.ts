import { Injectable } from "@angular/core";

/*
 * Menu interface
 */
export interface Menu {
  state: string;
  name?: string;
  type?: string;
  icon?: string;
  children?: Menu[];
}

// const AdminItems = {
//   state: "admin-panel",
//   name: "ADMIN PANEL",
//   type: "link",
//   icon: "perm_identity",
// };

const HeaderOneItems = [
  {
    state: "products",
    name: "DESTINATIONS",
    type: "sub",
    mega: true,
    icon: "party_mode",
    children: [
      {
        state: "men",
        name: "AFRICA",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/men",
            queryState: "Jeans",
            name: "MOROCCO",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/men",
            queryState: "Jackets",
            name: "Egypt",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/men",
            queryState: "Shirt",
            name: "south-africa",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/men",
            queryState: "T-Shirt",
            name: "kenya",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "woman",
        name: "ASIA",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/woman",
            queryState: "Dresses",
            name: "thailand",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/woman",
            queryState: "Shirt",
            name: "malaysia",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/woman",
            queryState: "T-Shirt",
            name: "india",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "gadgets",
        name: "EUROPE",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/gadgets",
            queryState: "Headphone",
            name: "iceland",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/gadgets",
            queryState: "Smartphone",
            name: "spain",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/gadgets",
            queryState: "Watch",
            name: "greece",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/gadgets",
            queryState: "Speaker",
            name: "albania",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "accessories",
        name: "NORTH AMERICA",
        type: "sub",
        icon: "arrow_right_alt",
        // children:[
        //   {
        //     state: 'products/accessories',
        //     queryState:'Laptap',
        //     name: 'LAPTOP ACCESSORIES',
        //     type: 'queryParams',
        //     icon: 'arrow_right_alt',
        //   },
        //   {
        //     state: 'products/accessories',
        //     queryState:'Belts',
        //     name: 'BELTS',
        //     type: 'queryParams',
        //     icon: 'arrow_right_alt',
        //   },
        //   {
        //     state: 'products/accessories',
        //     queryState:'Jewellery',
        //     name: 'JEWELLERY',
        //     type: 'queryParams',
        //     icon: 'arrow_right_alt',
        //   }
        // ]
      },
    ],
  },

  {
    state: "products",
    name: "TRAVEL STYLES",
    type: "sub",
    mega: true,
    icon: "party_mode",
    children: [
      {
        state: "men",
        name: "ADVENTURE",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/men",
            queryState: "Jeans",
            name: "adventure",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/men",
            queryState: "Jackets",
            name: "hiking-trekking",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/men",
            queryState: "Shirt",
            name: "wildlife",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/men",
            queryState: "T-Shirt",
            name: "safari",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "woman",
        name: "CULTURAL",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/woman",
            queryState: "Dresses",
            name: "christmas-new-year",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/woman",
            queryState: "Shirt",
            name: "discovery",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/woman",
            queryState: "T-Shirt",
            name: "in-depth-cultural",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "gadgets",
        name: "Marine",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/gadgets",
            queryState: "Headphone",
            name: "river-cruise",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/gadgets",
            queryState: "Smartphone",
            name: "ocean-cruise",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/gadgets",
            queryState: "Watch",
            name: "sailing",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/gadgets",
            queryState: "Speaker",
            name: "boat",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
      {
        state: "accessories",
        name: "EVENTS",
        type: "sub",
        icon: "arrow_right_alt",
        children: [
          {
            state: "products/accessories",
            queryState: "Laptap",
            name: "new years",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/accessories",
            queryState: "Belts",
            name: "oktoberfest",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
          {
            state: "products/accessories",
            queryState: "Jewellery",
            name: "seasonal",
            type: "queryParams",
            icon: "arrow_right_alt",
          },
        ],
      },
    ],
  },

  {
    state: "contact",
    name: "CONTACT US",
    type: "link",
    icon: "perm_contact_calendar",
  },
  {
    state: "session/signin",
    name: "Log in",
    type: "register",
    icon: "perm_identity",
  },
  {
    state: "session/signup",
    name: "Sing Up",
    type: "link",
    icon: "perm_identity",
  },
  {
    state: "ession/signin",
    name: "Logout",
    type: "reports",
    icon: "perm_identity",
  },
  {
    state: "admin-panel",
    name: "manage booking",
    type: "link",
    icon: "perm_identity",
  }
];

const FooterOneItems = [
  {
    state: "about",
    name: "ABOUT",
    type: "sub",
    icon: "",
    children: [
      {
        state: "about",
        name: "ABOUT",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "term-condition",
        name: "TERM AND CONDITION",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "privacy-policy",
        name: "PRIVACY POLICY",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "faq",
        name: "FAQ",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "contact",
        name: "CONTACT US",
        type: "link",
        icon: "perm_contact_calendar",
      },
    ],
  },
  {
    state: "",
    name: "SESSION",
    type: "sub",
    icon: "",
    children: [
      {
        state: "session/signin",
        name: "SIGN IN",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "session/signup",
        name: "REGISTER",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "session/forgot-password",
        name: "FORGET PASSWORD",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "session/thank-you",
        name: "THANK YOU",
        type: "link",
        icon: "arrow_right_alt",
      },
    ],
  },
  {
    state: "",
    name: "CATEGORIES",
    type: "sub",
    icon: "",
    children: [
      {
        state: "products/women",
        name: "WOMEN",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "products/men",
        name: "MEN",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "products/accesories",
        name: "ACCESSORIES",
        type: "link",
        icon: "arrow_right_alt",
      },
      {
        state: "products/gadgets",
        name: "GADGETS",
        type: "link",
        icon: "arrow_right_alt",
      },
    ],
  },
  {
    state: "",
    name: "SOCIAL",
    type: "sub",
    icon: "",
    children: [
      {
        state: "https://www.facebook.com/",
        name: "Facebook",
        type: "social_link",
        icon: "arrow_right_alt",
      },
      {
        state: "https://twitter.com/",
        name: "Twitter",
        type: "social_link",
        icon: "arrow_right_alt",
      },
      {
        state: "https://www.youtube.com/",
        name: "Youtube",
        type: "social_link",
        icon: "arrow_right_alt",
      },
      {
        state: "https://plus.google.com",
        name: "Google Plus",
        type: "social_link",
        icon: "arrow_right_alt",
      },
    ],
  },
];

@Injectable()
export class MenuItems {
  /*
   * Get all header menu
   */
  getMainMenu(): Menu[] {
    return HeaderOneItems;
  }

  /*
   * Get all footer menu
   */
  getFooterOneMenu(): Menu[] {
    return FooterOneItems;
  }
}
