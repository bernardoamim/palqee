import React from 'react';
import ChevronRight from '../../assets/svg/ChevronRight';

import { Container, CrumbItem } from './styles';

function BreadCrumbs({ crumbs }) {
  const isLast = index => index === crumbs.length - 1;

  return (
    <Container>
      {crumbs.map((crumb, idx) => {
        const disabledClass = isLast(idx) ? 'disabled' : '';

        return (
          <CrumbItem key={crumb.key}>
            <a href={`/${crumb.key}`} className={disabledClass}>
              {crumb.label}
            </a>
            {!isLast(idx) && (
              <ChevronRight height="1rem" stroke="#1a3054" strokeWidth={2.5} />
            )}
          </CrumbItem>
        );
      })}
    </Container>
  );
}

export default BreadCrumbs;
