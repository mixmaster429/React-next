import { RootState } from '@redux/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPopup {}

export const Popup: React.FC<IPopup> = ({ children }) => {
  const popupActive = useSelector<RootState>(
    (state) => state.homepage.popupActive,
  );

  return (
    <div
      style={{ zIndex: 10, visibility: popupActive ? 'visible' : 'hidden' }}
      className="span-full popup-parent flex-jc-c flex-ai-c"
    >
      <div className="popup full flex flex-jc-c flex-ai-c">{children}</div>
    </div>
  );
};
