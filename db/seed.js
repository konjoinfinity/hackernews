const { Link } = require("../models/index");

Link.remove({}).then(function() {
  Link.create({
    title: "Elite Hackers",
    description: "ELITE HACKERS SITE",
    link: "https://elite-hackers.com",
    date: Date.now()
  });

  Link.create({
    title: "HackerRank",
    description: "Practice coding, prepare for interviews, and get hired.",
    link: "https://www.hackerrank.com",
    date: Date.now()
  });

  Link.create({
    title: "HackerOne",
    description: "JOIN THE WORLD'S LARGEST HACKER COMMUNITY",
    link: "https://www.hackerone.com/start-hacking",
    date: Date.now()
  });
});
