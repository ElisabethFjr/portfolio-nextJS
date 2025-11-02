'use client';

import styles from './ContactButton.module.scss';

interface ContactButtonProps {
  label: string;
}

export default function ContactButton({ label }: ContactButtonProps) {
  const navigateToContact = () => {
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a className={styles.navigate} onClick={navigateToContact}>
      {label}
    </a>
  );
}
