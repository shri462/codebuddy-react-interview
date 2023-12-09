import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const TicketBooking = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rows: 3,
    },
  });

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatSelectionErr, setSeatSelectionErr] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const getSeats = (formData) => {
    setSelectedSeats([]);
    setSeatSelectionErr("");
    setBookingConfirmed(false);
    if (formData.rows >= 3 && formData.rows <= 10) {
      fetch(`https://codebuddy.review/seats?count=${formData.rows}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.data);
          setSeats(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const selectSeatHandler = (seat) => {
    if (selectedSeats.find((selectedSeat) => selectedSeat.seatNumber === seat.seatNumber)) {
      const newSeats = selectedSeats?.filter((dt) => dt.seatNumber !== seat.seatNumber);
      setSelectedSeats(newSeats);
    } else {
      selectedSeats.length < 5 && setSelectedSeats((prevState) => [...prevState, seat]);
    }

    if (selectedSeats.length >= 5) {
      setSeatSelectionErr("Max 5 seat selection is allowed");
    }
  };

  const checkOut = () => {
    fetch("https://codebuddy.review/submit", {
      method: "POST",
      body: JSON.stringify(selectedSeats.map((d) => d.id)),
    })
      .then((response) => {
        setBookingConfirmed(true);
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        setBookingConfirmed(false);
        console.error("error:", error);
      });
  };

  useEffect(() => {
    if (seatSelectionErr) {
      const seatErrTimer = setTimeout(() => {
        setSeatSelectionErr("");
      }, 2000);

      return () => {
        clearTimeout(seatErrTimer);
      };
    }
  }, [seatSelectionErr]);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <div className="text-2xl font-bold text-gray-800">Movie Ticket Booking</div>
      <div className="grid xl:auto-cols-max xl:grid-flow-col">
        <div className="xl:border-r-2 xl:pr-4">
          <form onSubmit={handleSubmit(getSeats)}>
            <div className="mt-8">
              <label htmlFor="rows" className="text-xl font-medium">
                Enter number of rows
              </label>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Rows are required",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers allowed",
                  },
                  min: {
                    value: 3,
                    message: "Mimimum number of rows should be 3",
                  },
                  max: {
                    value: 10,
                    message: "Maximum number of rows should be 10",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <input
                    className={`mt-1 w-full appearance-none rounded-md px-3 py-2 text-2xl text-slate-900 placeholder-slate-400 shadow-sm  ${
                      errors.rows ? "ring-2 ring-red-600" : "ring-1 ring-slate-200"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter rows"
                    onChange={onChange}
                    value={value}
                    id="rows"
                  />
                )}
                name="rows"
              />
              {errors.rows && <p className="mt-1 text-red-600">{errors.rows.message}</p>}
              <p className="mt-1">Enter number between 3-10</p>
            </div>

            <button
              className="mt-4 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"
              type="submit"
            >
              Get Seats
            </button>
          </form>

          {/* show seats */}
          <div className="mt-8">
            {seats.map((row, i) => (
              <div
                className="mb-6 mt-4 items-center  gap-8 rounded-lg bg-orange-100 p-4 md:flex"
                key={row.id}
              >
                <div className="text-lg">Row {seats.length - i}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-center gap-4 ">
                    {row.seats?.map((seat) => (
                      <div key={seat.id}>
                        <button
                          disabled={seat.isReserved}
                          onClick={() => selectSeatHandler(seat)}
                          className={`flex h-8 w-8  items-center justify-center rounded-lg border-2  md:h-16 md:w-16 ${
                            seat.isReserved ? "border-gray-500 bg-gray-400" : "border-orange-500"
                          } ${
                            selectedSeats.find(
                              (selectedSeat) => selectedSeat.seatNumber === seat.seatNumber,
                            )
                              ? "bg-orange-500 text-white"
                              : ""
                          }`}
                        >
                          {seat.seatNumber}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold">Booking Details</h2>
          {seatSelectionErr && <p className="mt-1 text-red-600">{seatSelectionErr}</p>}

          <div className="mt-8 grid grid-cols-2 gap-8 p-2">
            <div className="text-xl font-semibold">Selected Seats</div>
            <div className="text-xl font-semibold">Price</div>
          </div>

          {selectedSeats.map((selectedSeat, i) => (
            <div key={selectedSeat.id} className="grid grid-cols-2 gap-8 p-2">
              <div>
                {selectedSeat.seatNumber}{" "}
                <span className="text-gray-400">(row {selectedSeat.row + 1})</span>
              </div>
              <div>${(selectedSeat.row + 1) * 10 + 20}</div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-8 p-2">
            <div className="text-xl font-semibold">Total</div>
            <div className="text-xl font-semibold">
              ${selectedSeats?.reduce((acc, curr) => acc + ((curr.row + 1) * 10 + 20), 0)}
            </div>
          </div>

          {bookingConfirmed ? (
            <div className="mt-8 rounded-xl bg-green-200 p-8 text-center text-2xl">
              Booking Confirmed
            </div>
          ) : (
            <button
              onClick={checkOut}
              disabled={selectedSeats.length === 0}
              className={`mt-4 rounded-xl px-8 py-4 font-bold text-white ${
                selectedSeats.length === 0 ? "bg-gray-400" : "bg-blue-600"
              }`}
            >
              Proceed To Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
