import { GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
const SimpleFixturePage: NextPage<GetStaticProps> = ({}) => {
  const [open, setOpen] = useState(false);

  // Ensure it animates in when loaded

  function onDismiss() {
    setOpen(false);
  }
  interface DeleteChallengeProps {
    onClickDelete: () => void;
    onDismiss: () => void;
  }
  return (
    <>
      <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet
          open={open}
          onDismiss={onDismiss}
          snapPoints={({ maxHeight }) => 0.8 * maxHeight}
        >
          <div style={{ height: '500px', width: '375' }}>
            <p>
              Using onDismiss lets users close the sheet by swiping it down,
              tapping on the backdrop or by hitting <>esc</> on their keyboard.
            </p>
            <div>
              <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
              <p>
                The height adjustment is done automatically, it just works™!
              </p>
              <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
            </div>
            <button onClick={onDismiss} className="w-full">
              Dismiss
            </button>
          </div>
        </BottomSheet>
      </div>
    </>
  );
};

export default SimpleFixturePage;
