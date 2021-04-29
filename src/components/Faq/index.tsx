import React from 'react';

export const Faq: React.FC = () => {
  return (
    <>
      <div className="faq">
        <div className="question">
          <p className="label">Question:</p>
          <div className="content">
            <p>
              Does this mattress need a separate box spring and does it include
              a bed frame?
            </p>
            <p className="author">by {'Steve Murdoch'}</p>
          </div>
        </div>

        <div className="answer">
          <p className="label">Answer:</p>
          <div className="content">
            <p>
              A box spring is not necessary, but you may like to have a box
              spring, platform, or frame to raise the height of the mattress.
              When purchasing the Saatva mattress online, you'll be offered the
              option to add a bed frame and base. The delivery of your mattress
              includes free set up with the frame as well.
            </p>
          </div>
        </div>

        <div className="action">
          <img src="imgs/thumb-icon.svg" alt="" style={{ marginRight: 20 }} />
          Helpful ({72})
        </div>
      </div>

      <div className="faq sub-comment">
        <div className="question">
          <p className="label">Question:</p>
          <div className="content">
            <p>Can you deliver to Hawaii?</p>
            <p className="author">by {'Fletcher Harake'}</p>
          </div>
        </div>

        <div className="answer">
          <p className="label">Answer:</p>
          <div className="content">
            <p>
              Saatva offers delivery to the contiguous US at this time, but that
              doesn't mean that you can't get a Saatva mattress in Hawaii.
              Saatva's Hawaiian customers have used the following freight
              contractors to manage the delivery beyond the continental US:
              Aloha Freight Forwarders, Honolulu Freight Service, Project
              Transport, America West, H2O Logistics.
            </p>
          </div>
        </div>

        <div className="action">
          <img src="imgs/thumb-icon.svg" alt="" style={{ marginRight: 20 }} />
          Helpful ({240})
        </div>
      </div>
    </>
  );
};
