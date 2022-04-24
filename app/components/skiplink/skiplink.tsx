import React from 'react';

// Styles are kept inside the header.scss

interface SkipLinkProperties {
  className?: string;
  children: React.ReactElement;
  skipTo: string;
}

const SkipLink: React.FC<SkipLinkProperties> = (props) => {
  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const container: HTMLElement | null = document.querySelector(props.skipTo);

    if (container) {
      container.tabIndex = -1;
      container.focus();
      setTimeout(() => container.removeAttribute('tabindex'), 1000);
    }
  };

  return React.cloneElement(props.children, {
    onClick,
    className: props.className,
  });
};

SkipLink.defaultProps = {
  className: 'skip-link',
  skipTo: 'main:first-of-type',
};

export default SkipLink;
