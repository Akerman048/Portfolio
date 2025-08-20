

import s from './BlockTitle.module.css'

interface BlockTitleProps {
    title: string;
}

export default function BlockTitle({title}:BlockTitleProps) {
  return (
    <h2 className={`blockTitle ${s.title}`}>{title}</h2>
  )
}
