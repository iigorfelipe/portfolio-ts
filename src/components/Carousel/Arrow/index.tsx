import * as C from '../styles';

const Arrow = (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) => {
  const disabled = props.disabled ? ' rgba(255, 255, 255, 0.5)' : '';
  const directions = props.left ? { left: '5px'} : { left: 'auto', right: '5px' };

  return (
    <C.Arrow
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      onClick={props.onClick}
      fill={disabled}
      style={directions}
    >
      {props.left && (
        <C.Path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <C.Path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </C.Arrow>
  )
}

export default Arrow;
