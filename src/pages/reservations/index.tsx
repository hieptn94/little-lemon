import * as React from "react";
import clsx from "clsx";
import { Steps, Step, StepNumber, StepLabel } from "@/components/ui";
import { useAPI } from "@/hooks";
import { BookingInformation, ContactInformation } from "./schema";
import BookingInformationForm from "./BookingInformationForm";
import ContactInformationForm from "./ContactInformationForm";
import Confirmation from "./Confirmation";
import { submitAPI } from "./api";

type State = {
  stage: "bookingInformation" | "contactInformation" | "confirmation";
  bookingInformation: BookingInformation;
  contactInformation: ContactInformation;
};

function getActiveStep(stage: State["stage"]) {
  switch (stage) {
    case "bookingInformation": {
      return {
        bookingInformation: true,
        contactInformation: false,
        confirmation: false,
      };
    }
    case "contactInformation": {
      return {
        bookingInformation: true,
        contactInformation: true,
        confirmation: false,
      };
    }
    case "confirmation": {
      return {
        bookingInformation: true,
        contactInformation: true,
        confirmation: true,
      };
    }
  }
}

const initialState: State = {
  stage: "bookingInformation",
  bookingInformation: {
    date: "",
    time: "",
    numberOfGuests: 1,
  },
  contactInformation: {
    name: "",
    pronoun: "mr",
    phone: "",
  },
};

type Action =
  | {
      type: "finishBookingInformation";
      bookingInformation: BookingInformation;
    }
  | {
      type: "finishContactInformation";
      contactInformation: ContactInformation;
    }
  | {
      type: "back";
    };
function reducer(state: State, action: Action): State {
  const { type } = action;
  switch (type) {
    case "finishBookingInformation": {
      return {
        ...state,
        stage: "contactInformation",
        bookingInformation: action.bookingInformation,
      };
    }
    case "finishContactInformation": {
      return {
        ...state,
        stage: "confirmation",
        contactInformation: action.contactInformation,
      };
    }
    case "back": {
      return {
        ...state,
        stage: "bookingInformation",
      };
    }
  }
}

export default function Reservations() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [{ status }, call] = useAPI(submitAPI);

  const handleBookingInformationFinish = (
    bookingInformation: BookingInformation,
  ) =>
    dispatch({
      type: "finishBookingInformation",
      bookingInformation,
    });

  const handleContactInformationFinish = async (
    contactInformation: ContactInformation,
  ) => {
    await call({
      bookingInformation: state.bookingInformation,
      contactInformation,
    });
    dispatch({
      type: "finishContactInformation",
      contactInformation,
    });
  };

  const handleBack = () => dispatch({ type: "back" });

  const { bookingInformation, contactInformation, confirmation } =
    getActiveStep(state.stage);
  return (
    <>
      <section className="pt-20 flex justify-center">
        <div className="w-desktop py-12 px-40 flex flex-col gap-16">
          <Steps>
            <Step isActive={bookingInformation}>
              <StepNumber>1</StepNumber>
              <StepLabel>Booking Information</StepLabel>
            </Step>
            <Step isActive={contactInformation}>
              <StepNumber>2</StepNumber>
              <StepLabel>Contact Information</StepLabel>
            </Step>
            <Step isActive={confirmation}>
              <StepNumber>3</StepNumber>
              <StepLabel>Confirmation</StepLabel>
            </Step>
          </Steps>
          <section
            className={clsx({
              hidden: state.stage !== "bookingInformation",
            })}
          >
            <BookingInformationForm
              bookingInformation={state.bookingInformation}
              onSubmit={handleBookingInformationFinish}
            />
          </section>
          <section
            className={clsx({
              hidden: state.stage !== "contactInformation",
            })}
          >
            <ContactInformationForm
              contactInformation={state.contactInformation}
              onBack={handleBack}
              onSubmit={handleContactInformationFinish}
              isSubmitting={status === "loading"}
            />
          </section>
          <section
            className={clsx({
              hidden: state.stage !== "confirmation",
            })}
          >
            <Confirmation
              bookingInformation={state.bookingInformation}
              contactInformation={state.contactInformation}
            />
          </section>
        </div>
      </section>
    </>
  );
}
