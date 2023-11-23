import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../../Shared/Container/Container";
import RoomHeader from "./RoomHeader";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const room = useLoaderData();
  
  const {id} = useParams();

  const rooms = room.find( item => item._id === id)

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
          <div className="order-first md:order-last w-10P/12 mx-auto">
            {/* Calender Part */}
            <RoomReservation rooms={rooms} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
