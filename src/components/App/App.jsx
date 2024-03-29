import React, { useEffect, useRef, useState } from 'react';
import ReactGA from 'react-ga4';
// import { ReactComponent as AngleDownIcon } from '../../assets/icons/angle_down.svg';
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar_icon.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github_icon.svg';
import { ReactComponent as ScrollIcon } from '../../assets/icons/scroll_icon.svg';
import { CodeImage, MailboxEmoji, WaveEmoji } from '../../assets/images';
import CodeWindow from '../CodeWindow/CodeWindow.tsx';
import styles from './App.module.scss';

// google analytics

const startGoogleAnalytics = () => {
  ReactGA.initialize('G-JFBLY5T1C0');
  ReactGA.send('pageview');
};

const sendGoogleAnalyticsEvent = (category, action) => ReactGA.event({ category, action });

// react events

const onBackClick = () => {
  sendGoogleAnalyticsEvent('click', 'back_to_top_button');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const onEmailClick = () => sendGoogleAnalyticsEvent('click', 'email_mailto_link');

const onGitHubClick = () => sendGoogleAnalyticsEvent('click', 'github_outbound_link');

const onLinkedInClick = () => sendGoogleAnalyticsEvent('click', 'linkedin_outbound_link');

const onResumeClick = () => sendGoogleAnalyticsEvent('click', 'resume_outbound_link');

// react render

const App = () => {
  const [avatar, setAvatar] = useState(null);
  const sectionRef = useRef(null);

  const fetchGitHubAvatar = () => {
    fetch('https://api.github.com/users/au-williams')
      .then((res) => res.json())
      .then((result) => setAvatar(result.avatar_url))
      .catch((error) => console.error('Error:', error));
  };

  const onAboutClick = () => {
    sendGoogleAnalyticsEvent('click', 'about_button');
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    startGoogleAnalytics();
    fetchGitHubAvatar();
  });

  return (
    <>
      <header className={styles.wrapper}>
        <CodeWindow />
        <button type="button" onClick={onAboutClick}>
          About
          <br />
          {/* <AngleDownIcon /> */}
          &darr;
        </button>
      </header>
      <section className={styles.section} ref={sectionRef}>
        <article className={styles.article}>
          {avatar ? <img src={avatar} alt="avatar" draggable="false" /> : <AvatarIcon />}
          <p>
            Hey <img src={WaveEmoji} alt="waving emoji" /> — My name is{' '}
            <a
              href="https://www.linkedin.com/in/auwilliams"
              onClick={onLinkedInClick}
              rel="noopener noreferrer"
              target="_blank"
            >
              Austin
            </a>
            . I started my career by developing government programs and collaborating with major
            tech companies who taught me their art of delivering great software from start to
            finish.
          </p>
        </article>
        <article className={styles.article}>
          <img src={CodeImage} alt="banner" draggable="false" />
          <p>
            I love working with computers and I&apos;m always open to new opportunities. My{' '}
            <a
              href="https://resume.austinwilliams.dev/"
              onClick={onResumeClick}
              rel="noopener noreferrer"
              target="_blank"
            >
              resume
            </a>{' '}
            is available online and you can email me for any employment inquiries at{' '}
            <a href="mailto:me@austinwilliams.dev" onClick={onEmailClick}>
              me@austinwilliams.dev
            </a>
            . <img src={MailboxEmoji} alt="mailbox emoji" />
          </p>
        </article>
        <footer className={styles.footer}>
          <button type="button" onClick={onBackClick}>
            <ScrollIcon /> Back to top
          </button>
          <a
            href="https://github.com/au-williams/au-williams.github.io"
            onClick={onGitHubClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon /> GitHub
          </a>
        </footer>
      </section>
    </>
  );
};

export default App;
