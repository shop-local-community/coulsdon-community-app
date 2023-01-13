import React from 'react';
import { Helmet } from 'react-helmet';

type SeoProps = {
  title: string
}

function Seo(props: SeoProps) {
  return (
    <Helmet>
      <title>{props.title} - Coulsdon Community Partnership</title>
    </Helmet>
  );
}

export default Seo;
