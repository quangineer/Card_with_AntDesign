import "./App.css";
import { Card } from "antd";
import React from "react";
import FacebookFilled from "@ant-design/icons-svg/lib/asn/FacebookFilled";
// import AntdIcon, { AntdIconProps } from '../components/AntdIcon';
import photo1 from './img/photo9.jpg'; 
function App() {
  return (
    <body>
      <div className="App">
        <Card style={{background: "antiquewhite"}}
          // actions={[<FacebookFilled style={{color: "blue"}}/>,
          //                 // <TwitterOutlined style={{color: "skyblue"}}/>,
          //                 // <InstagramOutlined style={{color: "purple"}}/>,
          //                 // <YoutubeFilled style={{color: "red"}}/>
          // ]}
          // cover={
          //   <div
          //     style={{
          //       height: 150,
          //       width: "100%",
          //       background: "linear-gradient(#FF007A, #4200FF)",
          //       color: "white",
          //       fontSize: 30,
          //       paddingTop: 20,
          //     }}
          //   >
          //     Property
          //   </div>
          // }
        >
          <p>
            <img
              src={photo1}
              alt="Property"
              style={{ width: "100%", height: "100%", objectFit: "cover",margin:0 }}
            />
          </p>
          <div style={{background:"linear-gradient(#FF007A,#4200FF)",color:"white",height:"100%",  border: "1px solid black",margin:0}}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>1234 Royal Ave,New West <br/> BC,V1V1V1</p>
          <p>

            <span style={{ display: "inline-block", marginLeft: "25px" }}>
            <strong>$3,000,000</strong>
            </span>
            <span style={{display: "inline-block", marginLeft: "20px"}}>Area Sqft: 7500 Sqfts</span>
          </p>
          <p>
            <span style={{ display: "inline-block", marginRight: "20px", marginLeft: "-25px" }}>
              4 bedrooms
            </span>
            <span>3 bathrooms</span>
          </p>
          <hr/>
          <p>
            <span style={{ display: "inline-block", marginRight: "5px" }}>
              Contact: <strong>Siam Coconut</strong> 
            </span>
            <button
              disabled
              style={{ backgroundColor: "green", color: "white", marginLeft: "5px" }}
            >
              Active
            </button>
          </p>
          </div>
        </Card>
      </div>
    </body>
  );
}

export default App;
