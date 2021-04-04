import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Motions",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
      artist: "SwuM, Delayde",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12133",
      color: ["#2F9F99", "#FFF1D6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Runaway",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
      artist: "Blue Wednesday, Magnus Klausen",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12135",
      color: ["#2F9F99", "#FFF1D6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Coda",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-300x300.jpg",
      artist: "Aarigod",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13000",
      color: ["#2F9F99", "#FFF1D6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Flashback",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-300x300.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11224",
      color: ["#2F9F99", "#FFF1D6"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
