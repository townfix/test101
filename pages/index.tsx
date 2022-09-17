import { Layout, Page, Text, List } from "@vercel/examples-ui";
//import { useEffect, useState } from 'react'
//import dynamic from "next/dynamic";

export default function Index() {
  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Welcome! Viewing billing history for ... {/*  <userx></userx> */}
        V03
      </Text>
      <List>
        <li>Username: admin</li>
        {/* <li>Password: admin</li> */}
      </List>
      <hr />
      <List>
        <table style={{ borderSpacing: "2px" }}>
          <th>
            <td>Biller Name</td>
            <td>Month</td>
            <td>Arrears</td>
            <td>STATUS</td>
          </th>
          <tr>
            <td>Dummy</td>
            <td>JAN2001</td>
            <td>$1</td>
            <td>PAID</td>
          </tr>
          <tr>
            <td>Dummy</td>
            <td>FEB2001</td>
            <td>$5</td>
            <td>PAID</td>
          </tr>
          <tr>
            <td>Dummy</td>
            <td>MAR2001</td>
            <td>$3</td>
            <td>PAID</td>
          </tr>
        </table>
      </List>
    </Page>
  );
}

Index.Layout = Layout;
