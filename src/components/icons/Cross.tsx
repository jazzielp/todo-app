interface Props {
  size?: number
}
export function Cross ({ size }: Props): JSX.Element {
  return (
    <svg width={size} height={size} viewBox='0 0 18 18'>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
      />
    </svg>
  )
}
