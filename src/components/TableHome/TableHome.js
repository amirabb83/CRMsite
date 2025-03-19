import React from "react";
import './TableHome.css'
export default function TableHome({name , target , startdate , enddate , phone , reson }) {
  return (
    <div>
      <div class="table_component" role="region" tabindex="0">
        <table>
          <thead>
            <tr>
              <th>{name }</th>
              <th>{target} {phone} </th>
              <th>{startdate}</th>
              <th>{enddate} {reson}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
