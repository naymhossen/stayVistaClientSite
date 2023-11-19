import { useEffect, useState } from "react";
import Container from "../../../Shared/Container/Container";
import { useParams } from "react-router-dom";
import Loader from "../../../Shared/Loader";
import RoomHeader from "./RoomHeader";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const [rooms, setRooms] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("../../../public/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleCard = data.find((details) => details._id === id);
        setRooms(singleCard);
      });
  }, [id]);

  if (loading) <Loader />;

  return (
    <Container>
      <div>
        <div>
          {/* Details Header */}
          <RoomHeader rooms={rooms} />
        </div>
        {/* Calender And Details Info  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-14">
          {/* Details Part */}
          <div>
            <RoomInfo rooms={rooms} />
          </div>
          <div className="order-first md:order-last w-10/12 mx-auto">
            {/* Calender Part */}
            <RoomReservation rooms={rooms} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
