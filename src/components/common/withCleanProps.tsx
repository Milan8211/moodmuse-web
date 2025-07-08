import React from 'react';

// A list of props that are specific to our custom components and should not be passed to the DOM.
const invalidProps = new Set(['themeStyle', 'radius', 'dropShadow', 'themeName']);

/**
 * A higher-order component that removes custom, non-standard props from a component
 * before they are passed down to the underlying DOM element. This prevents React's
 * "unknown prop" warnings.
 *
 * @param {React.ComponentType<P>} Component The component to wrap.
 * @returns {React.FC<P>} A new component that filters out invalid props.
 */
export function withCleanProps<P extends object>(Component: React.ComponentType<P>) {
  const WrappedComponent: React.FC<P> = (props) => {
    const cleanedProps = Object.entries(props).reduce((acc, [key, value]) => {
      if (!invalidProps.has(key)) {
        acc[key as keyof P] = value;
      }
      return acc;
    }, {} as P);

    return <Component {...cleanedProps} />;
  };

  WrappedComponent.displayName = `withCleanProps(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
}
