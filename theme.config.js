const YEAR = new Date().getFullYear()

export default {
  projectLink: 'https://seguridad.pasosdeJesus.org', 
  docsRepositoryBase: 'https://github.com/vtamara/seguridad-i/blob/master', 
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `ISC ${new Date().getFullYear()} © Vladimir Támara Patiño.`,
  footerEditLink: `Editar esta página en Github`,
  logo: (
    <>
    <svg>...</svg>
    <span>Next.js Static Site Generator</span>
    </>
  ),
  head: (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Nextra: the next docs builder" />
    <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Your Name.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
}
