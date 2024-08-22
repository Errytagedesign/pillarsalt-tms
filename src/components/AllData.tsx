import userIcon from '@/assets/userIcon.png';
import { IStoreSetup } from '@/Interfaces/GlobalInterfaces';
import AllAds from './DashboardComps/AdsComps/AllAds';
import CompletedAds from './DashboardComps/AdsComps/CompletedAds';
import OngoingAds from './DashboardComps/AdsComps/OngoingAds';
import pic1 from '@/assets/productImg.png';

import { IBankDetailsStepform } from '@/Interfaces/OnboardingInterfaces';

export const storeCategoryList = [
  {
    id: 'op1',
    title: '🍔 Fashion and Apparel',
    value: '🍔 Fashion and Apparel',
  },
  {
    id: 'op2',
    title: '🍔 Home and Living',
    value: '🍔 Home and Living',
  },
  {
    id: 'op3',
    title: '🍔 Electronics and Gadgets',
    value: '🍔 Electronics and Gadgets',
  },
  {
    id: 'op4',
    title: '🍔 Beauty and Personal Care',
    value: '🍔 Beauty and Personal Care',
  },
  {
    id: 'op5',
    title: '🍔 Arts and Craft',
    value: '🍔 Arts and Craft',
  },
  {
    id: 'op6',
    title: '🍔 Books and Stationery',
    value: '🍔 Books and Stationery',
  },
  {
    id: 'op7',
    title: '🍔 Toys and Games',
    value: '🍔 Toys and Games',
  },
  {
    id: 'op8',
    title: '🍔 Health and Wellness',
    value: '🍔 Health and Wellness',
  },
  {
    id: 'op9',
    title: '🍔 Services',
    value: '🍔 Services',
  },
];

export const storeSetupData = (
  val: any,
  data: any,
  provinceCity: any[],
  canadianProvince: any[],
): IStoreSetup[] => {
  return [
    {
      type: 'text',
      label: 'What is your store name?',
      id: 'storeName',
      name: 'storeName',
      placeholder: 'Input store name',
      value: val?.storeName,
      require: true,
    },
    {
      type: 'text',
      label: 'Store websites (optional)',
      id: 'website',
      name: 'website',
      placeholder: 'inpute website link here ',
      value: val?.website,
      require: false,
    },
    {
      type: 'textarea',
      label: 'Brief Store Description',
      id: 'description',
      name: 'description',
      placeholder: 'Tell us about your store and what it offers.',
      value: val?.description,
      require: true,
    },
    {
      label: 'Store Category',
      id: 'vendaCategoryId',
      name: 'vendaCategoryId',
      type: 'select',
      placeholder: '---- select store category ---',
      options: data,
      value: val?.vendaCategoryId,
      require: true,
      disabled: val?.vendaCategoryId !== '' ? true : false,
    },
    {
      type: 'text',
      label: 'Full Address including unit number',
      id: 'apartment',
      name: 'apartment',
      placeholder: 'Inpute Your store address here ',
      value: val?.apartment,
      require: true,
    },
    {
      type: 'select',
      label: 'Province',
      id: 'province',
      name: 'province',
      placeholder: '---- select your province ---',
      value: val?.province,
      canadianProvince: canadianProvince,
      require: true,
    },
    {
      type: 'select',
      label: 'City',
      id: 'city',
      name: 'city',
      placeholder: '---- select your city ---',
      value: val?.city,
      canadianCities: provinceCity,
      require: true,
    },

    {
      type: 'text',
      label: 'Postal Code',
      id: 'postalCode',
      name: 'postalCode',
      placeholder: 'Input your postal code',
      value: val?.postalCode,
      require: false,
    },
    {
      type: 'email',
      label: 'Store Email Address',
      id: 'storeEmail',
      name: 'storeEmail',
      placeholder: 'Input email address',
      value: val?.storeEmail,
      disabled: true,
    },

    {
      type: 'tel',
      label: 'Phone Number',
      id: 'phoneNumber',
      name: 'phoneNumber',
      placeholder: 'Input store phone number',
      value: val?.phoneNumber,
      require: false,
    },

    {
      id: 'displayNumEmail',
      name: 'displayNumEmail',
      type: 'checkbox',
      label: 'Display Phone Number and Email Address',
      checked: val.displayNumEmail,
      require: false,
    },
  ];
};

export const updateStoreProfileData = (
  val: any,
  data: any,
  vendaCategoryId: any,
  provinceCity: any[],
  canadianProvince: any[],
): IStoreSetup[] => {
  return [
    {
      type: 'text',
      label: 'What is your store name?',
      id: 'storeName',
      name: 'storeName',
      placeholder: 'Input store name',
      value: val?.storeName,
      require: true,
    },
    {
      type: 'text',
      label: 'Store websites (optional)',
      id: 'website',
      name: 'website',
      placeholder: 'inpute website link here ',
      value: val?.website,
      require: false,
    },
    {
      type: 'textarea',
      label: 'Brief Store Description',
      id: 'description',
      name: 'description',
      placeholder: 'Tell us about your store and what it offers.',
      value: val?.description,
      require: true,
    },
    {
      label: 'Store Category',
      id: 'vendaCategoryId',
      name: 'vendaCategoryId',
      type: 'select',
      placeholder: '---- select store category ---',
      options: data,
      value: vendaCategoryId,
      require: true,
      disabled: true,
    },
    {
      type: 'text',
      label: 'Apartment / Unit Number',
      id: 'apartment',
      name: 'apartment',
      placeholder: 'Inpute Your store address here ',
      value: val?.apartment,
      require: true,
    },
    {
      type: 'select',
      label: 'City',
      id: 'city',
      name: 'city',
      placeholder: '---- select your city ---',
      value: val?.city,
      canadianCities: provinceCity,
      require: true,
    },
    {
      type: 'select',
      label: 'Province',
      id: 'province',
      name: 'province',
      placeholder: '---- select your province ---',
      value: val?.province,
      canadianProvince: canadianProvince,
      require: true,
    },
    {
      type: 'text',
      label: 'Postal Code',
      id: 'postalCode',
      name: 'postalCode',
      placeholder: 'Input your postal code',
      value: val?.postalCode,
      require: false,
    },
    {
      type: 'email',
      label: 'Store Email Address',
      id: 'storeEmail',
      name: 'storeEmail',
      placeholder: 'Input email address',
      value: val?.storeEmail,
      require: true,
    },

    {
      type: 'tel',
      label: 'Phone Number',
      id: 'phoneNumber',
      name: 'phoneNumber',
      placeholder: 'Input store phone number',
      value: val?.phoneNumber,
      require: false,
    },

    {
      id: 'displayNumEmail',
      name: 'displayNumEmail',
      type: 'checkbox',
      label: 'Display Phone Number and Email Address',
      checked: val.displayNumEmail,
      require: false,
    },
  ];
};

export const countriesCallCode = [
  { name: 'Afghanistan', flag: '🇦🇫', callingCode: '+93' },
  { name: 'Albania', flag: '🇦🇱', callingCode: '+355' },
  { name: 'Algeria', flag: '🇩🇿', callingCode: '+213' },
  { name: 'Andorra', flag: '🇦🇩', callingCode: '+376' },
  { name: 'Angola', flag: '🇦🇴', callingCode: '+244' },
  { name: 'Antigua and Barbuda', flag: '🇦🇬', callingCode: '+1' },
  { name: 'Argentina', flag: '🇦🇷', callingCode: '+54' },
  { name: 'Armenia', flag: '🇦🇲', callingCode: '+374' },
  { name: 'Australia', flag: '🇦🇺', callingCode: '+61' },
  { name: 'Austria', flag: '🇦🇹', callingCode: '+43' },
  { name: 'Azerbaijan', flag: '🇦🇿', callingCode: '+994' },
  { name: 'Bahamas', flag: '🇧🇸', callingCode: '+1' },
  { name: 'Bahrain', flag: '🇧🇭', callingCode: '+973' },
  { name: 'Bangladesh', flag: '🇧🇩', callingCode: '+880' },
  { name: 'Barbados', flag: '🇧🇧', callingCode: '+1' },
  { name: 'Belarus', flag: '🇧🇾', callingCode: '+375' },
  { name: 'Belgium', flag: '🇧🇪', callingCode: '+32' },
  { name: 'Belize', flag: '🇧🇿', callingCode: '+501' },
  { name: 'Benin', flag: '🇧🇯', callingCode: '+229' },
  { name: 'Bhutan', flag: '🇧🇹', callingCode: '+975' },
  { name: 'Bolivia', flag: '🇧🇴', callingCode: '+591' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦', callingCode: '+387' },
  { name: 'Botswana', flag: '🇧🇼', callingCode: '+267' },
  { name: 'Brazil', flag: '🇧🇷', callingCode: '+55' },
  { name: 'Brunei', flag: '🇧🇳', callingCode: '+673' },
  { name: 'Bulgaria', flag: '🇧🇬', callingCode: '+359' },
  { name: 'Burkina Faso', flag: '🇧🇫', callingCode: '+226' },
  { name: 'Burundi', flag: '🇧🇮', callingCode: '+257' },
  { name: 'Cabo Verde', flag: '🇨🇻', callingCode: '+238' },
  { name: 'Cambodia', flag: '🇰🇭', callingCode: '+855' },
  { name: 'Cameroon', flag: '🇨🇲', callingCode: '+237' },
  { name: 'Canada', flag: '🇨🇦', callingCode: '+1' },
  { name: 'Central African Republic', flag: '🇨🇫', callingCode: '+236' },
  { name: 'Chad', flag: '🇹🇩', callingCode: '+235' },
  { name: 'Chile', flag: '🇨🇱', callingCode: '+56' },
  { name: 'China', flag: '🇨🇳', callingCode: '+86' },
  { name: 'Colombia', flag: '🇨🇴', callingCode: '+57' },
  { name: 'Comoros', flag: '🇰🇲', callingCode: '+269' },
  { name: 'Congo', flag: '🇨🇬', callingCode: '+242' },
  { name: 'Costa Rica', flag: '🇨🇷', callingCode: '+506' },
  { name: 'Croatia', flag: '🇭🇷', callingCode: '+385' },
  { name: 'Cuba', flag: '🇨🇺', callingCode: '+53' },
  { name: 'Cyprus', flag: '🇨🇾', callingCode: '+357' },
  { name: 'Czech Republic', flag: '🇨🇿', callingCode: '+420' },
  { name: 'Denmark', flag: '🇩🇰', callingCode: '+45' },
  { name: 'Djibouti', flag: '🇩🇯', callingCode: '+253' },
  { name: 'Dominica', flag: '🇩🇲', callingCode: '+1' },
  { name: 'Dominican Republic', flag: '🇩🇴', callingCode: '+1' },
  { name: 'Ecuador', flag: '🇪🇨', callingCode: '+593' },
  { name: 'Egypt', flag: '🇪🇬', callingCode: '+20' },
  { name: 'El Salvador', flag: '🇸🇻', callingCode: '+503' },
  { name: 'Equatorial Guinea', flag: '🇬🇶', callingCode: '+240' },
  { name: 'Eritrea', flag: '🇪🇷', callingCode: '+291' },
  { name: 'Estonia', flag: '🇪🇪', callingCode: '+372' },
  { name: 'Eswatini', flag: '🇸🇿', callingCode: '+268' },
  { name: 'Ethiopia', flag: '🇪🇹', callingCode: '+251' },
  { name: 'Fiji', flag: '🇫🇯', callingCode: '+679' },
  { name: 'Finland', flag: '🇫🇮', callingCode: '+358' },
  { name: 'France', flag: '🇫🇷', callingCode: '+33' },
];

export const flagCallCodes = [
  {
    name: 'United Kingdom (UK)',
    flag: '🇬🇧',
    callingCode: '+44',
  },
  {
    name: 'United States of America (USA)',
    flag: '🇺🇸',
    callingCode: '+1',
  },
  {
    name: 'Canada (CAD)',
    flag: '🇨🇦',
    callingCode: '+1',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    callingCode: '+49',
  },
];

export const productCategories = [
  {
    id: 1,
    styleId: 'hotDrinks',
    title: 'Hot Drinks',
  },
  {
    id: 2,
    styleId: 'coldDrinks',
    title: 'Cold Drinks',
  },
  {
    id: 3,
    styleId: 'nativeFoods',
    title: 'Native Foods',
  },
  {
    id: 4,
    styleId: 'frozenFoods',
    title: 'Frozen Foods',
  },
  {
    id: 5,
    styleId: 'bakedFoods',
    title: 'Baked Foods',
  },
  {
    id: 6,
    styleId: 'internationalDishes',
    title: 'International Dishes',
  },
  {
    id: 7,
    styleId: 'specialRecipe',
    title: 'Special Recipe',
  },
];
// export const productCategories = [
//   {
//     id: 'hotDrinks',
//     title: 'Hot Drinks',
//   },
//   {
//     id: 'coldDrinks',
//     title: 'Cold Drinks',
//   },
//   {
//     id: 'nativeFoods',
//     title: 'Native Foods',
//   },
//   {
//     id: 'frozenFoods',
//     title: 'Frozen Foods',
//   },
//   {
//     id: 'bakedFoods',
//     title: 'Baked Foods',
//   },
//   {
//     id: 'internationalDishes',
//     title: 'International Dishes',
//   },
//   {
//     id: 'specialRecipe',
//     title: 'Special Recipe',
//   },
// ];

export const paymentSetupInput = (val: any): IBankDetailsStepform[] => {
  return [
    {
      type: 'number',
      label: 'Account Number',
      id: 'accountNumber',
      name: 'accountNumber',
      placeholder: 'Input store name',
      defaultValue: val?.accountNumber,
      require: true,
    },
    {
      type: 'number',
      label: 'Transit Number (Routing No.)',
      id: 'transitNumber',
      name: 'transitNumber',
      placeholder: 'Input store name',
      defaultValue: val?.transitNumber,
      require: true,
    },
    {
      type: 'text',
      label: 'Institution Name',
      id: 'bankName',
      name: 'bankName',
      placeholder: 'Input store name',
      defaultValue: val?.bankName,
      require: true,
    },
    {
      type: 'text',
      label: 'Account Holder',
      id: 'fullName',
      name: 'fullName',
      placeholder: 'Input store name',
      defaultValue: val?.fullName,
      require: true,
    },
  ];
};

export const reviewData = (data: any) => {
  return [
    { id: 1, title: '5 New Reviews', subTitle: 'Recent Reviews', ratings: 5 },
    {
      id: 2,
      title: `${data?.length} Reviews`,
      subTitle: 'Total Reviews ',
      ratings: data?.length,
    },
    {
      id: 3,
      title: '3.5 Star Rating',
      subTitle: 'Average Rating',
      ratings: 3.5,
    },
  ];
};

export const AdsTabsData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'All',
    },

    {
      id: 'tab2',
      title: 'Ongoing Ads',
    },
    {
      id: 'tab3',
      title: 'Completed Ads',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <AllAds /> },
    { id: 'tab2', comp: <OngoingAds /> },
    { id: 'tab3', comp: <CompletedAds /> },
  ],
};

export const ProductListTabsData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Hot Drinks',
    },

    {
      id: 'tab2',
      title: 'Cold Drinks',
    },
    {
      id: 'tab3',
      title: 'Local Made Dishes',
    },
    {
      id: 'tab4',
      title: 'International Dishes',
    },

    {
      id: 'tab5',
      title: 'Bake Foods',
    },
    {
      id: 'tab6',
      title: 'Frozen Foods',
    },
    {
      id: 'tab7',
      title: 'Snacks',
    },
  ],

  // TabContents: (data: any) => {
  //   return [
  //     { id: 'tab1', comp: <HotDrinks data={data} /> },
  //     { id: 'tab2', comp: <ColdDrinks data={data} /> },
  //     { id: 'tab3', comp: <LocalMadeDishes data={data} /> },
  //     { id: 'tab4', comp: <InternationalDishes data={data} /> },
  //     { id: 'tab5', comp: <BakedFood data={data} /> },
  //     { id: 'tab6', comp: <FrozenFoods data={data} /> },
  //     { id: 'tab7', comp: <Snacks data={data} /> },
  //   ];
  // },
};

export const productData = [
  {
    id: 1,
    title: 'Royal Sushi House',
    price: 32,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    status: ' 🍣 Preorder',
    productImage: pic1,
  },
  {
    id: 2,
    title: 'Royal Sushi House',
    price: 22,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    status: ' 🍣 Preorder',
  },
  {
    id: 3,
    title: 'Royal Sushi House',
    price: 42,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    status: ' 🍣 Preorder',
  },
  {
    id: 4,
    title: 'Royal Sushi House',
    price: 32,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    status: ' 🍣 Preorder',
  },
  {
    id: 5,
    title: 'Royal Sushi House',
    price: 12,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    status: ' 🍣 Preorder',
  },
  {
    id: 6,
    title: 'Royal Sushi House',
    price: 37,
    description:
      'Suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ',
    deliveryTime: '30-40',
    productImage: pic1,
    status: ' 🍣 Preorder',
  },
];

export const orderDatas = [
  {
    id: '3421',
    orderItems: [
      { id: '1', title: 'Hot Coffee ($20) x 2' },
      { id: '2', title: 'Baked  Cookies ($5) x 5' },
    ],
    deliveryType: 'Door Delivery',
    userAvatar: userIcon,
    userName: 'Charles Ofor',
    orderInstruction: 'Leave on the Balcony, hit the',
    userNumber: '(225) 555-0118',
    address: '30303 Pacific Avenue',
  },
  {
    id: '3321',
    orderItems: [
      { id: '1', title: 'Hot Coffee ($20) x 2' },
      { id: '2', title: 'Baked  Cookies ($5) x 5' },
    ],
    deliveryType: 'Pickup Delivery',
    userAvatar: userIcon,
    userName: 'Charles Ofor',
    orderInstruction: 'Leave on the Balcony, hit the',
    userNumber: '(225) 555-0118',
    address: '30303 Pacific Avenue',
  },
  {
    id: '3621',
    orderItems: [
      { id: '1', title: 'Hot Coffee ($20) x 2' },
      { id: '2', title: 'Baked  Cookies ($5) x 5' },
    ],
    deliveryType: 'Door Delivery',
    userAvatar: userIcon,
    userName: 'Charles Ofor',
    orderInstruction: 'Leave on the Balcony, hit the',
    userNumber: '(225) 555-0118',
    address: '30303 Pacific Avenue',
  },
  {
    id: '3921',
    orderItems: [
      { id: '1', title: 'Hot Coffee ($20) x 2' },
      { id: '2', title: 'Baked  Cookies ($5) x 5' },
    ],
    deliveryType: 'Pickup Delivery',
    userAvatar: userIcon,
    userName: 'Charles Ofor',
    orderInstruction: 'Leave on the Balcony, hit the',
    userNumber: '(225) 555-0118',
    address: '30303 Pacific Avenue',
  },
];
