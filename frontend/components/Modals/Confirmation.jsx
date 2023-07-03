import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

function ConfirmationModal({ text, confirmText, cancelText, btnAction, open, setOpen }) {
  
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-52 bg-white border border-gray-200 shadow-sm rounded-xl p-6 flex flex-col justify-start items-center outline-none">
          <div className="text-xs font-semibold mt-3 mb-[70px]">
            <p className="m-0">{text}</p>
          </div>
          <div className="w-full flex justify-between">
            <button
              className="w-2/5 border py-2 rounded-lg border-[#52796F] text-[#52796F] text-xs font-semibold transition duration-300 hover:border-none hover:bg-[#52796F] hover:text-white"
              onClick={() => {
                btnAction();
                setOpen(false);
              }}
            >
              {confirmText}
            </button>
            <button
              className="w-2/5 border py-2 rounded-lg border-[#52796F] text-[#52796F] text-xs font-semibold transition duration-300 hover:border-none hover:bg-[#52796F] hover:text-white"
              onClick={() => setOpen(false)}
            >
              {cancelText}
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ConfirmationModal;
