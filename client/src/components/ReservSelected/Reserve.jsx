import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import TableReservDates from "./TableReservDates";
import AddReservDate from "./AddReservDate";

import Typography from '@mui/material/Typography';

const Reserve = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]); 
    const [ok, setok] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllDetailsByID = async (id) => {
          try {
            const res = await axios.get("http://localhost:8800/reservations/reservation/" + id);
            // res.data checks not null or undefined
            // res.data.length checks length property of res.data is greater than 0.
            if (res.data && res.data.length > 0) {
              setDetails(res.data);
             // console.log(res.data[0]);
            } else {
              setok(false);
            }
          } catch (error) {
            console.log(error);
            console.log("HEllo error");
          }
        };
        fetchAllDetailsByID(id);
      }, []);
  
      

return(
    <div>
      {ok ? (
        <div>
        <Typography
          variant="h4"
          gutterBottom
          mb={4} 
          align="center"
          style={{color: '#ffffff', padding: "20px 0px 10px 0px"}}>
            Currently Scheduled Maintenance of the Selected Item
        </Typography>
          <div className="container">
            <div className="row">
              <div className="col-md mx-auto">
                             
                <TableReservDates details={details} ></TableReservDates>
               
              </div>
            </div>
            ;
          </div>
        </div>
      ) : (
        <div className="container text-center p-5">
          <h3 style={{color: "white"}}>
            No scheduled maintenances or reservations yet for the item with Resorce_id {id}!
          </h3>
        
        </div>
      )}

        <AddReservDate id={id}></AddReservDate>

    </div>

);


};

export default Reserve;
