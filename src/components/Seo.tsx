import React from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title?: string,
  description?: string
}

function Seo(props: SeoProps) {
  return (
    <Helmet titleTemplate='Coulsdon Community Partnership - %s' defaultTitle='Coulsdon Community Partnership'>
      {props.title ? (
        <title>{props.title}</title>
      ) : null}
      {props.description ? (
        <meta name="description" content={props.description} />
      ) : null}
    </Helmet>
  );
}

export default Seo;
