import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.mail}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Isaac Newton"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F08%2F3008-004-F87BC031%2FGodfrey-Kneller-Isaac-Newton-portrait-1689.jpg&f=1&nofb=1&ipt=44d9d03153fa5327d90bc3c4bbb928b7b993d7994363b098a68c5bd456c84d44"
      tel="0123 456 789"
      mail="newton@science-mail.com" />

    <Card
      name="Marie Curie"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.philatelie-francaise.com%2Fimage_texte%2Fmarie-curie.jpg&f=1&nofb=1&ipt=9fdace1b4c2a5d388997ec34aa02c48fd99e85a2aed4ca3c27780774119512e2"
      tel="0456 789 123"
      mail="curie@radiomail.org" />

    <Card
      name="Albert Einstein"
      img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbiografija.net%2Fslike%2Fbio%2F1-Albert-Einstein.jpg&f=1&nofb=1&ipt=e8791870c11f32578cdbbcd7ccc55d1261cfaad8978c885cd2aedd2e45e7520e"
      tel="0789 123 456"
      mail="einstein@relativity.net" />
  </div>,
  document.getElementById("root")
);
