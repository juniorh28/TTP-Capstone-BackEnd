//some dummy data to seed the places table
const seedPlaces = [
  {
    name: "FAUSTO MELOTTI: CERAMICS",
    description:
      "Barbara Mathes Gallery is pleased to present Fausto Melotti: Ceramics, a selection of Melotti’s remarkable ceramics from the postwar period. Fausto Melotti (1901-1986) was a central figure in 20th century Italian art who first rose to prominence in the years prior to the Second World War. His unique artistic style synthesized... Dates: Jan 21-May 8, 2021",
    address: "Barbara Mathes Gallery 22 E. 80th Street New York, NY USA",
    category: "art",
    borough: "manhattan",
    imageUrl:
      "http://www.artnet.com/WebServices/images/ll2ae646d9-8d9b-4a16-baf9-49c56304236cllgQTfDrDWQFHNEAG/fausto-melotti-cartoccio,coppetta,coppetta-blu,senza-titolo,tema-e-variazioni-xi,vaso.jpg",
    numOfLikes: 0,
    comments: [],
  },
  {
    name: "SCREEN DRAWINGS",
    description:
      "Based in a process of elimination and manipulation rather than accumulation, this series of drawings are the result of the artist’s meticulous interventions in the weave of metal screen fragments, which are coated in ink and pressed onto paper. Dates: Jan 22-Mar 6, 2021",

    address: "Pace Gallery Online Gallery New York, NY USA",
    category: "art",
    borough: "manhattan",
    imageUrl:
      "http://www.artnet.com/WebServices/images/ll425a34dc-0095-4369-9375-5ef3fd019d83llgnVfDrDWQFHNEAG/artwork.jpg",
    numOfLikes: 0,
    comments: [],
  },

  {
    name:
      "Shaun Leonardo “The Breath of Empty Space at The Bronx Museum of the Arts",
    description:
      "Shaun Leonardo: The Breath of Empty Space presents drawings by the Brooklyn-based artist that critique how mediated images of systemic violence against Black and Brown young men in contemporary American history have shaped our fear, empathy, and perception. Created between 2014 and 2019, the works trace high profile stories of lives ended or forever altered by systems of law enforcement from the 1970s to today.",

    address: "1040 Grand Concourse, Bronx, NY 10456",
    category: "art",
    borough: "bronx",
    imageUrl: "http://www.nyartbeat.com/media/event/2021/9F3D-446",
    numOfLikes: 0,
    comments: [],
  },
  {
    name: "“Marking Time: Art in the Age of Mass Incarceration” Exhibition",
    description:
      "As its first exhibition upon reopening to the public, MoMA PS1 will present a major exhibition exploring the work of artists within US prisons and the centrality of incarceration to contemporary art and culture. Featuring art made by people in prisons and work by nonincarcerated artists concerned with state repression, erasure, and imprisonment, Marking Time: Art in the Age of Mass Incarceration highlights more than 35 artists, including American Artist, Tameca Cole, Russell Craig, Maria Gaspar, James “Yaya” Hough, Jesse Krimes, Mark Loughney, Gilberto Rivera, and Sable Elyse Smith. The exhibition has been updated to reflect the growing COVID-19 crisis in US prisons, featuring new works by exhibition artists made in response to this ongoing emergency. Alongside the exhibition, a series of public programs, education initiatives, and ongoing projects at MoMA PS1 will explore the social and cultural impact of mass incarceration.",
    address: "22-25 Jackson Ave., Long Island City, NY 11101",
    category: "art",
    borough: "queens",
    imageUrl: "http://www.nyartbeat.com/media/event/2020/7347-620",
    numOfLikes: 0,
    comments: [],
  },

  {
    name: "“Design: 1880 to Now” Exhibition at Brooklyn Museum ",
    description:
      "The Brooklyn Museum unveils newly renovated galleries for its renowned Decorative Arts collection with Design: 1880 to Now. The installation draws from the Museum‘s rich holdings of furniture, glass, ceramics, and metalwork dating from the late nineteenth century to the present day. This historical presentation offers competing visions of modernity, highlighting pressing themes from the era such as tensions between craft and industry, innovations in production, and cultural appropriation. The renovation has involved several changes to open up the gallery spaces, make the artworks more visible, improve accessibility, and encourage better visitor flow in the 3,000-square-foot space. Also on view are new contemporary acquisitions by Robert Lugo, Masanori Umeda, and Shiro Kuramata.",
    address: "200 Eastern Parkway, Brooklyn, NY 11238",
    category: "art",
    borough: "brooklyn",
    imageUrl: "http://www.nyartbeat.com/media/event/2020/9240-620",
    numOfLikes: 0,
    comments: [],
  },

  {
    name: "Head to the NYBG's winter wonderland",
    description:
      "The New York Botanical Garden’s GLOW event transforms the garden into a colorful wonderland with thousands of lights. The Enid A. Haupt Conservatory and Reflecting Pool act as the centerpieces, while the surrounding space is filled with music, pop-up dance performances, and live ice sculpting. The outdoor space provides plenty of room to spread out, but tickets must be purchased in advance to allow for social distancing. Cost: Adult tickets are $30",
    address: "2900 Southern Blvd, The Bronx, NY 10458",
    category: "parks",
    borough: "bronx",
    imageUrl:
      "https://assets3.thrillist.com/v1/image/2928216/1584x1054/crop;jpeg_quality=60.jpg",
    numOfLikes: 0,
    comments: [],
  },

  {
    name: "Find cracklin' upstate vibes close to home",
    description:
      "In the mood for a wintry upstate getaway? Pier 17’s The Greens is recreating those snowy, cozy vibes right here in NYC. Reserve a cabin (with a virtual fireplace and an air purifier), order a round of seasonal cocktails designed by award-winning cocktail bar Dante, and drink to not having to drive four hours in the snow to get away from it all. Psst: Scoring a cabin might seem hard, but new reservation slots are released every Monday morning at 10am for the following week, so set your alarm! Cost: Cocktails start at $18",
    address: "89 South St, New York, NY 10038",
    category: "parks",
    borough: "manhattan",
    imageUrl:
      "https://assets3.thrillist.com/v1/image/2928229/1584x1054/crop;jpeg_quality=60.jpg",
    numOfLikes: 0,
    comments: [],
  },
  {
    name: "Sunset Hike",
    description:
      "As the sun hangs low over on the horizon, the park morphs into a magical realm. Witness the wonder of sunset with the Urban Park Rangers.",
    address:
      "Salt Marsh Nature Center in Marine Park, East 33rd Street and Avenue U, Brooklyn",
    category: "parks",
    borough: "brooklyn",
    imageUrl:
      "https://www.nycgovparks.org/pagefiles/108/marine-park-white-island__5808fe91ebec6.jpg",
    numOfLikes: 0,
    comments: [],
  },
  {
    name: "Nature Exploration: Captain Tilly Park",
    description:
      "On this moderately-paced hike, discover the nature of Captain Tilly Park. We recommend wearing comfortable shoes or boots.",
    address: "Chapin Parkway and 85th Avenue in Captain Tilly Park",
    category: "parks",
    borough: "queens",
    imageUrl: "https://www.nycgovparks.org/photo_gallery/full_size/23596.jpg",
    numOfLikes: 0,
    comments: [],
  },
  {
    name: "Nature Exploration: High Rock Park",
    description:
      "On this moderately-paced hike, discover the nature of High Rock Park. We recommend wearing comfortable shoes or boots.",
    address: "Parking Lot in High Rock Park, 200 Nevada Avenue, Staten Island",
    category: "parks",
    borough: "statenisland",
    imageUrl: "https://www.nycgovparks.org/photo_gallery/full_size/21417.jpg",
    numOfLikes: 0,
    comments: [],
  },

  {
    name: "Make My Cake ",
    description:
      "This family-owned business has been baking up its delicious baked goods for over two decades. Josephine Smith’s “Ma Smith” recipes are a combination of southern baking and Harlem vibes.  From specialty cakes to key lime pie — they have a treat for everyone in the family.",
    address: "2380 Adam Clayton Powell Jr Blvd., New York, NY 10030",
    category: "food",
    borough: "manhattan",
    imageUrl:
      "https://www.bakemag.com/-/media/024633A3D87346D48B5A7C4DB31C00A0.ashx?h=300&w=460",
    numOfLikes: 0,
    comments: [],
  },

  {
    name: "Shmidts Candy",
    description:
      "For all of the chocolate lovers out there, Schmidts Candy is the place to get some fantastic treats! This candy shop has been around since 1925 and has continued to handcraft amazing chocolate that makes every occasion a little bit better. The recipes have been passed down throughout the owner’s family and are made with quality ingredients. With a variety of chocolate flavors to choose from, families can take home assorted chocolates or truffles that will be enjoyed by the whole family.",
    address: "9415 Jamaica Ave., Jamaica, NY 11421",
    category: "food",
    borough: "queens",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Schmidt%27s_confectioners_04.jpg/220px-Schmidt%27s_confectioners_04.jpg",
    numOfLikes: 0,
    comments: [],
  },
  {
    name: "La Morada",
    description:
      "Enjoy authentic Mexican cuisine while also enjoying the culture and art that this undocumented family-owned restaurant offers. The owners of La Morada want to preserve and share their food with neighbors and friends which means a lot to them and their family. When this family isn’t cooking in the kitchen, they are actively participating in social justice causes. Whether you want a full course meal or just want to share some homemade guacamole with some friends, La Morada is the place to go!",
    address: "308 Willis Ave., Bronx, New York 10454",
    category: "food",
    borough: "bronx",
    imageUrl:
      "https://storage.googleapis.com/zagat-images/2020/07/c5d1e4bc-la-morada-new-york-storefront.jpg",
    numOfLikes: 0,
    comments: [],
  },
];

module.exports = seedPlaces;
