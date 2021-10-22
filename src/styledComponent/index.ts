import { createElement, forwardRef } from 'react';
import { cx, css as emotionCss } from 'emotion';

import { ConfigType, IStyledComponent } from '../types';

/**
 * Creates a styled React component
 * 
 * @since v0.0.1
 * @param {object} styles - Javascript style object that gets applied to component
 * @param {string | JSX.Element} element - Type of dom element that component uses
 * @param {object} [config] - Object shaped like {classNames = [], combinators = {}}. 'classNames' are additional classes that get assigned to the component. 'combinators' are additional styles that get applied as a separate class to the component.
 * @returns {component}
 * @docgen_types
 * // The config type for the util:
 * //   classNames?: Array<string>; - Any additional CSS classNames to append
 * //   combinators?: Record<string, unknown> - Any combinator CSS-in-JS styles
 * 
 * export type ConfigType = { classNames?: Array<string>, combinators?: Record<string, unknown> };
 * @example
 * // basic
 * const MyComponent = styledComponent({ padding: 4 }, 'div');
 * 
 *   //=> In your render:
 *   <MyComponent>This is a div with padding</MyComponent>
 * 
 * 
 * // combinators
 * const combinators = {
 *   '& + &': {
 *     marginLeft: 16,
 *   }
 * }
 * const MyButton = styledComponent({ color: 'green' }, 'button', { combinators });
 * 
 *   //=> In your render:
 *   <>
 *     <MyButton>This is a green button</MyButton>
 *     <MyButton>This is another green button with margin-left</MyButton>
 *   </>
 */
 export const styledComponent = (styles: Record<string, unknown>, element: string | JSX.Element, config?: ConfigType) : React.FC<IStyledComponent> => forwardRef(({
  css = {},
  className = '',
  as = element,
  children,
  ...other
}, ref) => {
    const [classNames = [], combinators = {}] = [config?.classNames, config?.combinators];

    return (
      createElement(
        as,
        {
          className: [
            cx(
              emotionCss(styles as unknown as TemplateStringsArray),
              emotionCss(css),
              [ ...classNames, className ].join(' ').trim(),
            ),
            combinators !== null && combinators !== undefined && Object.keys(combinators).length > 0 ? emotionCss(combinators as unknown as TemplateStringsArray) : '',
          ].join(' ').trim(),
          ...other,
          ref,
        },
        children,
      )
    );
  });