import {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const history = useHistory();
  const {i18n} = useDocusaurusContext();
  
  useEffect(() => {
    // Redirect to n8n category with locale support
    const locale = i18n.currentLocale;
    const path = locale === i18n.defaultLocale 
      ? '/docs/category/n8n' 
      : `/${locale}/docs/category/n8n`;
    history.replace(path);
  }, [history, i18n]);

  return null;
}