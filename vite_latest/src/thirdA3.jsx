import React, { useState, useEffect } from "react";
import "./third.css";

const Api3 = () => {
  const [characters, setCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);

  // Static book data
  const books = [
    {
      number: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      originalTitle: "Harry Potter and the Sorcerer's Stone",
      releaseDate: "Jun 26, 1997",
      description:
        "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
      pages: 223,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png",
      index: 0,
    },
    {
      number: 2,
      title: "Harry Potter and the Chamber of Secrets",
      originalTitle: "Harry Potter and the Chamber of Secrets",
      releaseDate: "Jul 2, 1998",
      description:
        "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
      pages: 251,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/2.png",
      index: 1,
    },
    {
      number: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      originalTitle: "Harry Potter and the Prisoner of Azkaban",
      releaseDate: "Jul 8, 1999",
      description:
        "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
      pages: 317,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/3.png",
      index: 2,
    },
    {
      number: 4,
      title: "Harry Potter and the Goblet of Fire",
      originalTitle: "Harry Potter and the Goblet of Fire",
      releaseDate: "Jul 8, 2000",
      description:
        "Hogwarts prepares for the Triwizard Tournament, in which three schools of wizardry will compete. To everyone's surprise, Harry Potter is chosen to participate in the competition, in which he must fight dragons, enter the water and face his greatest fears.",
      pages: 636,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/4.png",
      index: 3,
    },
    {
      number: 5,
      title: "Harry Potter and the Order of the Phoenix",
      originalTitle: "Harry Potter and the Order of the Phoenix",
      releaseDate: "Jun 21, 2003",
      description:
        "In his fifth year at Hogwarts, Harry discovers that many members of the wizarding community do not know the truth about his encounter with Lord Voldemort. Cornelius Fudge, Minister of Magic, appoints Dolores Umbridge as Defense Against the Dark Arts teacher because he believes that Professor Dumbledore plans to take over his job. But his teachings are inadequate, so Harry prepares the students to defend the school against evil.",
      pages: 766,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/5.png",
      index: 4,
    },
    {
      number: 6,
      title: "Harry Potter and the Half-Blood Prince",
      originalTitle: "Harry Potter and the Half-Blood Prince",
      releaseDate: "Jul 16, 2005",
      description:
        "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
      pages: 607,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/6.png",
      index: 5,
    },
    {
      number: 7,
      title: "Harry Potter and the Deathly Hallows",
      originalTitle: "Harry Potter and the Deathly Hallows",
      releaseDate: "Jul 21, 2007",
      description:
        "Harry, Ron and Hermione go on a dangerous mission to locate and destroy the secret of Voldemort's immortality and destruction - the Horcruces. Alone, without the guidance of their teachers or the protection of Professor Dumbledore, the three friends must lean on each other more than ever. But there are Dark Forces in between that threaten to tear them apart. Harry Potter is getting closer and closer to the task for which he has been preparing since the first day he set foot in Hogwarts: the last battle with Voldemort.",
      pages: 607,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/7.png",
      index: 6,
    },
    {
      number: 8,
      title: "Harry Potter and the Cursed Child",
      originalTitle: "Harry Potter and the Cursed Child",
      releaseDate: "Jul 30, 2016",
      description:
        "Harry's second son entered Hogwarts, but in Slytherin. His relationship with Harry is getting worse and he became close friends with Draco's son, Scorpius Malfoy who is said to be Lord Voldemort's son.",
      pages: 336,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/8.png",
      index: 7,
    },
  ];

  useEffect(() => {
    // Fetch characters
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoadingCharacters(false);
      })
      .catch((err) => console.error("Error fetching characters:", err));
  }, []);

  return (
    <div className="api3-container">
      <h1 className="api3-title">Harry Potter Characters & Books</h1>

      {/* Characters Section */}
      <div className="characters-container">
        <h2 className="section-title">Characters</h2>
        {loadingCharacters ? (
          <p className="loading-text">Loading characters...</p>
        ) : (
          <div className="characters-grid">
            {characters.slice(0, 30).map((char) => (
              <div key={char.name} className="character-card">
                <img
                  src={char.image || "https://via.placeholder.com/150"}
                  alt={char.name}
                  className="character-image"
                />
                <h3 className="character-name">{char.name}</h3>
                <p className="character-house">
                  <strong>House:</strong> {char.house || "Unknown"}
                </p>
                <p className="character-actor">
                  <strong>Actor:</strong> {char.actor || "Unknown"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Books Section */}
      <div className="books-container">
        <h2 className="section-title">Books</h2>
        <div className="books-grid">
          {books.map((book) => (
            <div key={book.number} className="book-card">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-release-date">
                <strong>Release Date:</strong> {book.releaseDate}
              </p>
              <p className="book-description">{book.description}</p>
              <p className="book-pages">
                <strong>Pages:</strong> {book.pages}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Api3;


