import "./Content.css";
import React, { useEffect, useState } from "react";
import AvatarPlaceholder from "../assets/avatar placeholder.svg"
import Banner from "../assets/banner.png"
import GitHubLogo from "../assets/github logo.svg"
import MailboxEmoji from "../assets/mailbox emoji.png";
import ScrollIcon from "../assets/scroll icon.svg"
import WavingEmoji from "../assets/waving emoji.png";

export default function Description(props) {
  const { isRef } = props;
  const [avatar, setAvatar] = useState(AvatarPlaceholder);

  useEffect(() => {
    fetch('https://api.github.com/users/au-williams')
    .then(res => res.json())
    .then(result => setAvatar(result.avatar_url))
    .catch(error => console.error("Error:", error));
  });

  return (
    <div id='content-wrapper' ref={isRef}>
      <div className='flex-wrapper'>
        <img src={avatar} alt="avatar" draggable='false' />
        <div>Hey <img src={WavingEmoji} alt="waving emoji"/> — My name is <a href='https://www.linkedin.com/in/auwilliams'>Austin</a>. I started my career by developing government programs and collaborating with major tech companies, who taught me their art of delivering great software from start to finish.</div>
      </div>
      <div className='flex-wrapper'>
        <img src={Banner} alt="banner" draggable='false' />
        <div>I love working with computers and I'm always open to new opportunities. Feel free to send an email for side-work or employment inquiries — you can reach me at <a href="mailto:me@austinwilliams.dev">me@austinwilliams.dev</a>. <img src={MailboxEmoji} alt="mailbox emoji"/></div>
      </div>
      <div id='footer'>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={ScrollIcon} alt="return icon"/>
          Back to top
        </button>
        <a href='https://github.com/au-williams/au-williams.github.io' target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogo} alt="github logo"/>
          GitHub
        </a>
      </div>
    </div>
  );
}
