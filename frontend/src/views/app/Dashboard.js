/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


import HeaderV2 from '../../components/Headers/HeaderV2';
import MainBody from '../../components/MainBody';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
  
  }

  render() {
    return (
      <>
        <HeaderV2 />
        {/* Page content */}
        <MainBody header="test">55555</MainBody>
      </>
    );
  }
}

export default Dashboard;
