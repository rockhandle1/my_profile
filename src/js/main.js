const header = document.createElement("header");
header.id = "mainHeader";

const title = document.createElement("h1");
title.textContent = "Mikyle Yakub";
header.append(title);

const links = 
[
  { text: "Home", url: "main.html" },
  { text: "Links", url: "links.html" },
  { text: "Projects", url: "projects.html" },
  { text: "About", url: "about.html" }
];

links.forEach(item => 
{
  const link = document.createElement("a");
  link.href = item.url;

  const heading = document.createElement("h1");
  heading.textContent = item.text;

  link.append(heading);
  header.append(link);
});

document.body.insertBefore(header, document.body.firstChild);

const footer = document.createElement("footer");
footer.id = "footer";
const footerText = document.createElement("strong");
footer.textContent = "© 2026, Mikyle Yakub";
footer.appendChild(document.createElement("small"));
footer.firstElementChild.appendChild(footerText);
document.body.appendChild(footer);