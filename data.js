const sampleListing = [
  {
    title: "Single Occupancy AC Room - Boys PG",
    description: 
      "Private single room with attached bathroom, study table, wardrobe, and high-speed WiFi. Located near college campus with 24/7 security and mess facility.",
    image: 
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    price: 8500,
    location: "Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Single",
    gender: "Boys"
  },
  {
    title: "Double Sharing Hostel - Girls",
    description: 
      "Spacious twin-sharing room with bunk beds, individual lockers, and shared study area. Includes breakfast and dinner. Walking distance from main market.",
    image: 
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Vijay Nagar",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Double",
    gender: "Girls"
  },
  {
    title: "Triple Sharing Budget Hostel - Boys",
    description: 
      "Affordable triple sharing room ideal for students. Includes bunk beds, common study hall, RO water, and laundry service. No hidden charges.",
    image: 
      "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Triple",
    gender: "Boys"
  },
  {
    title: "Modern PG with Meals - Co-ed Building",
    description: 
      "Fully furnished PG with separate wings for boys and girls. Rent includes 3 meals, WiFi, electricity, and weekly room cleaning. CCTV monitored.",
    image: 
      "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=800&q=60",
    price: 7000,
    location: "Meerut",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Double",
    gender: "Boys/Girls"
  },
  {
    title: "Single Room with Private Kitchenette",
    description:
      "Ideal for final year students who prefer cooking. Comes with a mini fridge, induction cooktop, attached bath, and independent entry. Boys only.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    price: 9500,
    location: "Ghaziabad",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Single",
    gender: "Boys"
  },
  {
    title: "Girls Hostel near Medical College",
    description: 
      "Safe and secure girls hostel with biometric entry, warden on premises, and emergency medical support. Triple sharing with attached washroom.",
    image: 
      "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Saharanpur",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Triple",
    gender: "Girls"
  },
  {
    title: "Premium Single Studio PG - Boys",
    description: 
      "High-end studio PG with AC, geyser, smart TV, and daily housekeeping. Includes gym access and covered parking. Suitable for working students.",
    image: 
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    price: 12000,
    location: "Noida",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Single",
    gender: "Boys"
  },
  {
    title: "Double Sharing Hostel - Boys",
    description: 
      "Clean and ventilated double sharing room with two single beds, study tables, and shared balcony. Mess serves North Indian food. Near bus stand.",
    image: 
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Meerut",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Double",
    gender: "Boys"
  },
  {
    title: "Girls PG with AC - Twin Sharing",
    description: 
      "AC twin sharing room with attached bathroom, wardrobe, and mirror. Includes breakfast and dinner. Ladies-only floor with keypad entry.",
    image: 
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    price: 8000,
    location: "Saharanpur",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Double",
    gender: "Girls"
  },
  {
    title: "Budget Dormitory Bed - Students Only",
    description: 
      "Cheapest option for students on a tight budget. Dormitory style with 6 beds per room, personal locker, and shared bathroom. Common room with TV.",
    image:  
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Station Road, Meerut ",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Dormitory",
    gender: "Boys"
  },
  {
    title: "Girls PG near City College",
    description: 
      "Walking distance from City College. Twin sharing with attached bathroom, study table, and wardrobe. Rent includes WiFi and breakfast. Warden available 24/7.",
    image: 
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=800&q=60",
    price: 6500,
    location: "College Street, Meerut",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Double",
    gender: "Girls"
  },
  {
    title: "Boys Hostel with Gym - Single Room",
    description: 
      "Single occupancy room with attached bath, AC, and study desk. Hostel has a gym, indoor games room, and 24-hour hot water. Mess serves veg/non-veg.",
    image: 
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Meerut",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Single",
    gender: "Boys"
  },
  {
    title: "Triple Sharing PG - Working Students",
    description: 
      "Quiet PG suitable for working students. Triple sharing room with individual beds, lockers, and shared kitchen access. Electricity extra as per usage.",
    image: 
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Andheri East, Meerut ",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Triple",
    gender: "Boys"
  },
  {
    title: "Girls Hostel - Four Sharing Budget",
    description: 
      "Affordable four-sharing room for students. Bunk beds with personal storage, common study room, and RO water. Mess provides 3 meals. CCTV at entrance.",
    image:
      "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Four",
    gender: "Girls"
  },
  {
    title: "Single AC PG with Attached Bath - Co-ed",
    description: 
      "Modern single room with AC, geyser, and attached bathroom. Building has separate floors for boys and girls. Near metro station and market.",
    image: 
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    price: 11000,
    location: "Rajouri Garden, Meerut",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Single",
    gender: "Boys/Girls"
  },
  {
    title: "Boys Hostel near Engineering College",
    description: 
      "Purpose-built hostel for engineering students. Double sharing rooms with study tables, LAN port, and shared balcony. Canteen serves South Indian food.",
    image: 
      "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Gandhi colony, Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Double",
    gender: "Boys"
  },
  {
    title: "Girls PG with Attached Kitchen",
    description: 
      "Independent PG for girls with a small attached kitchen in each room. Ideal for students who cook their own food. Includes WiFi and water. No curfew.",
    image: 
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60",
    price: 9000,
    location: "Mandi Road, Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Single",
    gender: "Girls"
  },
  {
    title: "Budget Dormitory - Girls Only",
    description: 
      "Safe dormitory for girls with 4 beds per room, personal lockers, and shared washroom. Includes breakfast. Located near women's college.",
    image: 
      "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Lakshmi Chowk, Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Dormitory",
    gender: "Girls"
  },
  {
    title: "Premium Boys PG - Single with Balcony",
    description: 
      "Spacious single room with private balcony, AC, attached bath, and daily cleaning. Building has lift, parking, and power backup. Suitable for final year students.",
    image:  
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=60",
    price: 13000,
    location: "Almaspur, Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "PG",
    sharing: "Single",
    gender: "Boys"
  },
  {
    title: "Twin Sharing Hostel - Near University",
    description: 
      "Two-bed room with study tables and wardrobe. Hostel has a library, common room, and mess. Walking distance from university main gate. Boys only.",
    image:  
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Bhopa Road, Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "Hostel",
    sharing: "Double",
    gender: "Boys"
  }
];

module.exports = {data: sampleListing};