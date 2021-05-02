import { RootState } from '@redux/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPopupSmall {}

export const PopupSmall: React.FC<IPopupSmall> = ({ children }) => {
  const popupActive = useSelector<RootState>(
    (state) => state.homepage.popupActive,
  );

  return (
    <div>
      <div
        style={{ zIndex: 10, visibility: popupActive ? 'visible' : 'hidden' }}
        className="span-full flex-jc-c flex-ai-c"
      >
        <div className="popup-small full flex flex-ai-c">{children}</div>
      </div>
    </div>
  );
};
