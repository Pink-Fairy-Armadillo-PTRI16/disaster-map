import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div>
      <body>
      <table>
      <h2>List of Links</h2><br/>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Mailing Address</th>
          </tr>
        <tr>
          <td>FEMA</td>
          <td><a href='https://www.fema.gov'>https://www.fema.gov</a></td>
          <td>P.O. Box 10055 Hyattsville, MD 20782-8055</td>
        </tr>
        <tr>
          <td>American Red Cross</td>
          <td><a href='https://www.redcross.org'>https://www.redcross.org</a></td>
          <td>PO Box 37839 Boone, IA 50037-0839</td>
          </tr>
          <tr>
          <td>USA.gov</td>
          <td><a href='https://www.usa.gov'>https://www.usa.gov</a></td>
          <td>475 L'Enfant Plaza SW Room 4012 Washington, DC 20260-2200</td>
          </tr>
      </table>
      </body>
    </div>
  )
}

export default Links;