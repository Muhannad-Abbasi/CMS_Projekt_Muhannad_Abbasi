import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import './page.css';

const Page = forwardRef((
  {
    children,
    title = '',
    ...rest
  }, ref
) => {
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
