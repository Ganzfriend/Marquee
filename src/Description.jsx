import React from 'react';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import './fashion.css';

var Description = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <div className="marquee-description-modal">
      <p>
        {props.listing ? props.listing.description : '...'}
      </p>
    </div>
  );
  

  if ( props.listing === null) {
    return null;
  } else {
    return (
      <div>
        <p>{props.listing.description.substr(0, 200)}
          ...
          <span onClick={handleOpen}>read more</span>
        </p>
        <Modal
          open={open}
          onClose={handleClose}
        >
          {modalBody}
        </Modal>
      </div>
    )
  }
}

export default Description;