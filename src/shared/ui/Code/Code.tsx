import { memo } from 'react';
import cn from 'classnames';

import s from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  // TODO: copy button
  //const onCopy = useCallback(() => {
  //  navigator.clipboard.writeText(text);
  //}, [text]);

  return (
    <pre className={cn(s.root, className)}>
      <code>{text}</code>
    </pre>
  );
});
