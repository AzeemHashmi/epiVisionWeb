import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Stream = () => {
  return (
    <div>
      <iframe
        width="640"
        height="480"
        src="https://rtsp.me/embed/n75BrKKD/"
        frameborder="0"
        allowfullscreen
      ></iframe>

<MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>

    </div>
  );
};

export default Stream;
