// High-Fidelity Static Movie Database for CineVerse Clean
// Using High-Quality, Verified OMDb Poster URLs and Thematic Unsplash Backdrop URLs

export const MOCK_MOVIES = [
  {
    id: 693134,
    title: 'Dune: Part Two',
    tagline: 'Long live the fighters.',
    release_date: '2024-02-27',
    vote_average: 8.3,
    runtime: 166,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80',
    popularity: 980,
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' }
    ],
    genre_ids: [28, 878, 12],
    overview: 'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    video_key: '_YUzQa_1RCE',
    cast: [
      { id: 1, name: 'Timothée Chalamet', character: 'Paul Atreides', profile_path: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 2, name: 'Zendaya', character: 'Chani', profile_path: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 3, name: 'Rebecca Ferguson', character: 'Lady Jessica', profile_path: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 4, name: 'Austin Butler', character: 'Feyd-Rautha Harkonnen', profile_path: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 5, name: 'Florence Pugh', character: 'Princess Irulan', profile_path: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [438631, 157336, 27205, 507089]
  },
  {
    id: 872585,
    title: 'Oppenheimer',
    tagline: 'The world forever changes.',
    release_date: '2023-07-19',
    vote_average: 8.2,
    runtime: 180,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80',
    popularity: 910,
    genres: [
      { id: 18, name: 'Drama' },
      { id: 36, name: 'History' }
    ],
    genre_ids: [18, 36],
    overview: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II, showing the scientific breakthrough and subsequent security hearings that shaped history.',
    video_key: 'uYPbbksJxIg',
    cast: [
      { id: 11, name: 'Cillian Murphy', character: 'J. Robert Oppenheimer', profile_path: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 12, name: 'Emily Blunt', character: 'Kitty Oppenheimer', profile_path: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 13, name: 'Matt Damon', character: 'Leslie Groves', profile_path: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 14, name: 'Robert Downey Jr.', character: 'Lewis Strauss', profile_path: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [155, 693134, 27205, 335984]
  },
  {
    id: 569094,
    title: 'Spider-Man: Across the Spider-Verse',
    tagline: 'With great power comes great responsibility.',
    release_date: '2023-05-31',
    vote_average: 8.4,
    runtime: 140,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    popularity: 890,
    genres: [
      { id: 16, name: 'Animation' },
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' }
    ],
    genre_ids: [16, 28, 12, 878],
    overview: 'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider-Society, a team of Spider-People charged with protecting the Multiverse’s very existence.',
    video_key: 'shW9i6k8cB0',
    cast: [
      { id: 21, name: 'Shameik Moore', character: 'Miles Morales', profile_path: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 22, name: 'Hailee Steinfeld', character: 'Gwen Stacy', profile_path: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 23, name: 'Oscar Isaac', character: 'Miguel O\'Hara', profile_path: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [118340, 100402, 693134, 438631]
  },
  {
    id: 157336,
    title: 'Interstellar',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    release_date: '2014-11-05',
    vote_average: 8.4,
    runtime: 169,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80',
    popularity: 920,
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 18, name: 'Drama' },
      { id: 878, name: 'Science Fiction' }
    ],
    genre_ids: [12, 18, 878],
    overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
    video_key: 'zSWdZAZe3Dc',
    cast: [
      { id: 31, name: 'Matthew McConaughey', character: 'Cooper', profile_path: 'https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 32, name: 'Anne Hathaway', character: 'Brand', profile_path: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 33, name: 'Jessica Chastain', character: 'Murph', profile_path: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [693134, 27205, 507089, 438631]
  },
  {
    id: 27205,
    title: 'Inception',
    tagline: 'Your mind is the scene of the crime.',
    release_date: '2010-07-14',
    vote_average: 8.3,
    runtime: 148,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    popularity: 860,
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' }
    ],
    genre_ids: [28, 878, 12],
    overview: 'Cobb, a skilled thief who steals valuable secrets from deep within the subconscious during the dream state, is offered a chance to have his history erased as payment for a task considered to be impossible.',
    video_key: 'YoHD9XEInc0',
    cast: [
      { id: 41, name: 'Leonardo DiCaprio', character: 'Cobb', profile_path: 'https://images.unsplash.com/photo-1504257406230-10022a4a9bd7?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 42, name: 'Joseph Gordon-Levitt', character: 'Arthur', profile_path: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 43, name: 'Elliot Page', character: 'Ariadne', profile_path: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [157336, 155, 693134, 118340]
  },
  {
    id: 155,
    title: 'The Dark Knight',
    tagline: 'Why So Serious?',
    release_date: '2008-07-16',
    vote_average: 8.6,
    runtime: 152,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80',
    popularity: 950,
    genres: [
      { id: 18, name: 'Drama' },
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' }
    ],
    genre_ids: [18, 28, 80],
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the Gotham streets as the Joker.',
    video_key: 'EXeTwQWrcwY',
    cast: [
      { id: 51, name: 'Christian Bale', character: 'Bruce Wayne / Batman', profile_path: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 52, name: 'Heath Ledger', character: 'Joker', profile_path: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 53, name: 'Gary Oldman', character: 'Jim Gordon', profile_path: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [872585, 27205, 100402, 585083]
  },
  {
    id: 507089,
    title: 'Ad Astra',
    tagline: 'The answers to our existence lie just out of reach.',
    release_date: '2019-09-17',
    vote_average: 6.2,
    runtime: 123,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BOGRhOGNjZjEtNTU2Ni00MDlmLWI3MWEtNzc1OGE2ZmEwZGNhXkEyXkFqcGc@._V1_SX300.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1200&q=80',
    popularity: 750,
    genres: [
      { id: 18, name: 'Drama' },
      { id: 878, name: 'Science Fiction' }
    ],
    genre_ids: [18, 878],
    overview: 'The near future, Roy McBride travels to the outer edges of the solar system to find his missing father and unravel a mystery that threatens the survival of our planet.',
    video_key: 'BsCNKuB93BA',
    cast: [
      { id: 61, name: 'Brad Pitt', character: 'Roy McBride', profile_path: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 62, name: 'Tommy Lee Jones', character: 'Clifford McBride', profile_path: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [157336, 693134, 335984, 27205]
  },
  {
    id: 438631,
    title: 'Dune',
    tagline: 'Beyond fear, destiny awaits.',
    release_date: '2021-09-15',
    vote_average: 7.9,
    runtime: 155,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BMGJlMGM3NDAtOWNhMy00MWExLWI2MzEtMDQ0ZDIzZDY5ZmQ2XkEyXkFqcGc@._V1_SX300.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1608976479421-c24de572f4e3?auto=format&fit=crop&w=1200&q=80',
    popularity: 810,
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' }
    ],
    genre_ids: [28, 878, 12],
    overview: 'Paul Atreides, a brilliant and gifted young man born into a great destiny, must travel to the most dangerous planet in the universe to ensure the safety of his family.',
    video_key: 'n9DwoQ7HWvI',
    cast: [
      { id: 1, name: 'Timothée Chalamet', character: 'Paul Atreides', profile_path: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 2, name: 'Zendaya', character: 'Chani', profile_path: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [693134, 157336, 507089, 27205]
  },
  {
    id: 118340,
    title: 'Guardians of the Galaxy',
    tagline: 'Allies. Enemies. Outlaws. Guardians.',
    release_date: '2014-07-30',
    vote_average: 7.9,
    runtime: 121,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1200&q=80',
    popularity: 790,
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' },
      { id: 12, name: 'Adventure' }
    ],
    genre_ids: [28, 878, 12],
    overview: 'Light years from Earth, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Villain Ronan.',
    video_key: 'd96cjJhvlMA',
    cast: [
      { id: 71, name: 'Chris Pratt', character: 'Peter Quill / Star-Lord', profile_path: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 72, name: 'Zoe Saldana', character: 'Gamora', profile_path: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [569094, 100402, 27205, 693134]
  },
  {
    id: 100402,
    title: 'Captain America: The Winter Soldier',
    tagline: 'In heroes we trust. In order we static.',
    release_date: '2014-03-20',
    vote_average: 7.7,
    runtime: 136,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BNWY1NjFmNDItZDhmOC00NjI1LWE0ZDItMTM0MjBjZThiOTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    popularity: 720,
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' }
    ],
    genre_ids: [28, 12],
    overview: 'Steve Rogers teams up with Black Widow to battle a new threat: an assassin known as the Winter Soldier.',
    video_key: '7SlILk2WMTI',
    cast: [
      { id: 81, name: 'Chris Evans', character: 'Steve Rogers / Captain America', profile_path: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 82, name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow', profile_path: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [155, 118340, 569094, 27205]
  },
  {
    id: 76600,
    title: 'Avatar: The Way of Water',
    tagline: 'Return to Pandora.',
    release_date: '2022-12-14',
    vote_average: 7.6,
    runtime: 192,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_SX300.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    popularity: 850,
    genres: [
      { id: 28, name: 'Action' },
      { id: 12, name: 'Adventure' },
      { id: 878, name: 'Science Fiction' }
    ],
    genre_ids: [28, 12, 878],
    overview: 'Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, and the lengths they go to to keep each other safe.',
    video_key: 'd9MyW72ELq0',
    cast: [
      { id: 91, name: 'Sam Worthington', character: 'Jake Sully', profile_path: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 92, name: 'Zoe Saldana', character: 'Neytiri', profile_path: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 93, name: 'Sigourney Weaver', character: 'Kiri', profile_path: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [438631, 693134, 157336, 118340]
  },
  {
    id: 603,
    title: 'The Matrix',
    tagline: 'Free your mind.',
    release_date: '1999-03-30',
    vote_average: 8.2,
    runtime: 136,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    popularity: 810,
    genres: [
      { id: 28, name: 'Action' },
      { id: 878, name: 'Science Fiction' }
    ],
    genre_ids: [28, 878],
    overview: 'Set in the 22nd century, a computer hacker joins a group of underground insurgents in a battle against the vast, sophisticated computers who rule the world.',
    video_key: 'm8e-FF8MsqU',
    cast: [
      { id: 101, name: 'Keanu Reeves', character: 'Neo', profile_path: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 102, name: 'Laurence Fishburne', character: 'Morpheus', profile_path: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 103, name: 'Carrie-Anne Moss', character: 'Trinity', profile_path: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [27205, 157336, 155, 118340]
  },
  {
    id: 346698,
    title: 'Barbie',
    tagline: 'She\'s everything. He\'s just Ken.',
    release_date: '2023-07-19',
    vote_average: 7.2,
    runtime: 114,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
    popularity: 740,
    genres: [
      { id: 35, name: 'Comedy' },
      { id: 12, name: 'Adventure' },
      { id: 18, name: 'Drama' }
    ],
    genre_ids: [35, 12, 18],
    overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    video_key: 'pBk4NYhWNMM',
    cast: [
      { id: 111, name: 'Margot Robbie', character: 'Barbie', profile_path: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 112, name: 'Ryan Gosling', character: 'Ken', profile_path: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 113, name: 'America Ferrera', character: 'Gloria', profile_path: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [872585, 569094, 603, 76600]
  },
  {
    id: 585083,
    title: 'John Wick: Chapter 4',
    tagline: 'No way back. One way out.',
    release_date: '2023-03-22',
    vote_average: 7.8,
    runtime: 169,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_SX300.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80',
    popularity: 790,
    genres: [
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' }
    ],
    genre_ids: [28, 80],
    overview: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
    video_key: 'qEVUtrk8_B4',
    cast: [
      { id: 101, name: 'Keanu Reeves', character: 'John Wick', profile_path: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 121, name: 'Donnie Yen', character: 'Caine', profile_path: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 122, name: 'Bill Skarsgård', character: 'Marquis', profile_path: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [155, 603, 100402, 118340]
  },
  {
    id: 496243,
    title: 'Parasite',
    tagline: 'Act like you own the place.',
    release_date: '2019-05-30',
    vote_average: 8.5,
    runtime: 132,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    popularity: 710,
    genres: [
      { id: 18, name: 'Drama' },
      { id: 35, name: 'Comedy' }
    ],
    genre_ids: [18, 35],
    overview: 'All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.',
    video_key: '5xH0HfJHsaY',
    cast: [
      { id: 131, name: 'Song Kang-ho', character: 'Ki-taek', profile_path: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 132, name: 'Lee Sun-kyun', character: 'Mr. Park', profile_path: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 133, name: 'Cho Yeo-jeong', character: 'Mrs. Park', profile_path: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [872585, 155, 346698, 27205]
  },
  {
    id: 335984,
    title: 'Blade Runner 2049',
    tagline: 'There\'s still a page left.',
    release_date: '2017-10-04',
    vote_average: 8.1,
    runtime: 164,
    poster_path: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_QL75_UX380_CR0,0,380,562_.jpg',
    backdrop_path: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    popularity: 760,
    genres: [
      { id: 878, name: 'Science Fiction' },
      { id: 18, name: 'Drama' }
    ],
    genre_ids: [878, 18],
    overview: 'Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what\'s left of society into chaos.',
    video_key: 'gCcx85zVzQA',
    cast: [
      { id: 112, name: 'Ryan Gosling', character: 'Officer K', profile_path: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 141, name: 'Harrison Ford', character: 'Rick Deckard', profile_path: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80' },
      { id: 142, name: 'Ana de Armas', character: 'Joi', profile_path: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' }
    ],
    similar_ids: [693134, 157336, 27205, 507089]
  }
];

export const MOCK_GENRES = {
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 18, name: 'Drama' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 878, name: 'Science Fiction' }
  ]
};
