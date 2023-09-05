import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function NoteItem({isnew, value, onclick, ...rest}) {
  return(
    <Container isnew={isnew}>
      <input
        type='text'
        value={value}
        readOnly={!isnew}
        {...rest}
      />

      <button 
        type='button'
        onClick={onclick}
        className={isnew ? 'button-add' : 'button-delete'}
      >
        { isnew ? <FiPlus/> : <FiX/>}
      </button>

    </Container>
  );
};