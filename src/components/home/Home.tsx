import AnimeCat from './animeCat/AnimeCat';
import ScrollArrow from './scrollArrow/ScrollArrow';
import FadeInSection from '../animations/FadeInSection/FadeInSection';
import {
  Github,
  Linkedin,
  EnvelopeFill,
  Download,
} from 'react-bootstrap-icons';
import styles from './Home.module.scss';
import { getDictionary } from '@/utils/locales';
import ContactButton from './contactButton/ContactButton';

async function Home({ locale }: { locale: string }) {
  // Get the 'home.json' file translations
  const home = await getDictionary(locale, 'home');

  return (
    <FadeInSection customClass={styles.home} id="home">
      <ScrollArrow ariaLabel={home.scrollArrowAriaLabel} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.socials}>
            <a
              className={styles.link}
              href="https://github.com/ElisabethFjr"
              target="_blank"
              aria-label={home.githubAriaLabel}
            >
              <Github />
            </a>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/elisabeth-faujour/"
              target="_blank"
              aria-label={home.linkedinAriaLabel}
            >
              <Linkedin />
            </a>
            <a
              className={styles.link}
              href="mailto:efaujour@gmail.com"
              aria-label={home.emailAriaLabel}
            >
              <EnvelopeFill />
            </a>
          </div>
          <div className={styles.infos}>
            <div>
              <h1 className={styles.name}>Elisabeth F.</h1>
              <h2 className={styles.job}>{home.jobTitle}</h2>
            </div>
            <ContactButton label={home.contactButton} />
          </div>
        </div>
        <AnimeCat />
      </div>
    </FadeInSection>
  );
}

export default Home;
