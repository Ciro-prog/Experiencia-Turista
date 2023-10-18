import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Property.css";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";
import BookingModal from "../../components/BookingModal/BookingModal";
import { Button } from "@mantine/core";
import Heart from "../../components/Heart/Heart";
import data from '../../utils/slider.json'
const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart id={id}/>
        </div>

        {/* image */}
        {
          data.map((card,id)=>(
            <section key={id}>
                <img src={data.image} alt="home image" />

<div className="flexCenter property-details">
  {/* left */}
  <div className="flexColStart left">
    {/* head */}
    <div className="flexStart head">
      <span className="primaryText">{data?.title}</span>
      <span className="orangeText" style={{ fontSize: "1.5rem" }}>
        $ {data?.price}
      </span>
    </div>

    {/* facilities */}
    <div className="flexStart facilities">
      {/* bathrooms */}
      <div className="flexStart facility">
        <FaShower size={20} color="#1F3E72" />
        <span>{data?.facilities?.bathrooms} Bathrooms</span>
      </div>

      {/* parkings */}
      <div className="flexStart facility">
        <AiTwotoneCar size={20} color="#1F3E72" />
        <span>{data?.facilities.parkings} Parking</span>
      </div>

      {/* rooms */}
      <div className="flexStart facility">
        <MdMeetingRoom size={20} color="#1F3E72" />
        <span>{data?.facilities.bedrooms} Room/s</span>
      </div>
    </div>

    {/* description */}

    <span className="secondaryText" style={{ textAlign: "justify" }}>
      {data?.description}
    </span>

    {/* address */}

    <div className="flexStart" style={{ gap: "1rem" }}>
      <MdLocationPin size={25} />
      <span className="secondaryText">
        {data?.address}{" "}
        {data?.city}{" "}
        {data?.country}
      </span>
    </div>

    {/* booking button */}
    {bookings?.map((booking) => booking.id).includes(id) ? (
      <>
        <Button
          variant="outline"
          w={"100%"}
          color="red"
          onClick={() => cancelBooking()}
          disabled={cancelling}
        >
          <span>Cancel booking</span>
        </Button>
        <span>
          Your visit already booked for date{" "}
          {bookings?.filter((booking) => booking?.id === id)[0].date}
        </span>
      </>
    ) : (
      <button
        className="button"
        onClick={() => {
          validateLogin() && setModalOpened(true);
        }}
      >
        Book your visit
      </button>
    )}

    <BookingModal
      opened={modalOpened}
      setOpened={setModalOpened}
      propertyId={id}
      email={user?.email}
    />
  </div>

  {/* right side */}
  <div className="map">
    <Map
      address={data?.address}
      city={data?.city}
      country={data?.country}
    />
  </div>
</div>
</div>
</div>

            </section>
            
          ))
        }
      
  );
};

export default Property;
